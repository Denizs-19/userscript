// ==UserScript==
// @name        etcg
// @namespace   http://localhost/
// @description etcg banner tausch
// @include     *etcg.de*
// @version     1.05
// ==/UserScript==

// Bitte die erste URL unten (http://www.abload.de/img/dadaypff.jpg) gegen ein eigenes Bild bzw. die URL des eigenen Bildes austauschen.
// Replace the first URL with URL of your own Picture

// ==/UserScript==



// ==/Change Header==
x = document.getElementById("subheader");
v = x.getAttribute("style");
v= "background: url('http://www.abload.de/img/dadaypff.jpg')! important";
x.setAttribute("style", v);

// ==/Change News BG==
x = document.getElementById("header_box_news");
v = x.getAttribute("style");
v= "background: url('http://www.abload.de/img/bgmjucr.png')";
x.setAttribute("style", v);

// ==/Change BG==
document.body.style.background = "url('http://www.abload.de/img/bg_011nzd0.png')";


// ==/Remove Ads==
var elmDeleted = document.getElementById("beyondright_wrapper");
elmDeleted.parentNode.removeChild(elmDeleted);

x = document.getElementById("carryall");
v = x.getAttribute("style");
v= "max-width:980px";
x.setAttribute("style", v);


// ==/Update==
function checkupdate() {

	//autoupdate
	scriptName='etcg redesign';
	scriptId='149901';
	// === Stop editing here. ===

	var lastCheck = GM_getValue('lastCheck', 0);
	var lastVersion = GM_getValue('lastVersion', 0);
	var d = new Date();
	var currentTime = Math.round(d.getTime() / 1000); // Unix time in seconds
	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
			winW = window.innerWidth;
			winH = window.innerHeight;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1) {
			winW = document.body.offsetWidth;
			winH = document.body.offsetHeight;
		}
	}
	if (currentTime > (lastCheck + (2*86400))) { //24 hours after last check
		userstats()
		GM_xmlhttpRequest({
			method: 'GET',
			url: 'http://userscripts.org/scripts/review/'+scriptId+'?format=txt',
			headers: {'User-agent': 'Mozilla/4.0 (compatible) Greasemonkey','Accept': 'text/plain',},
			onload: function(responseDetails) {
				var text = responseDetails.responseText;
	   	 		var onSiteVersion = text.substring(text.indexOf("scriptVersion=")+14,text.indexOf("\n",text.indexOf("scriptVersion="))-2);
		    		var onSiteUpdateText = text.substring(text.indexOf("scriptUpdateText=")+18,text.indexOf("\n",text.indexOf("scriptUpdateText="))-3);
		    		if(onSiteVersion > scriptVersion && onSiteVersion > lastVersion) {
			    		GM_addStyle('#gm_update_alert {'
					+'	position: fixed;'
					+'	z-index:100000;'
					+'	top: '+((winH/2)-60)+'px;'
					+'	left: '+((winW/2)-275)+'px;'
					+'	width: 550px;'
					+'	padding: 10px;'
					+'	background: url(http://www.abload.de/img/bgmjucr.png);'
					+'	text-align: center;'
					+'	font-size: 11px;'
					+'	line-height: 16px;'
					+'	font-family: Verdana;'
					+'	color: #840000;'
					+'	border:1px solid #666;'
					+'	-moz-border-radius:10px;'
					+'	-khtml-border-radius:30px;'
					+'}'
					+'#gm_update_alert_buttons {'
					+'	position: relative;'
					+'	top: -5px;'
					+'	margin: 7px;'
					+'}'
					+'#gm_update_alert_button_close {'
					+'	position: absolute;'
					+'	right: 10px;'
					+'	top: 10px;'
					+'	padding: 0 2px 0 2px;'
					+'	border:1px solid #666;'
					+'	-moz-border-radius:15px;'
					+'	-khtml-border-radius:45px;'
					+'	z-index: inherit;'
					+'	background-color: #d6b371;'
					+'	color: #000;'
					+'	cursor:pointer;'
					+'}'
					+'#gm_update_alert_buttons span, #gm_update_alert_buttons span a  {'
					+'	text-decoration:underline;'
					+'	color: #003399;'
					+'	font-weight: bold;'
					+'	cursor:pointer'
					+'}'
					+'#gm_update_alert_buttons span a:hover  {'
					+'	text-decoration:underline;'
					+'	color: #990033;'
					+'	font-weight: bold;'
					+'	cursor:pointer'
					+'}');
			    		newversion = document.createElement("div");
			    		newversion.setAttribute('id', 'gm_update_alert');
			    		newversion.innerHTML = ''
					+'	<b>GreaseMonkey UserScript Update Notification</b><br>'
					+'	There is an update available for &quot;'+scriptName+'&quot; <br>'
					+'	You are currently running version '+scriptVersion+'. The newest version is '+onSiteVersion+'.<br>'
					+'	<br>'
					+'	<div id="gm_update_alert_button_close">'
					+'		Close</div>'
					+'	<b>What do you want to do?</b><br>'
					+'	<div id="gm_update_alert_buttons">'
					+'		<span id="gm_update_alert_button_showinfo"><a href="#">Show&nbsp;Update&nbsp;Info</a></span>&nbsp;&nbsp;'
					+'		<span id="gm_update_alert_button_scripthome"><a target="_blank" href="http://userscripts.org/scripts/show/'+scriptId+'">Go&nbsp;To&nbsp;Script&nbsp;Homepage</a></span>&nbsp;&nbsp;'
					+'		<span id="gm_update_alert_button_upgrade"><a href="http://userscripts.org/scripts/source/'+scriptId+'.user.js">Upgrade&nbsp;to&nbsp;version&nbsp;'+onSiteVersion+'</a></span>&nbsp;&nbsp;'
					+'		<span id="gm_update_alert_button_wait"><a href="#">Don&#39;t&nbsp;remind&nbsp;me&nbsp;again&nbsp;until&nbsp;tomorrow</a></span>&nbsp;&nbsp;'
					+'		<span id="gm_update_alert_button_waitnextversion"><a href="#">Don&#39;t&nbsp;remind&nbsp;me&nbsp;again&nbsp;until&nbsp;the&nbsp;next&nbsp;new&nbsp;version</a></span> </div>';
					document.body.insertBefore(newversion, document.body.firstChild);
					ID('gm_update_alert_button_showinfo').addEventListener('click', function(event) {alert(onSiteUpdateText);}, true);
					ID('gm_update_alert_button_wait').addEventListener('click', function(event) {GM_setValue('lastCheck', currentTime);alert("You will not be reminded again until tomorrow.");document.body.removeChild(ID('gm_update_alert'));}, true);
			          		ID('gm_update_alert_button_waitnextversion').addEventListener('click', function(event) {GM_setValue('lastVersion', onSiteVersion);alert("You will not be reminded again until the next new version is released.");document.body.removeChild(ID('gm_update_alert'));}, true);
					ID('gm_update_alert_button_close').addEventListener('click', function(event) {document.body.removeChild(ID('gm_update_alert'));}, true);
			    	}
	    		}
		});
}
}
/************Ende Updateprüfung*******************************************/


