// ==UserScript==
// @name           TEST
// @namespace      http://userscripts.org/users/141834
// @description    Manage Zoo World Wall Post ; Collect Stones, Claim mystery gifts, Claim collectible gift,Adopts animals, Get buildable items, Get Topiaries, Help others, Help animals, Heal animals, Feed animals, Find animals, Lend hands and more
// @include        http://*.facebook.com/*
// @include        https://*.facebook.com/*
// @include        http://facebook.com/*
// @include        https://facebook.com/*
// @exclude        http://*.facebook.com/*sk=messages*
// @exclude        http://*.facebook.com/*sk=events*
// @exclude        http://*.facebook.com/*sk=media*
// @exclude        http://*.facebook.com/*sk=ru*
// @copyright      Oz & JoeSimmons
// @version        Version
// @license        http://creativecommons.org/licenses/by-nc-nd/3.0/us/
// @require        http://sizzlemctwizzle.com/updater.php?id=75136
// ==/UserScript==

(function() { // use an anonymous function wrapper

var version = 'Version'; // cant use cdata+regexp to grab version dynamically because of webkit

/*
The changelog is now on the main script page
http://sizzlemctwizzle.com/updater.php?id=75136
*/

var unsafeWindow = unsafeWindow || window;

if(unsafeWindow.frameElement != null) return;

var imgs = {
bg : "http://i41.tinypic.com/eb68lu.png",
logo : "http://i44.tinypic.com/2j4dmhd.png",
icon : "http://photos-h.ak.fbcdn.net/photos-ak-sf2p/v27562/159/167746316127/app_2_167746316127_7873.gif"
};

// boolean to tell if the browser is running Greasemonkey or not
var isGM = (typeof GM_getValue != 'undefined' && typeof GM_getValue('a', 'b') != 'undefined');

// Get ID
function $(ID,root) {return (root||document).getElementById(ID);}

Array.prototype.inArray = function(value) {
for(var i=this.length-1; i>=0; i--) {if(this[i]==value) {return true;}}
return false;
};

Array.prototype.inArrayWhere = function(value) {
for(var i=0,l=this.length; i<l; i++) {if(this[i]==value) {return i;}}
return false;
};

String.prototype.find = function(s) {
return (this.indexOf(s) != -1);
};

// Define GM_addStyle if it's not Firefox
var GM_addStyle = function(css) {
        var head = document.getElementsByTagName('head')[0], style = document.createElement('style');
        if(head) {
        style.type = 'text/css';
        try {style.innerHTML = css} catch(x) {style.innerText = css}
        head.appendChild(style);
		}
    };

// $g by JoeSimmons. Supports ID, Class, and XPath (full with types) in one query
// Supports multiple id/class grabs in one query (split by spaces), and the ability to remove all nodes regardless of type
// See script page for syntax examples: http://userscripts.org/scripts/show/51532
function $g(que, O) {
if(!que||typeof(que)!='string'||que==''||!(que=que.replace(/^\s+/,''))) return false;
var obj=O||({del:false,type:6,node:document,doc:document}), r, t,
	idclass_re=/^[#\.](?!\/)[^\/]/, xp_re=/^\.?(\/{1,2}|count|id)/;
if(idclass_re.test(que)) {
var s=que.split(' '), r=new Array(), c;
for(var n=0; n<s.length; n++) {
switch(s[n].substring(0,1)) {
case '#': r.push(document.getElementById(s[n].substring(1))); break;
case '.': c=document.getElementsByClassName(s[n].substring(1));
		  if(c.length>0) for(var i=0; i<c.length; i++) r.push(c[i]); break;
}
}
if(r.length==1) r=r[0];
} else if(xp_re.test(que)) {
r = (obj['doc']||document).evaluate(que,(obj['node']||document),null,((t=obj['type'])||6),null);
if(typeof t=="number" && /[12389]/.test(t)) r=r[(t==1?"number":(t==2?"string":(t==3?"boolean":"singleNode")))+"Value"];
}
if(r && obj['del']===true) {
if(r.nodeType==1) r.parentNode.removeChild(r);
else if(r.snapshotItem) for(var i=r.snapshotLength-1; (item=r.snapshotItem(i)); i--) item.parentNode.removeChild(item);
else if(!r.snapshotItem) for(var i=r.length-1; i>=0; i--) if(r[i]) r[i].parentNode.removeChild(r[i]);
} return r;
}

// GM_config by JoeSimmons/sizzlemctwizzle/izzysoft
var GM_config = {
 storage: 'GM_config', // This needs to be changed to something unique for localStorage
 init: function() {
        // loop through GM_config.init() arguements
	for(var i=0,l=arguments.length,arg; i<l; ++i) {
		arg=arguments[i];
		switch(typeof arg) {
            case 'object': for(var j in arg) { // could be a callback functions or settings object
							switch(j) {
							case "open": GM_config.onOpen=arg[j]; delete arg[j]; break; // called when frame is gone
							case "close": GM_config.onClose=arg[j]; delete arg[j]; break; // called when settings have been saved
							case "save": GM_config.onSave=arg[j]; delete arg[j]; break; // store the settings objects
							default: var settings = arg;
							}
			} break;
            case 'function': GM_config.onOpen = arg; break; // passing a bare function is set to open
                        // could be custom CSS or the title string
			case 'string': if(arg.indexOf('{')!=-1&&arg.indexOf('}')!=-1) var css = arg;
				else GM_config.title = arg;
				break;
		}
	}
	if(!GM_config.title) GM_config.title = 'Settings - Anonymous Script'; // if title wasn't passed through init()
	var stored = GM_config.read(); // read the stored settings
	GM_config.passed_values = {};
	for (var i in settings) {
	GM_config.doSettingValue(settings, stored, i, null, false);
	if(settings[i].kids) for(var kid in settings[i].kids) GM_config.doSettingValue(settings, stored, kid, i, true);
	}
	GM_config.values = GM_config.passed_values;
	GM_config.settings = settings;
	if (css) GM_config.css.stylish = css;
 },
 open: function() {
 if(document.evaluate("//iframe[@id='GM_config']",document,null,9,null).singleNodeValue) return;
	// Create frame
	document.body.appendChild((GM_config.frame=GM_config.create('iframe',{id:'GM_config', style:'position:fixed; top:0; left:0; opacity:0; display:none; z-index:999; width:75%; height:75%; max-height:95%; max-width:95%; border:1px solid #000000; overflow:auto;'})));
        GM_config.frame.src = 'about:blank'; // In WebKit src cant be set until it is added to the page
	GM_config.frame.addEventListener('load', function(){
		var obj = GM_config, frameBody = this.contentDocument.getElementsByTagName('body')[0], create=obj.create, settings=obj.settings;
		obj.frame.contentDocument.getElementsByTagName('head')[0].appendChild(obj.create('style',{type:'text/css',textContent:obj.css.basic+obj.css.stylish}));

		// Add header and title
		frameBody.appendChild(obj.create('div', {id:'header',className:'config_header block center', innerHTML:obj.title}));

		// Append elements
		var anch = frameBody, secNo = 0; // anchor to append elements
		for (var i in settings) {
			var type, field = settings[i], value = obj.values[i];
			if (field.section) {
				anch = frameBody.appendChild(create('div', {className:'section_header_holder', id:'section_'+secNo, kids:new Array(
				  create('a', {className:'section_header center', href:"javascript:void(0);", id:'c_section_kids_'+secNo, textContent:field.section[0], onclick:function(){GM_config.toggle(this.id.substring(2));}}),
				  create('div', {id:'section_kids_'+secNo, className:'section_kids', style:obj.getValue('section_kids_'+secNo, "none")=="none"?"display: none;":""})
				  )}));
				if(field.section[1]) anch.appendChild(create('p', {className:'section_desc center',innerHTML:field.section[1]}));
				secNo++;
			}
			anch.childNodes[1].appendChild(GM_config.addToFrame(field, i, false));
		}

		// Add save and close buttons
		frameBody.appendChild(obj.create('div', {id:'buttons_holder', kids:new Array(
			obj.create('button',{id:'saveBtn',textContent:'Save',title:'Save options and close window',className:'saveclose_buttons',onclick:function(){GM_config.close(true)}}),
			obj.create('button',{id:'cancelBtn', textContent:'Cancel',title:'Close window',className:'saveclose_buttons',onclick:function(){GM_config.close(false)}}),
			obj.create('div', {className:'reset_holder block', kids:new Array(
				obj.create('a',{id:'resetLink',textContent:'Restore to default',href:'#',title:'Restore settings to default configuration',className:'reset',onclick:obj.reset})
		)}))}));

		obj.center(); // Show and center it
		window.addEventListener('resize', obj.center, false); // Center it on resize
		if (obj.onOpen) obj.onOpen(); // Call the open() callback function
		
		// Close frame on window close
		window.addEventListener('beforeunload', function(){GM_config.remove(this);}, false);
	}, false);
 },
 close: function(save) {
	if(save) {
		var type, fields = GM_config.settings, typewhite=/radio|text|hidden|checkbox/;
		for(f in fields) {
			var field = GM_config.frame.contentDocument.getElementById('field_'+f), kids=fields[f].kids;
			if(typewhite.test(field.type)) type=field.type;
				else type=field.tagName.toLowerCase();
			GM_config.doSave(f, field, type);
			if(kids) for(var kid in kids) {
			var field = GM_config.frame.contentDocument.getElementById('field_'+kid);
			if(typewhite.test(field.type)) type=field.type;
				else type=field.tagName.toLowerCase();
			GM_config.doSave(kid, field, type, f);
			}
		}
                if(GM_config.onSave) GM_config.onSave(); // Call the save() callback function
                GM_config.save();
	}
	if(GM_config.frame) GM_config.remove(GM_config.frame);
	delete GM_config.frame;
        if(GM_config.onClose) GM_config.onClose(); //  Call the close() callback function
 },
 set: function(name,val) {
	GM_config.values[name] = val;
 },
 get: function(name) {
	return GM_config.values[name];
 },
 isGM: typeof GM_getValue != 'undefined' && typeof GM_getValue('a', 'b') != 'undefined',
 log: (this.isGM) ? GM_log : ((window.opera) ? opera.postError : console.log),
 getValue : function(name, def) { return (this.isGM?GM_getValue:(function(name,def){return localStorage.getItem(name)||def}))(name, def||""); },
 setValue : function(name, value) { return (this.isGM?GM_setValue:(function(name,value){return localStorage.setItem(name,value)}))(name, value||""); },
 save: function(store, obj) {
    try {
      var val = JSON.stringify(obj||GM_config.values);
      GM_config.setValue((store||GM_config.storage),val);
    } catch(e) {
      GM_config.log("GM_config failed to save settings!");
    }
 },
 read: function(store) {
    try {
      var val = GM_config.getValue((store||GM_config.storage), '{}'), rval = JSON.parse(val);
    } catch(e) {
      GM_config.log("GM_config failed to read saved settings!");
      rval = {};
    }
    return rval;
 },
 reset: function(e) {
	e.preventDefault();
	var type, obj = GM_config, fields = obj.settings;
	for(f in fields) {
		var field = obj.frame.contentDocument.getElementById('field_'+f), kids=fields[f].kids;
		if(field.type=='radio'||field.type=='text'||field.type=='checkbox') type=field.type;
		else type=field.tagName.toLowerCase();
		GM_config.doReset(field, type, null, f, null, false);
		if(kids) for(var kid in kids) {
			var field = GM_config.frame.contentDocument.getElementById('field_'+kid);
			if(field.type=='radio'||field.type=='text'||field.type=='checkbox') type=field.type;
		else type=field.tagName.toLowerCase();
			GM_config.doReset(field, type, f, kid, true);
			}
	}
 },
 addToFrame : function(field, i, k) {
	var elem, obj = GM_config, anch = GM_config.frame, value = obj.values[i], Options = field.options, label = field.label, create=GM_config.create, isKid = k!=null && k===true;
		switch(field.type) {
				case 'textarea':
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('textarea', {id:'field_'+i,innerHTML:value, cols:(field.cols?field.cols:20), rows:(field.rows?field.rows:2)})
					), className: 'config_var'});
					break;
				case 'radio':
					var boxes = new Array();
					for (var j = 0,len = Options.length; j<len; j++) {
						boxes.push(create('span', {textContent:Options[j]}));
						boxes.push(create('input', {value:Options[j], type:'radio', name:i, checked:Options[j]==value?true:false}));
					}
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('span', {id:'field_'+i, kids:boxes})
					), className: 'config_var'});
					break;
				case 'select':
					var options = new Array();
					if(!Options.inArray) for(var j in Options) options.push(create('option',{textContent:Options[j],value:j,selected:(j==value)}));
						else options.push(create("option", {textContent:"Error - options needs to be an object type, not an array.",value:"error",selected:"selected"}));
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('select',{id:'field_'+i, kids:options})
					), className: 'config_var'});
					break;
				case 'checkbox':
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('label', {textContent:label, className:'field_label', "for":'field_'+i}),
						create('input', {id:'field_'+i, type:'checkbox', value:value, checked:value})
					), className: 'config_var'});
					break;
				case 'button':
				var tmp;
					elem = create(isKid ? "span" : "div", {kids:new Array(
						(tmp=create('input', {id:'field_'+i, type:'button', value:label, size:(field.size?field.size:25), title:field.title||''}))
					), className: 'config_var'});
					if(field.script) obj.addEvent(tmp, 'click', field.script);
					break;
				case 'hidden':
				elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('input', {id:'field_'+i, type:'hidden', value:value})
					), className: 'config_var'});
					break;
				default:
					elem = create(isKid ? "span" : "div", {title:field.title||'', kids:new Array(
						create('span', {textContent:label, className:'field_label'}),
						create('input', {id:'field_'+i, type:'text', value:value, size:(field.size?field.size:25)})
					), className: 'config_var'});
			}
	if(field.kids) {
	var kids=field.kids;
	for(var kid in kids) elem.appendChild(GM_config.addToFrame(kids[kid], kid, true));
	}
return elem;
},
 doSave : function(f, field, type, oldf) {
 var isNum=/^[\d\.]+$/, set = oldf ? GM_config.settings[oldf]["kids"] : GM_config.settings;
 switch(type) {
				case 'text':
					GM_config.values[f] = ((set[f].type=='text') ? field.value : ((isNum.test(field.value) && ",int,float".indexOf(","+set[f].type)!=-1) ? parseFloat(field.value) : false));
					if(set[f]===false) {
						alert('Invalid type for field: '+f+'\nPlease use type: '+set[f].type);
						return;
					}
					break;
				case 'hidden':
					GM_config.values[f] = field.value.toString();
					break;
				case 'textarea':
					GM_config.values[f] = field.value;
					break;
				case 'checkbox':
					GM_config.values[f] = field.checked;
					break;
				case 'select':
					GM_config.values[f] = field[field.selectedIndex].value;
					break;
				case 'span':
					var radios = field.getElementsByTagName('input');
					if(radios.length>0) for(var i=radios.length-1; i>=0; i--) {
						if(radios[i].checked) GM_config.values[f] = radios[i].value;
					}
					break;
			}
 },
 doSettingValue : function(settings, stored, i, oldi, k) {
		var set = k!=null && k==true && oldi!=null ? settings[oldi]["kids"][i] : settings[i];
			if(",save,open,close".indexOf(","+i) == -1) {
            // The code below translates to:
            // if a setting was passed to init but wasn't stored then 
            //      if a default value wasn't passed through init() then use null
            //      else use the default value passed through init()
            // 		else use the stored value
            var value = typeof stored[i] == "undefined" ? (typeof set['default'] == "undefined" ? null : set['default']) : stored[i];
            
            // If the value isn't stored and no default was passed through init()
            // try to predict a default value based on the type
            if (value === null) {
                switch(set["type"]) {
                    case 'radio': case 'select':
                        value = set.options[0]; break;
                    case 'checkbox':
                        value = false; break;
                    case 'int': case 'float':
                        value = 0; break;
                    default:
					value = (typeof stored[i]=="function") ? stored[i] : "";
                }
			}
			
			}
	GM_config.passed_values[i] = value;
 },
 doReset : function(field, type, oldf, f, k) {
 var isKid = k!=null && k==true, obj=GM_config,
	 set = isKid ? obj.settings[oldf]["kids"][f] : obj.settings[f];
 switch(type) {
			case 'text':
				field.value = set['default'] || '';
				break;
			case 'hidden':
				field.value = set['default'] || '';
				break;
			case 'textarea':
				field.value = set['default'] || '';
				break;
			case 'checkbox':
				field.checked = set['default'] || false;
				break;
			case 'select':
				if(set['default']) {
					for(var i=field.options.length-1; i>=0; i--)
					if(field.options[i].value==set['default']) field.selectedIndex=i;
				}
				else field.selectedIndex=0;
				break;
			case 'span':
				var radios = field.getElementsByTagName('input');
				if(radios.length>0) for(var i=radios.length-1; i>=0; i--) {
					if(radios[i].value==set['default']) radios[i].checked=true;
				}
				break;
		}
 },
 values: {},
 settings: {},
 css: {
 basic: 'body {background:#FFFFFF;}\n' +
 '.indent40 {margin-left:40%;}\n' +
 '* {font-family: arial, tahoma, sans-serif, myriad pro;}\n' +
 '.field_label {font-weight:bold; font-size:12px; margin-right:6px;}\n' +
 '.block {display:block;}\n' +
 '.saveclose_buttons {\n' +
 'margin:16px 10px 10px 10px;\n' +
 'padding:2px 12px 2px 12px;\n' +
 '}\n' +
 '.reset, #buttons_holder, .reset a {text-align:right; color:#000000;}\n' +
 '.config_header {font-size:20pt; margin:0;}\n' +
 '.config_desc, .section_desc, .reset {font-size:9pt;}\n' +
 '.center {text-align:center;}\n' +
 '.section_header_holder {margin-top:8px;}\n' +
 '.config_var {margin:0 0 4px 0; display:block;}\n' +
 '.section_header {font-size:13pt; background:#414141; color:#FFFFFF; border:1px solid #000000; margin:0;}\n' +
 '.section_desc {font-size:9pt; background:#EFEFEF; color:#575757; border:1px solid #CCCCCC; margin:0 0 6px 0;}\n' +
 'input[type="radio"] {margin-right:8px;}',
 stylish: ''},
 create: function(a,b) {
	var ret=window.document.createElement(a);
	if(b) for(var prop in b) {
		if(prop.indexOf('on')==0) ret.addEventListener(prop.substring(2),b[prop],false);
		else if(prop=="kids" && (prop=b[prop])) for(var i=0; i<prop.length; i++) ret.appendChild(prop[i]);
		else if(",style,accesskey,id,name,src,href,for".indexOf(","+prop.toLowerCase())!=-1) ret.setAttribute(prop, b[prop]);
		else ret[prop]=b[prop];
	}
	return ret;
 },
 center: function() {
	var node = GM_config.frame, style = node.style, beforeOpacity = style.opacity;
	if(style.display=='none') style.opacity='0';
	style.display = '';
	style.top = Math.floor((window.innerHeight/2)-(node.offsetHeight/2)) + 'px';
	style.left = Math.floor((window.innerWidth/2)-(node.offsetWidth/2)) + 'px';
	style.opacity = '1';
 },
 run: function() {
    var script=GM_config.getAttribute('script');
    if(script && typeof script=='string' && script!='') {
      func = new Function(script);
      window.setTimeout(func, 0);
    }
 },
 addEvent: function(el,ev,scr) { el.addEventListener(ev, function() { typeof scr == 'function' ? window.setTimeout(scr, 0) : eval(scr) }, false); },
 remove: function(el) { if(el && el.parentNode) el.parentNode.removeChild(el); },
 toggle : function(e) {
	var node=GM_config.frame.contentDocument.getElementById(e);
	node.style.display=(node.style.display!='none')?'none':'';
	GM_config.setValue(e, node.style.display);
 },
}; // end gm config

var main = {

// random assortment of vars
paused : false,
pauseClick : false,
boxFull : false,
pauseCount : 0,
profile : "",
acceptedText : "Got this!",
failText : "Already taken or expired!",

// Changeable vars for adaptation to other games (ease of use)
streamID : "contentArea",
stream : ($("game_feed") || $("home_stream") || $("pagelet_intentional_stream") || $("contentArea")),
navID : "navItem",
navIDnf : "navItem_nf",
gameID : "167746316127", // game id
gameURLpart : "playzoo", // game url folder for apps.facebook.com/HERE/ (only some games have this)
whitelistWhenPaused : ",materialsgreenhouse,topiarybabyanimal,claim,lend,collect,help,heal,feedhelp,claimbonus,claimtreasure,find,adopt", // categories separated by commas to be accepted even if gift box is full
gameName : "Zoo World",
gameAcronym : "TEST",
gameKeyUrlKeyword : "key", // used in the regex and xpath to look for "key=" or "sk=" or whatever it may be
xpQueryTextExcludes : ["Send a gift", "Start Team Race"],

// empty options object for later modification
opts : {},

// all regexps are stored here
whichRegex : /(adopt|lend|get materials|help|find|collect|get topiary|claim|feedhelp|heal|bonus|play)/,
ampRegex : /&amp;/g,
spaceRegex : /\s+/g,
colorRegex : /(blue|blue_billed|prairie|african|humpback|beluga|red_bellied|red|ruffed|ring_tailed|speckled|polar|great|white|white_tailed|sunda|yellow|caribbean|emperor|fire|giant|tasmanian|spanish|gray|leatherback|black|fennec|harbor|honey|snow|scottish|coconut)/,
animalRegex : /(crab|jay|firefinch|dog|wild dog|elephant|whale|wallaby|uakari|lemur|bear|egret|white pelican|rhino|tiger|deer|loris|mongoose|aardvark|anteater|bison|bongo|bonobo|flamingo|penguin|salamander|panda|gorilla|kangaroo|otter|stingray|devil|bobcat|donkey|lemming|mandrill|moose|lynx|wombat|wolf|walrus|sloth|sea turtle|mustang|ocelot|binturong|panther|dik_dik|fox|porpoise|badger|leopard|hedgehog|highland sheep)/,
keyRegex : null, // will be changed after main is defined - bug
nRegex : /\n+/g,
phpRegex : /#\/.*\.php/,
numberRegex : /\d+/,
profileRegex : /facebook\.com\/([^?]+)/i,
postStatusRegex : /(itemdone|itemneutral|itemprocessing|itemfailed)/,
accTextRegex : /(saved|fed|hurray|found|congratulations)/,
failTextRegex : /(no longer|claimed|oops|been fed|for trying)/,
boxFullRegex : /(gift box is full|exceeded)/,
emptyRegex : /\s*/g,

// all texts for accepted items
accText : {
			materialsgreenhouse : "Got This Greenhouse Materials!",
            topiarybabyanimal : "Got This Baby Animal Topiary!",
            claim : "Got This Mystery Gift!",
            claimbonus : "Got This Bonus!",
            claimtreasure : "Got This Treasure!",
            lend : "Did This Lending!",
            collect : "Got This Speed Stone!",
            help : "You Help This Beached Humpback!",
            feedhelp : "You Got Growth Formula!",
            heal : "You Heal This Animal!",
            find : "You Find This Animal!",
            adopt : "Adopted This Animal!"
		},

// Created by avg, modified by JoeSimmons. shortcut to create an element
create : function(a,b,c) {
	if(a=="text") {return document.createTextNode(b);}
	var ret=document.createElement(a.toLowerCase());
	if(b) for(var prop in b) if(prop.indexOf("on")==0) ret.addEventListener(prop.substring(2),b[prop],false);
		else if(",style,accesskey,id,name,src,href,which,rel".indexOf(","+prop.toLowerCase())!=-1) ret.setAttribute(prop.toLowerCase(), b[prop]);
		else ret[prop]=b[prop];
	if(c) c.forEach(function(e) { ret.appendChild(e); });
	return ret;
},

// cross-browser log function
log: ((isGM) ? GM_log : ((window.opera) ? opera.postError : console.log)),

// click something
click : function(e, type) {
if(!e && typeof e=='string') e=document.getElementById(e);
if(!e) {return;}
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent((type||'click'),true,true,window,0,0,0,0,0,false,false,false,false,0,null);
e.dispatchEvent(evObj);
},

// remove something from the page
remove : function(e) {
var node = (typeof e=='string') ? $(e) : e;
if(node) node.parentNode.removeChild(node);
},

// get what type of item it is
which : function(e) {
var w=e.textContent.toLowerCase().match(main.whichRegex), text=e.parentNode.parentNode.parentNode.textContent, lText = e.textContent.toLowerCase();
w = (w!=null) ? w[1].replace(main.spaceRegex,"") : "none";
switch(w) {
case "play": if(text.find("and friends")) w="help";
                                else if(text.find("successfully upgraded")) w="materialsgreenhouse";
                                else if(text.find("plant tables")) w="materialsgreenhouse";
                                else if(text.find("reached Level")) w="claimbonus"; break;
case "getmaterials": if(text.find("extra greenhouse materials")) w="materialsgreenhouse"; break;
case "gettopiary": if(text.find("baby animal topiary")) w="topiarybabyanimal"; break;
case "claim": if(text.find("a mystery gift")) w="claim";
                                    else if(text.find("reached Level")) w="claimbonus";
                                    else if(text.find("treasure chest")) w="claimtreasure"; break;
case "lend": if(text.find("needs help")) w="lend";
                                   else if(text.find("10 friends")) w="lend"; break;
case "collect": if(text.find("speed stone")) w="collect"; break;
case "help" : if(text.find("helping hands")) w="help";
                                else if(text.find("food")) w="feedhelp"; break;
case "heal" : if(text.find("hurt")) w="heal"; break;
case "find" : if(text.find("transported")) w="find"; break;
case "adopt" : if(text.find("Wildlife Care Network")) w="adopt";
                           else if(text.find("new home")) w="adopt"; break;
}
return w;
},

// get which color an animal is
whichColor : function(e) {
var w=e.toLowerCase().match(main.colorRegex);
w = (w!=null) ? w[1].replace(main.spaceRegex,"") : "none";
},

// get which animal it is
whichAnimal : function(e) {
var w=e.textContent.toLowerCase().match(main.animalRegex), color=main.whichColor(e.textContent.toLowerCase()), text=e.parentNode.parentNode.parentNode.textContent;
w = (w!=null) ? w[1].replace(main.spaceRegex,"") : "none";
},

gotItem : function(d, t) {
var doc=d, url=doc.URL.toLowerCase(), text=t.toLowerCase();
//	if(text.replace(main.emptyRegex, "") == "") main.debug(text);
	return ((main.accTextRegex.test(text) && !main.failTextRegex.test(text)));
},

// function to debug stuff. displays in a big white textarea box
debug : function(s) {
var d=$("debugT");
if(!d) document.body.insertBefore(d=main.create("textarea", {id:"debugT",style:"position:fixed; top:20px; left:20px; width:95%; height:90%; color:#000000; background:#ffffff; border:3px ridge #000000; z-index:99999;",ondblclick:function(e){e.target.style.display="none";}}, new Array(main.create("text",s))), document.body.firstChild);
	else d.innerHTML+="\n\n\n\n"+s;
if(d.style.display=="none") d.style.display="";
},

// get the key for the url
getKey : function(b) {
return b.match(main.keyRegex)[1];
},

// get the accepted items' times they were accepted
getAcceptedTime : function() {
return (new Function("return "+((isGM?GM_getValue:(function(name,def){var s=localStorage.getItem(name); return s==null||s=="undefined"?def:s;}))(main.gameAcronym.toLowerCase()+"_accepted_time_"+main.profile, "({})"))+";"))();
},

// save the accepted items' times they were accepted
setAcceptedTime : function(e) {
var val = JSON.stringify(e), store=main.gameAcronym.toLowerCase()+"_accepted_time_"+main.profile;
(isGM?GM_setValue:(function(name,value){return localStorage.setItem(name,value)}))(store,val);
},

// get the accepted items' times they were accepted
getFailedTime : function() {
return (new Function("return "+((isGM?GM_getValue:(function(name,def){var s=localStorage.getItem(name); return s==null||s=="undefined"?def:s;}))(main.gameAcronym.toLowerCase()+"_failed_time_"+main.profile, "({})"))+";"))();
},

// save the accepted items' times they were accepted
setFailedTime : function(e) {
var val = JSON.stringify(e), store=main.gameAcronym.toLowerCase()+"_failed_time_"+main.profile;
(isGM?GM_setValue:(function(name,value){return localStorage.setItem(name,value)}))(store,val);
},

// reset the accepted items
resetAccepted : function() {
if(confirm("Really reset accepted items?")) window.setTimeout(function(){
var reset=(isGM?GM_deleteValue:(function(name,def){return localStorage.setItem(name)}));
reset(main.gameAcronym.toLowerCase()+"_accepted_"+main.profile, "({})");
reset(main.gameAcronym.toLowerCase()+"_accepted_time_"+main.profile, "({})");
reset(main.gameAcronym.toLowerCase()+"_failed_"+main.profile, "({})");
reset(main.gameAcronym.toLowerCase()+"_failed_time_"+main.profile, "({})");
}, 0);
},

// get the accepted items
getAccepted : function() {
return (new Function("return "+((isGM?GM_getValue:(function(name,def){var s=localStorage.getItem(name); return s==null||s=="undefined"?def:s;}))(main.gameAcronym.toLowerCase()+"_accepted_"+main.profile, "({})"))+";"))();
},

// save the accepted items
setAccepted : function(e) {
var val = JSON.stringify(e), store=main.gameAcronym.toLowerCase()+"_accepted_"+main.profile;
(isGM?GM_setValue:(function(name,value){return localStorage.setItem(name,value)}))(store,val);
},

// get the accepted items
getFailed : function() {
return (new Function("return "+((isGM?GM_getValue:(function(name,def){var s=localStorage.getItem(name); return s==null||s=="undefined"?def:s;}))(main.gameAcronym.toLowerCase()+"_failed_"+main.profile, "({})"))+";"))();
},

// save the accepted items
setFailed : function(e) {
var val = JSON.stringify(e), store=main.gameAcronym.toLowerCase()+"_failed_"+main.profile;
(isGM?GM_setValue:(function(name,value){return localStorage.setItem(name,value)}))(store,val);
},

// get number of current requests
get currReqs() {
return $g("count(.//iframe)",{node:$("silent_req_holder"),type:1});
},

// generate a refresh time
get refTime() {
var t=2;
switch(GM_config.get("arinterval")) {
case "sixth": t=0.1666667; break; // 10 seconds
case "third": t=0.3333333; break; // 20 seconds
case "half": t=0.5; break; // 30 seconds
case "one": t=1; break; // 1 minute
case "two": t=2; break; // 2 minutes
case "three": t=3; break; // 3 minutes
case "four": t=4; break; // 4 minutes
case "five": t=5; break; // 5 minutes
case "ten": t=10; break; // 10 minutes
case "30s2m": t=Math.random() * 2; // random time between 30 seconds and 2 minutes
			  while(t < 0.5 || t > 2) {
				if(t < 0.5) t *= 1.25; // make it bigger if too small
				else if(t > 2) t -= t/1.25; // make it smaller if too big
			  }
			  break;
}
return Math.round((t*60000)+(Math.random()*(t*250)));
},

// get the real url of the page
get realURL() {
var u=window.location.href, host=window.location.host, protocol=window.location.protocol+"//", hash=window.location.hash;
if(hash!="" && main.phpRegex.test(hash)) u=protocol+host+hash.split("#")[1];
else if(hash!="" && hash.find("#")) u=u.split("#")[0];
return u;
},

// auto click "like" buttons if enabled
like : function(id) {
var like=$g("//a[contains(@id,'_"+id+"')]/ancestor::span/button[@name='like' and @type='submit']", {type:9});
if(like) like.click();
},

expand : function() {
var posts=$g("count(.//*[starts-with(@id,'stream_story_') or starts-with(@id,'div_story_') or starts-with(@id,'li_story_')]/.[contains(@class,'"+main.gameID+"')])", {node:main.stream, type:1}),
	more=$g("//a[contains(.,'Older Posts') and @class='PagerMoreLink' and @rel='async-post' and not(contains(@class,'async_saving'))]", {type:9}),
	min = main.opts["minposts"];
switch(min != "off" && more) {
case true: if(posts < parseInt(min)) main.click(more);
		   else main.opts["minposts"] = "off"; break;
}
},

// show config screen
config : function() {
if(main.currReqs==0) GM_config.open();
	else window.setTimeout(main.config, 250);
},
similarPosts : function() {
// Auto click "show x similar posts" links
var similarposts=$g(".//a[@rel='async' and contains(@href,'oldest=') and contains(@href,'newest=')] | .//a[@rel='async' and contains(@ajaxify,'oldest=') and contains(@ajaxify,'newest=')] | .//a[@rel='async' and contains(.,'SHOW') and contains(.,'SIMILAR POSTS')]", {node:main.stream, type:7}),
	posts=$g("count(.//*[starts-with(@id,'stream_story_') and contains(@class,'"+main.gameID+"')])", {node:main.stream, type:1}),
	max = main.opts["maxposts"], maxC = parseInt(max) || 9999;
if(max == "off" || (max != "off" && posts < maxC)) {
	for(var i=0,sp; (sp=similarposts.snapshotItem(i)); i++) {
		if(max=="off" || ((parseInt(sp.textContent.match(main.numberRegex)[0]) + posts) < maxC)) {
			main.click(sp);
			return;
		} else return;
	}
}
},

// refresh function. be sure to only do it if the config isn't up, it isn't paused, and requests are finished
refresh : function() {
if(!main.paused && !$("GM_config") && main.currReqs==0) {
var i=0, refint=window.setInterval(function() {
	if(i >= 12 && main.currReqs==0) {
		window.clearInterval(runint);
		window.clearInterval(refint);
		window.location.replace(main.opts["filteronly"]?"http://www.facebook.com/home.php?filter=app_"+main.gameID+"&show_hidden=true&ignore_self=true&sk=lf" : main.realURL);
	}
		else if(i < 12 && main.currReqs==0) i++;
		else i=0;
}, 250);
} else window.setTimeout(main.refresh, (main.currReqs==0?1:main.currReqs)*1000);
},

// update debug status box
status : function() {
switch(main.pauseCount) {
case 0: if(!main.pauseClick) main.paused=false; break;
}
var statusText = !main.boxFull ? (!main.paused?"["+main.gameAcronym+"] "+main.currReqs+" requests currently.":(!main.pauseClick?("["+main.pauseCount+"] "):"")+"[PAUSED] Click this box to unpause") : "[STOPPED] Gift box is full - Refresh to restart";
switch(document.title != statusText) {case true: document.title=statusText; break;}
switch($("status").textContent != statusText) {case true: $("status").textContent = statusText; break;}
if(!main.pauseClick && main.paused && main.pauseCount>0) main.pauseCount--;
},

// load an item url
open : function(url, key, w) {
// make sure to stay under the gift box limit but still get all items that don't go into the gift box
if((main.paused && !(main.whitelistWhenPaused.find(","+w))) || (main.opts["maxrequests"]-main.currReqs) == 0) {
return; 
}
$("item_"+key).id = "item_processing_" + key;
switch(main.opts["colorcode"]) {
case true:
var div = $g("//a[contains(@id,'"+key+"')]/ancestor::*[starts-with(@id,'stream_story_') and not(contains(@id,'_collapsed'))]", {type:9});
if(div) div.className = div.className.replace(main.postStatusRegex, "itemprocessing");
break;
}
$("silent_req_holder").appendChild(main.create("iframe", {src:url, which:w, id:key, style:"display:none;visibility:hidden;width:0;height:0;", onload:function(e) {
var doc=e.target.contentDocument, w=e.target.getAttribute("which"), key=e.target.getAttribute("id"), acc=main.getAccepted(), accTime=main.getAcceptedTime(), failed=main.getFailed(), failedTime=main.getFailedTime(), item=$("item_processing_"+key), text=$("app_content_"+main.gameID, doc);

// get bare text section
if(text) text=$g(".//div[@class='main_giftConfirm_cont']/h3", {node:text,doc:doc,type:9}) || text || doc.body;
text = text.textContent;

var gotItem = main.gotItem(doc, text);

if(doc.body.textContent.find("bits got lost on the way to your computer") || $("errorPageContainer",doc)) return;

// auto click "like" if enabled
switch(main.opts["autolike"]) {case true: main.like(key); break;}

switch(gotItem) {
case true: item.textContent = main.accText[w] || main.acceptedText; // change text, or use a backup default
		   item.setAttribute("id", "item_done_"+key);
		   accTime[w][key] = new Date().getTime();
		   main.setAcceptedTime(accTime);
		   acc[w].push(key);
		   main.setAccepted(acc);
		   break;
case false: item.textContent = main.failText;
			item.setAttribute("id", "item_failed_"+key);
			failedTime[w][key] = new Date().getTime();
			main.setFailedTime(failedTime);
			failed[w].push(key);
			main.setFailed(failed);
			break;
}

switch(main.opts["colorcode"]) {
case true:
var div = $g("//a[contains(@id,'"+key+"')]/ancestor::*[starts-with(@id,'stream_story_') and not(contains(@id,'_collapsed'))]", {type:9});
if(div) div.className = div.className.replace(main.postStatusRegex, "item"+(gotItem ? "done" : "failed"));
break;
}

// remove the iframe
main.remove(key);

if(main.opts["autostop"] && (doc.URL.find("max_gift") || main.boxFullRegex.test(text))) { // auto-pause when signal received of a full gift box
//main.debug("(copy and paste this in the forum if your gift box is not actually full).\nwhich item - "+w+"\nitem key - "+key+"\nitem url: "+doc.URL+"\npage text: "+text.replace(/(\s)\s+/g, "$1"));
main.boxFull =  true;
main.pauseClick = true;
main.paused = true;
$("status").style.backgroundColor = "#FF0000";
$g("//div[@id='silent_req_holder']/iframe", {del:true});
}
}}));
window.setTimeout(main.remove, Math.round(main.opts["reqtimeout"]*1000), key);
},

// core function. this loops through posts and loads them
run : function() {
if($("GM_config") || main.currReqs >= main.opts["maxrequests"]) {return;}
		var opts=main.opts, wallposts=$g(".//a[contains(@href,'"+main.gameURLpart+"') and not(starts-with(@id,'item_')) and contains(@href,'"+main.gameKeyUrlKeyword+"=') and not(contains(.,'"+main.xpQueryTextExcludes.join("')) and not(contains(.,'")+"'))]", {type:7, node:main.stream});
		if(wallposts.snapshotLength==0) {return;}
		var open=main.open, accText=main.accText, getKey=main.getKey,
			which=main.which, whichAnimal=main.whichAnimal, acc=main.getAccepted(), accTime=main.getAcceptedTime(), failed=main.getFailed(), failedTime=main.getFailedTime();

// loop through and grab stuff
var ssi=wallposts.snapshotItem, i=0, len=wallposts.snapshotLength;
do {
	var item=wallposts.snapshotItem(i), key = getKey(item.href), w = which(item), wA=whichAnimal(item);
if(w != "none") {
try {
if(!acc[w]) {
acc[w] = new Array();
main.setAccepted(acc);
}
if(!accTime[w]) {
accTime[w] = {};
main.setAcceptedTime(accTime);
}
if(!failed[w]) {
failed[w] = new Array();
main.setFailed(failed);
}
if(!failedTime[w]) {
failedTime[w] = {};
main.setFailedTime(failedTime);
}
} catch(e) {
if(!acc[w]) {
acc[w] = new Array();
main.setAccepted(acc);
}
if(!accTime[w]) {
accTime[w] = {};
main.setAcceptedTime(accTime);
}
if(!failed[w]) {
failed[w] = new Array();
main.setFailed(failed);
}
if(!failedTime[w]) {
failedTime[w] = {};
main.setFailedTime(failedTime);
}
}
item.setAttribute("id", "item_"+key);
item.setAttribute("title", item.textContent);
switch(main.opts["colorcode"]) {
case true:
var div = $g("//a[@id='"+item.id+"']/ancestor::*[starts-with(@id,'stream_story_') and not(contains(@id,'_collapsed'))]", {type:9});
if(div) div.className += " itemneutral";
break;
}
switch(acc[w].inArray(key)) {
case false: if(!$(key) && !failed[w].inArray(key)) {
	switch(w) {
		case "adopt": if(opts["adopt"] && (opts[wA] || typeof opts[wA]!="boolean")) open(item.href, key, w); break;
		case "find" : if(opts["find"]) open(item.href, key, w); break;
        case "heal" : if(opts["heal"]) open(item.href, key, w); break;
        default: switch(opts[w]) {case true: open(item.href, key, w); break;}
	}
} else if(failed[w].inArray(key)) {
	if(div) div.className = div.className.replace(main.postStatusRegex, "itemfailed");
	item.textContent = main.failText;
	item.setAttribute("id", "item_failed_"+key);
}
break;
case true: if(div) div.className = div.className.replace(main.postStatusRegex, "itemdone");
		   item.textContent = accText[w] || main.acceptedText; // change text, or use a backup default
		   item.setAttribute("id", "item_done_"+key); // add id so it can be styled if wanted

		   break;
}
}
}while (++i < len);
}
};
main.keyRegex = new RegExp("&(?:amp;)?"+main.gameKeyUrlKeyword+"=([0-9a-zA-Z]+)", "i");

if($("pagelet_navigation") || $(main.navIDnf)) { // run script if on homepage

// pre-load the config
GM_config.init("<img src='"+imgs.logo+"'> v"+version, {
	adopt : {section : ["Manager Options"],label : "Adopt Animals?",type: "checkbox","default" : false,kids : {heal : {label : "Heal Animals?",type: "checkbox","default" : false},find : {label : "Find Animals?",type: "checkbox","default" : false},help : {label : "Help the beached Humpback?",type: "checkbox","default" : false},feedhelp : {label : "Help Feed Animals?",type: "checkbox","default" : false},claim : {label : "Claim the Mystery Gift?",type: "checkbox","default" : false,},claimbonus : {label : "Claim Bonus?",type: "checkbox","default" : false},claimtreasure : {label : "Claim Treasure?",type: "checkbox","default" : false}}},
collect : {label : "Collect Speed Stone?",type: "checkbox","default" : false,kids : {topiarybabyanimal : {label : "Get Baby Animal Topiary?",type: "checkbox","default" : false},materialsgreenhouse : {label : "Get greenhouse materials?",type: "checkbox","default" : false},lend : {label : "Lend a hand?",type: "checkbox","default" : false}}},
        adopt : {section : ["Manager Options"],label : "Adopt Animals?",type: "checkbox","default" : false,kids : {heal : {label : "Heal Animals?",type: "checkbox","default" : false},find : {label : "Find Animals?",type: "checkbox","default" : false},help : {label : "Help the beached Humpback?",type: "checkbox","default" : false},feedhelp : {label : "Help Feed Animals?",type: "checkbox","default" : false},claim : {label : "Claim the Mystery Gift?",type: "checkbox","default" : false,},claimbonus : {label : "Claim Bonus?",type: "checkbox","default" : false},claimtreasure : {label : "Claim Treasure?",type: "checkbox","default" : false}}},
aardvark : {section : ["Specific Animal Adoption"],label : "Aardvark?",type: "checkbox","default" : false,kids : {africanelephant : {label : "African Elephant?",type: "checkbox","default" : false},africanwilddog : {label : "African Wild Dog?",type: "checkbox","default" : false},anteater : {label : "Anteater?",type: "checkbox","default" : false},whalebeluga : {label : "Beluga Whale?",type: "checkbox","default" : false},binturong : {label : "Binturong?",type: "checkbox","default" : false},bison : {label : "Bison?",type: "checkbox","default" : false},pantherblack : {label : "Black Panther?",type: "checkbox","default" : false},firefinchblue_billed : {label : "Blue-billed Firefinch?",type: "checkbox","default" : false},crabblue : {label : "Blue Crab?",type: "checkbox","default" : false},jayblue : {label : "Blue Jay?",type: "checkbox","default" : false}}},
bobcat : {label : "Bobcat?",type: "checkbox","default" : false,kids : {bongo : {label : "Bongo?",type: "checkbox","default" : false},bonobo : {label : "Bonobo?",type: "checkbox","default" : false},flamingocaribbean : {label : "Caribbean Flamingo?",type: "checkbox","default" : false},crabcoconut : {label : "Coconut Crab?",type: "checkbox","default" : false},dik_dik : {label : "Dik-dik?",type: "checkbox","default" : false},donkey : {label : "Donkey?",type: "checkbox","default" : false},penguinemperor : {label : "Emperor Penguin?",type: "checkbox","default" : false},foxfennec : {label : "Fennec Fox?",type: "checkbox","default" : false},salamanderfire : {label : "Fire Salamander?",type: "checkbox","default" : false},pandagiant : {label : "Giant Panda?",type: "checkbox","default" : false}}},
gorilla : {label : "Gorilla?",type: "checkbox","default" : false,kids : {wolfgray : {label : "Gray Wolf?",type: "checkbox","default" : false},egretgreat : {label : "Great Egret?",type: "checkbox","default" : false},pelicangreatwhite : {label : "Great White Pelican?",type: "checkbox","default" : false},porpoiseharbor : {label : "Harbor Porpoise?",type: "checkbox","default" : false},hedgehog : {label : "Hedgehog?",type: "checkbox","default" : false},badgerhoney : {label : "Honey Badger?",type: "checkbox","default" : false},whalehumpback : {label : "Humpback Whale?",type: "checkbox","default" : false},kangaroo : {label : "Kangaroo?",type: "checkbox","default" : false},seaturtleleatherback : {label : "Leatherback sea Turtle?",type: "checkbox","default" : false}}},
lemming : {label : "Lemming?",type: "checkbox","default" : false,kids : {mandrill : {label : "Mandrill?",type: "checkbox","default" : false},moose : {label : "Moose?",type: "checkbox","default" : false},mustang : {label : "Mustang?",type: "checkbox","default" : false},ocelot : {label : "Ocelot?",type: "checkbox","default" : false},otter : {label : "Otter?",type: "checkbox","default" : false},dogprairie : {label : "Pairie Dog?",type: "checkbox","default" : false},bearpolar : {label : "Polar Bear?",type: "checkbox","default" : false},wallabyred_bellied : {label : "Red-bellied Wallaby?",type: "checkbox","default" : false},uakarired : {label : "Red Uakari?",type: "checkbox","default" : false},lemurring_tailed : {label : "Ring-tailed Lemur?",type: "checkbox","default" : false},lemurruffed : {label : "Ruffed Lemur?",type: "checkbox","default" : false}}},
highlandsheepscottish : {label : "Scottish Highland Sheep?",type: "checkbox","default" : false,kids : {sloth : {label : "Sloth?",type: "checkbox","default" : false},leopardsnow : {label : "Snow Leopard?",type: "checkbox","default" : false},lynxspanish : {label : "Spanish Lynx?",type: "checkbox","default" : false},bearspeckled : {label : "Speckled Bear?",type: "checkbox","default" : false},stingray : {label : "Stingray?",type: "checkbox","default" : false},lorissunda : {label : "Sunda Loris?",type: "checkbox","default" : false},deviltasmanian : {label : "Tasmanian Devil?",type: "checkbox","default" : false},walrus : {label : "Walrus?",type: "checkbox","default" : false},rhinowhite : {label : "White Rhino?",type: "checkbox","default" : false}}},
deerwhite_tailed : {label : "White-tailed Deer?",type: "checkbox","default" : false,kids : {tigerwhite : {label : "White Tiger?",type: "checkbox","default" : false},wombat : {label : "Wombat?",type: "checkbox","default" : false},mongooseyellow : {label : "Yellow Mongoose?",type: "checkbox","default" : false}}},
        arinterval : {
			section : [ "Basic Tech Options" ],
			label : "Auto Refresh",
			type : "select",
			options : {
				off : "Off",
				sixth : "10 seconds",
				third : "20 seconds",
				half : "30 seconds",
				one : "1 minute",
				two : "2 minutes",
				three : "3 minutes",
				four : "4 minutes",
				five : "5 minutes",
				ten : "10 minutes",
				"30s2m" : "30sec-2min random"
			},
			"default" : "30sec-2min random"
	},
	
	filteronly : {
		label : "Run only on "+main.gameName+"		filter page?",
		type : "checkbox",
		"default" : false
	},
	colorcode : {
		label : "Color Code Item Posts?",
		type : "checkbox",
		"default" : true
	},
	autolike : {
		label : "Auto \"like\" clicked posts? (buggy; use at own risk)",
		type : "checkbox",
		"default" : false
	},
	similarposts : {
		label : "Autoclick \"Show Similar Posts\" links?",
		type : "checkbox",
		"default" : false
	},
	status : {
		label : "Show debug status bar?",
		type : "checkbox",
		"default" : true
	},
	inputtimeoutenable : {
		label : "Enable Typing Auto-pause",
		type : "checkbox",
		"default" : false,
		kids : {
			inputtimeout : {
				label : "Timeout (length of pause)",
				type : "float",
				"default" : 30
			}
		}
	},
	minposts : {
		label : "Minimum number of posts to show",
		type : "select",
		options : {
		off : "Off",
		5 : "5",
		10 : "10",
		20 : "20",
		30 : "30",
		40 : "40",
		50 : "50"
		},
		"default" : "Off"
	},
	maxposts : {
		label : "Maximum number of posts to process",
		type : "select",
		options : {
		off : "Unlimited",
		5 : "5",
		10 : "10",
		20 : "20",
		30 : "30",
		40 : "40",
		50 : "50",
		100 : "100"
		},
		"default" : "Unlimited"
	},
	maxrequests : {
		section : ["Advanced Tech Options"],
		label : "Max simultaneous requests",
		type : "float",
		"default" : 1,
		title : "WARNING: ONLY 1 IS RECOMMENDED UNLESS YOU WANT TO RISK BEING BANNED."
	},
	reqtimeout : {
		label : "Item Acceptance Page Timeout (seconds)",
		type : "float",
		"default" : 30
	},
	autostop : {
		label : "Autostop script when gift box is full?",
		type : "checkbox",
		"default" : true
	},
	reset : {
		label : "Reset Accepted Items",
		type : "button",
		script : main.resetAccepted
	}
},

// Custom styling for the options interface
"body {color: #35BDA2 !important; margin:0 !important; background:#000000 url('"+imgs.bg+"') !important;}\n"+
".section_header {background:#35BDA2 !important; display:block;}\n"+
".section_header_holder {padding:0 6px 0 6px !important; margin-top:8px !important;}\n"+
".field_label {font-size:11px !important;}\n"+
"span>label.field_label {margin-right:3px !important;}\n"+
"#header {font-size:18px !important;}\n"+
"span.config_var {display:inline !important; margin-left:14px !important;}\n"+
"#resetLink {color: #35BDA2 !important; margin-right:6px !important;}"+
"#saveBtn, #cancelBtn {position:fixed; background-color: #000000 !important; -moz-border-radius: 4px !important; border: 1px solid #4E483D !important;}\n"+
"#saveBtn {color: #5B9337 !important; bottom:4px; right:80px;}\n"+
"#cancelBtn {color: #BB0000 !important; bottom:4px; right:6px;}\n"+
"input[type=\"text\"] {text-align: center !important;width: 34px !important; color: #CCCCCC !important; background-color: #000000 !important; -moz-border-radius: 4px !important; border: 1px solid #4E483D !important;}"
);

if(GM_config.get("filteronly") && main.realURL.find("filter=app_"+main.gameID)) GM_addStyle("#contentArea *[id*=\"_story_\"]:not([class*=\"aid_"+main.gameID+"\"]):not([id*=\"_collapsed\"]) {display:none !important;}");

// add options shortcut to user script commands
try {
GM_registerMenuCommand(main.gameName+" Wall Manager "+version+" Options", main.config);
} catch(e) {}

// add div that holds the iframes for requests
document.body.insertBefore(main.create("div", {id:"silent_req_holder",style:"display:none;visibility:hidden;width:0;height:0;"}), document.body.firstChild);

// Method to work on multiple accounts
var prof = $("navAccountName") || document.evaluate(".//a[.='Profile' or .='Profilo' or .='Profiel' or .='Profil' or .='Perfil']", ($("pageNav") || document.body), null, 9, null).singleNodeValue;
if(prof) main.profile = prof.href.find("id=") ? prof.href.split("id=")[1].split("&")[0] : prof.href.match(main.profileRegex)[1];

// if on the homepage with the home feed showing
if(($("pagelet_navigation") && (GM_config.get("filteronly")?main.realURL.find("filter=app_"+main.gameID):true)) || $("zynga_games")) {

// add stylesheets
GM_addStyle(""+
"#"+main.streamID+" a[id^=\"item_done_\"] {font-weight: bold; font-size: 12px; color: #008800;}\n"+
"#"+main.streamID+" a[id^=\"item_\"]:not([id^=\"item_done_\"]):not([id^=\"item_failed_\"]):not([id^=\"item_processing_\"]) {font-weight: normal; font-size: 10px; color: #6E6E6E;}\n"+
"#"+main.streamID+" a[id^=\"item_processing_\"] {color: #DFDF00 !important;}\n"+
"#"+main.streamID+" a[id^=\"item_failed_\"] {font-weight: bold; font-size: 12px; color: #D70000;}"+
(GM_config.get("colorcode") ? ""+
"#"+main.streamID+" *[id^=\"stream_story_\"], #"+main.streamID+" .itemneutral {background-color: #E8E8E8;}"+
"#"+main.streamID+" .itemdone {background-color: #91FF91 !important;}\n"+
"#"+main.streamID+" .itemprocessing {background-color: #FFFF7D !important;}\n"+
"#"+main.streamID+" .itemfailed {background-color: #FF7171 !important;}"+
"#"+main.streamID+" a[id^=\"item_\"] {color: #000000 !important;}" : "")
);

// method to speed up script considerably
var tempopts={}, settings=GM_config.settings;
for(var thing in settings) { // go through the options making cached options copy
var g=GM_config.get(thing), kids=settings[thing].kids;
switch(typeof g) {
case "boolean": tempopts[thing] = g ? true : false; break;
case "number": tempopts[thing] = g || 0; break;
case "text": tempopts[thing] = g || ""; break;
default: tempopts[thing] = g;
}
if(kids && typeof kids=="object") for(var kid in kids) { // go through the extended settings also
var k=GM_config.get(kid);
switch(typeof k) {
case "boolean": tempopts[kid] = k ? true : false; break;
case "number": tempopts[kid] = k || 0; break;
case "text": tempopts[kid] = k || ""; break;
default: tempopts[kid] = k;
}
}
}
main.opts = tempopts; tempopts=null; k=null; g=null;

// another method to speed up - keep about:config clean
var acc=main.getAccepted(), accTime=main.getAcceptedTime(), timeNow=new Date().getTime();
for(var w in accTime) {
var accTimew=accTime[w], accw=acc[w];
for(var k in accTimew) { // loop through the accepted items' times
var days=(timeNow - accTimew[k]) / 1000 / 60 / 60; // get the existance time in hours
if(days > 48 && accw.inArray(k)) { // an old accepted item is over 48 hours (2 days) old
accw.splice(accw.inArrayWhere(k), 1); // remove from accepted items array
delete accTimew[k]; // remove from time object
}
}
}
var failed=main.getFailed(), failedTime=main.getFailedTime(), timeNow=new Date().getTime();
for(var w in failedTime) {
var failedTimew=failedTime[w], failedw=failed[w];
for(var k in failedTimew) { // loop through the failed items' times
var days=(timeNow - failedTimew[k]) / 1000 / 60 / 60; // get the existance time in hours
if(days > 48 && failedw.inArray(k)) { // an old failed item is over 48 hours (2 days) old
failedw.splice(failedw.inArrayWhere(k), 1); // remove from failed items array
delete failedTimew[k]; // remove from time object
}
}
}
main.setAccepted(acc);
main.setAcceptedTime(accTime);
main.setFailed(failed);
main.setFailedTime(failedTime);

// add debug status bar to page
document.body.appendChild(main.create("div", {id:"status",style:"position: fixed; bottom: 4px; left: 4px; padding: 2px; background: #FFFFFF; color: #000000; border: 1px solid #4F4F4F; font-family: arial, verdana, sans-serif; font-size: 1em; z-index: 99998; width: 178px; text-align: center;",textContent:"["+main.gameAcronym+"] 0 requests currently.", onclick:function(e){
if(main.boxFull) return;
main.paused = !main.paused;
main.pauseClick = true;
main.pauseCount = main.opts["inputtimeout"] || 15;
main.status();
}}));

// listen for key presses to autopause, if enabled
if(GM_config.get("inputtimeoutenable")) {
window.addEventListener("keydown", function(e) {
if(",9,18,33,34,35,36,37,38,39,40,116".find(","+e.keyCode) || (main.paused && main.pauseClick)) return;
main.paused=true;
main.pauseClick=false;
main.pauseCount = main.opts["inputtimeout"] || 15;
main.status();
}, false);
}

// make script run every second, update debug bar, and click similar posts links
var runint = window.setInterval(function(e){
window.setTimeout(function(){main.run();},0);
switch(main.opts["status"]) {case true: main.status(); break;}
switch(main.opts["similarposts"]) {case true: main.similarPosts(); break;}
main.expand();
},1000);

// stuff to do on full page load
window.addEventListener("load", function(e) {
}, false);

// add autorefresh if enabled
if(main.opts["arinterval"] != "off") window.setTimeout(main.refresh, main.refTime);
} else if(document.title=="Problem loading page") main.refresh();

// add another shortcut to the config, this time as a link on the page
var iOp=0, opInt = window.setInterval(function() {
var zg = $("zynga_games"), na = $("navAccount");
var f = $(main.navIDnf) || (zg != null ? zg.getElementsByTagName("div")[0] : null),
	a = (na != null ? na.getElementsByTagName("ul")[0] : null),
	link1 = main.create("li", {id:main.navID+"_"+main.gameAcronym.toLowerCase()+"_1"}, new Array(
main.create("a", {className:"item", href:"javascript:void(0);", onclick:main.config}, new Array(
	main.create("span", {className:"imgWrap"}, new Array(main.create("img", {src:imgs.icon}))),
	main.create("span", {textContent:main.gameAcronym+" "+version+" Options"}))))),
	link2 = main.create("li", {id:main.navID+"_"+main.gameAcronym.toLowerCase()+"_2"}, new Array(
main.create("a", {className:"item", href:"javascript:void(0);", onclick:main.config}, new Array(
	main.create("span", {className:"imgWrap"}, new Array(main.create("img", {src:imgs.icon}))),
	main.create("span", {textContent:main.gameAcronym+" "+version+" Options"})))));
if(f) f.parentNode.appendChild(link1);
if(a) a.appendChild(link2);
if((f && a) || iOp>=10) window.clearInterval(opInt);
iOp++;
}, 500); 

// pre-load images
for(var img in imgs) new Image().src = imgs[img];
}

})(); // anonymous function wrapper end