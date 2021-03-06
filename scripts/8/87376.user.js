// ==UserScript==
// @name           DS_Sounds2
// @namespace      none
// @description    v2.00beta english, deutsch, francais, nederlands, arabic, polski. sound for TribalWars, Sound für Die-Staemme, son pour TribalWars, اصدر الصوت عند قدوم هجوم او رساله\, języku polskim dla Plemion.
// @author         Peety (thx Heinzel)  Modified by Hypix for DS 6.3
// @version        1.99.30 
// @include        http://*.*staemme.*/*game.php*
// @include        http://*.*tribal*.*/*game.php*
// @include        http://*/sid_wrong.php*
// @include        http://*.plemiona.pl/*game.php*
// @include        http://*.klanlar.org/*game.php*
// @include        http://*.voyna-plemyon.ru/*game.php*
// ==/UserScript==



	// neue Übersetzung unten eintragen ab Zeile 132 / insert your new translation at line 132
	// den Namen der Sprache hier eingeben / insert name of language here
var language = ["en", "de", "fr", "nl", "ar", "pl", ""];
var lname = ["English", "Deutsch", "Français", "Nederlands", "Arabic", "Polski", ""];
var lang = GM_getValue("ds_lang", "en");
var Text0, Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8, Text9;
var Text10, Text11, Text12, Text13, Text14; 
if (lang  == language[0]) {										// english
	Text0 = lname[0];
	Text1 = " TW_Sounds options ";
	Text2 = " general sound on/off ";
	Text3 = " minutes repeat time ";
	Text4 = " volume: ";
	Text5 = " - attack main accounts sound url: ";
	Text6 = " - attack sitting accounts sound url: ";
	Text7 = " loop attack sounds?";
	Text8 = " - attack end sound url: ";
	Text9 = " - message sound url: ";
	Text10 = " - report sound url: ";
	Text11 = " - forum sound url: ";
	Text12 = " forum url: ";
	Text13 = " - session expired sound url: ";
}
else if (lang == language[1]) {									// german
	Text0 = lname[1];
	Text1 = " DS_Sounds Optionen ";
	Text2 = " Sound an/aus ";
	Text3 = " Minuten Pause vor Soundwiederholung ";
	Text4 = " Lautstärke: ";
	Text5 = " - Angriff Hauptaccounts Sound URL: ";
	Text6 = " - Angriff UV-Accounts Sound URL: ";
	Text7 = " Angriffssounds dauernd wiederholen? (nur in Kaserne/Rekrutieren)";
	Text8 = " - Angriff beendet Sound URL: ";
	Text9 = " - IGM Sound URL: ";
	Text10 = " - Bericht Sound URL: ";
	Text11 = " - Forum Sound URL: ";
	Text12 = " Forum URL: ";
	Text13 = " - Sitzung abgelaufen Sound URL: ";
}
else if (lang == language[2]) {	 								// french
	Text0 = lname[2];
	Text1 = " TW_Sons options ";
	Text2 = " Son marche/arrêt ";
	Text3 = " Minutes pause avant répétition ";
	Text4 = " Volume: ";
	Text5 = " - Attaque (utilisateur) son url: ";
	Text6 = " - Attaque (compte sitté) son url: ";
	Text7 = " Attaque son rabâchage? ";
	Text8 = " - Attaque fini son url: ";
	Text9 = " - Mail son url: ";
	Text10 = " - Rapport son url: ";
	Text11 = " - Forum son url: ";
	Text12 = " Forum url: ";
	Text13 = " - Session périmé son url: ";
}	
else if (lang == language[3]) {									// dutch
	Text0 = lname[3];
	Text1 = " TW_Toon Instellingen";
	Text2 = " Toon aan/uit";
	Text3 = " Pauze tot aanstaande toon";
	Text4 = " Volume: ";
	Text5 = " - Aanvallen tegen jouw account toon URL: ";
	Text6 = " - Aanvallen tegen vakantie accounts toon URL: ";
	Text7 = " Aanvallen toon altijd weer herhalen? ";
	Text8 = " - Aanvallen geëindigdn toon URL: ";
	Text9 = " - Nieuw mededelingen toon URL: ";
	Text10 = " - Nieuw bericht toon URL: ";
	Text11 = " - Nieuw antwoort in de forum toon URL: ";
	Text12 = " Forum URL: ";
	Text13 = " - Sessie afgelopen toon URL: ";
}
else if (lang == language[4]) {									// arabic
	Text0 = lname[4];
	Text1 = " TW_Sounds الخيارات ";
	Text2 = " تشغيل الصوت  تشغيل / تعطيل  ";
	Text3 = " مدة التحديث فيس الدقايق ";
	Text4 = " درجة الصوت: ";
	Text5 = " - ربط المقطع الصوتي عند حدوث هجوم: ";
	Text6 = " - ربط المقطع الصوتي عند حدوث هجوم: ";
	Text7 = " اعد تشغبل الصوت عند حدوث هجوم على شكل دوره?";
	Text8 = " - اصدر صوت عند انتهاء الهجوم: ";
	Text9 = " - اصدر صوت عند قوم رساله: ";
	Text10 = " - ربط مقع الصوت  ل رساله: ";
	Text11 = " -  صوت لي المنتدى: ";
	Text12 = " ربط المنتدى: ";
	Text13 = " - ربط المقطع كلمة المرور: ";
}
else if (lang == language[5]) {									// polish
	Text0 = lname[5];
	Text1 = " DS_Sounds - Opcje dźwięku "; 
	Text2 = " Dźwięk włączony / wyłączony ";
	Text3 = " Potwórz co (w minutach) ";
	Text4 = " Głośność: ";
	Text5 = " - Adres dźwięku attack main accounts: ";		// - attack main accounts sound url:
	Text6 = " - Adres dźwięku attack sitting accounts: ";		// - attack sitting accounts sound url:
	Text7 = " loop attack dźwięku? "; 				 		// loop attack sound?
	Text8 = " - Adres dźwięku  attack end: ";				// - attack end sound url:
	Text9 = " - Adres dźwięku wiadomości: ";
	Text10 = " - Adres dźwięku raportu: ";
	Text11 = " - Adres dźwięku forum: ";
	Text12 = " Adres forum: ";
	Text13 = " - Adres dźwięku hasło: ";					// Session expired sound url:
}
else if (lang == language[6]) {									// new language
	Text0 = lname[6];
/*   for other languages translate only Text1 to Text13 and send it to win4@gmx.net please
	für eine weitere Sprache hier nur Text1 bis Text13 ersetzen und das Script bitte an win4@gmx.net senden
*/
// +++ insert your new translation here +++ Hier eine neue Übersetzung einfügen +++

	Text1 = "  "; 					// Sound Options (title)
	Text2 = "  ";					// sound on/off
	Text3 = "  "; 					// repeat time
	Text4 = " : ";					// volume:
	Text5 = " - : ";				// - attack mainaccounts sound url:
	Text6 = " - : ";				// - attack HR accounts sound url:
	Text7 = " ? ";					// loop attack sound?
	Text8 = " - : ";				// - attack end sound url:
	Text9 = " - : ";				// - message sound url:
	Text10 = " - : ";				// - report sound url:
	Text11 = " - : ";				// - forum sound url:
	Text12 = " : ";				// forum url:
	Text13 = "  ";					// Session expired sound url:
}

	
	





// ------------------------------------------------------------------------
// +++ Bitte ab hier nichts aendern +++ No changes beyond this point +++
//-------------------------------------------------------------------------

if (window.frames[1]) {
	var Loc = window.frames[1].location;
	var Doc = window.frames[1].document;
	if (Doc.location.href.search(/game\.php/) <= 0)
	{
		Loc = window.frames[0].location;
		Doc = window.frames[0].document;
	}
}
else {
	var Loc = window.location;
	var Doc = window.document;
}
if (Doc.body) {
	var Body = Doc.body.innerHTML;
}
else {
	return;
}

var welt = Doc.location.host.split('.')[0];					// Welt ermitteln
var uv = (Loc.href.match(/[&,?]t=(\d+)/)) ? RegExp.$1 : "";		// testen ob UV
var cn = "ds_sound_" + welt + "_" + uv + "0"; 				// Accountnamen
var cwert;
var awert;
	// graphic bell
var picsndon = 'data:image/png;base64,' +
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A' +
	'/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAq5JREFUOMuFlL2LXGUUxn/vx/2cndyZnUmc' +
	'3dm4JhiJH1gYAoIWil0QrEQMNitEFwuxUBIbBasE/wK1UFnEFDYJKSzEQrSQoIhIdCUfEiSbdXZ2' +
	'yO7O3Hvfe9/3tRBCINnxdM95zvlxeIoD/1Pe+6m+nGZ++fGZv89+8uFn3rtdZ8S9mt9+fSG4+MN3' +
	'Rw88sO9751x1YzA+cnzptT96c/16KuDkqXei9etX36eqXm+m6ezhhw9wc22DtbU1dJjc8N6f+uiL' +
	'r1bu3NF3iu2N9QdjKd7VacL9+/ezuHCQXrdPEsasD4bzk3x8DFjZNYNbw8GVJI4ItKLbnUUrTZqm' +
	'xHFCoCTpTLM7NcROd6+vrSWKIrx3zPf7hGGIUoqiLFFKzU0FFKbq3RwM2djcJJ9ss7fTIAr9f7oo' +
	'yCc72ekP3tsdoJROhBAIIdESwmKILLfRWiGlROugf/2va4tTANEx4QWBVigvoHAoIVFCY5FIgaiq' +
	'4ol7AlY+/1Qg/KtCCJRUhKHGhZDEAWmSEIQRwoK39fLLLz5/N2D10q/PCuyjQoAQkryoMSolbXTQ' +
	'QYAUgp0yBx0+18k6j92+GuCt5aXMVua8Vqoz02jQ2pPRmMlQUZPR2JBPcqSSREmKQsginzzz9JNH' +
	'v/nxp1+GwnvPG0vHV733DxljyJpN2nsyOu1ZsnYLW1u2t7YYbd1iOBphjME5R2Gqjd5c/6Cu61rV' +
	'3i/WxqCFxAFOSoyzFHmBcxbjHQ6IkhiHJ01iiqLcuXrlcqmVxEr4szBlO4nifiCVaMQx8737WFiY' +
	'RynF6uVrjMdj6qrCWrtpTPV7UZZPnT13wWipAoDHl0+8IkKlDyVRXCZx+lLazF6YlFXQzhplq9W6' +
	'9M9g8JsbjS4eOvzIz2++fdIASKnA2UpM+wnOVjhb7er/C3AAFHJlPpo3AAAAAElFTkSuQmCC';

var picsndoff = 'data:image/png;base64,' +
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A' +
	'/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAylJREFUOMt91F9oW1UcwPHvubm3TW7+3GRp' +
	'XbO0ab1tsy5mdplkaNGBij7ofFNQUFAmspdpn2QIE5WB2x5U8EWGMMbAP+CDg734UFBEwSnE6VZX' +
	'SW7TNG10XZomXdIkN/deH5Zgx5zn6ZzD7/c5v3N+cARARteTwA7ABn5MGYZNdziOgxCitySj62NA' +
	'DGimDOOS1N0fB74Fvgde6gV/+tE7J898cGKP49i9ZD8wB3wHzAD0gAvA+e789C8HD0ZOHX9zJuD3' +
	'Hb6xtvrqh++/m/yrtCIDpwG9i3wMILaVFgJ+B6JXQwHzp+SUMj4xQvnGBqVSiclG++8n57ODQA2Y' +
	'ThlGYXsFpAyjsuZxH3OARKWmpDxeJu6Ns2/vNJORKA9ll3Z241/vJd8GAJyLj5aykUEEMPVzBtkB' +
	'VVXZ+0cWf9tk3av+uu2qdwLhgUHlkh6j4XHjqWwwfHWBYHGVSG6RRp/CXCqppAyDuwLNtulbqmzw' +
	'za5BAMyvL+L+/CtwYG4kQsU2tZPvvX13wOWSh4QQlAZCLI0NQ7sN1Rq54QjLIQ1ZVqKF/OLo/wD9' +
	'MeEIFFn+tz2A2mpjISEJhGk29/8ncP7cWYFwnhJCEFuvEssXkQdCuDQ/kbUyyXIFYYFjdY688Nyh' +
	'O4GF+d8eFVj3qZ0OD2cLIASho4fxvfgsADOFIlKtCnLf42EtnLwNmD3yira1WfvErcg8s17Fa5qU' +
	'E1PkAgMsjo5Tj43Qb9k8sXIdzaO6zObWl2+89nIcQHIcB8e2T9Xr9cl7/swxtlZmy6uSe2Afyyur' +
	'FFdLXEvvx3K5GCpX0I0lhBCJarX2w7HZo36p0+m4Gqb5vLy5ySP5Io4QXE6naLgkmltNWq0mtYCP' +
	'XGI3AAfyy4x63OwIaVUjl21JLglLsp3ZxxaMdr9lYYxEuTkcZdfQTvYk4tw/nSQcDpONj7Ph8yJb' +
	'FjOZK5tT0eihLy5cbMuSSyGj60GgDzAWJ/S3PG71QdWvHWi0TCWkeVvBYHD+us93ZV3z14M362cC' +
	'5Yo/ffazp6XjJ64J2zLF5cndacANFFKGkd/eZ9syb732rYMA0oCn96H8A/0ENrlijrmBAAAAAElF' +
	'TkSuQmCC';

	//graphic test sound
var stest = 'data:image/png;base64,' +
	'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA' +
	'IGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANuSURBVHjaXNO9bxtl' +
	'AMfx3z3P2Wf77MTUzvklidOXNAMgRUqcCqQGMbEwgIqqspS5XVgQ4l9gQJUYKgESExKIDgy8DEBU' +
	'oENTSOIEpbYDJE5qR+f4bN+de8nd47t77mEoE9/t+wd8pM8+/QQAEAYh/DB4aczYbd/3rzDG0pZp' +
	'Gn/vNdca9cd3K3Pn28+/8CLCMIQQAmEYgHMOGQAkSYIA3g2D4KNCoRDLZDIYj8c46XZnCsXi0kxl' +
	'7p3Dg/33hRBPADgR53UhRAAAMqUUYcivy5R8vLq6CsYYnKcO8vkpLC4uolFvgHNeVBTli5gsY2Jy' +
	'MgJQOzps3eKcb8myLGeDILizvLSM2nYNRq+HicksEgkFqVQK1eoKEkkFD357AMs0cWl+nnDOq6qq' +
	'frO1ufEyYYy9deH8hZnd3V0YhoGZ2VmUyyWUyiWcy+Ww8cfvmL+8gIsXLyESApZlIa4oKBaLlVwu' +
	'f5tQQl6HBHSOOygWS8hMZJBOp5HNPgdZlqHrXTx6uI6VKytQVRW9kxPk83mEnKM8XX6NJJPJBdse' +
	'IRaLI5lKQokrSKkqkskUurqO6koVrueCUgpN0+A4DszhEJ12G5Zll2RCaYaxMSRCceYyREKCRGXE' +
	'4wp2ajV0dR17zSYWLi9A0zTsbNewubkBSihc1x2RwPd9QinGAcfY9xGPx5BOq8jlctA0DV9/9SX+' +
	'3N7CaGRDSSTAeQTbsjAa2TB6J2uy4zi6VijOJ2IUU+eySCoKLMtGRk3j+o0bgCThr2YDE5OT0HUd' +
	'nIfwXBeMeX3P9e7IpmU9LE9Pv0IpgWU/xcAaQZvKw/fHcBwJb167BqN3Fel0GsedDjzXg9E7MSMh' +
	'3qaEdIjv+/e6uh6VymV0e32ISECJybBtG8PhEO0nbXiei8Ggj+PjYwz6xg5j7FVCyH1JkkA459sH' +
	'rdY9SQhMl4oYe2cwLQu2baPfN2CaQ2haAb/+ch+Dfj80zeHNKIp2wyBAEAQgnuuCc/7eo/X1QyVG' +
	'UKnMIgo5GGNIqSrm5ubww/ffoVFvoNM5+lAI8TgIApydnsJxHNDq8hKiKHI45z/v7/+z6p6dFVRV' +
	'hUwp+oaBtZ9+RKNeR/vo8O7IHn1AKRV4JhCSJD3T+N83JIlcbR20bu01m2+EYVjxXM8/PXXqg77x' +
	'OWPet5RS/L9/BwDYGsraJJa3swAAAABJRU5ErkJggg==';




	// change language
function check_lang(wert) {
	switch (wert)
	{
	case "en":
		lang = "en";
		break;
	case "de":
		lang = "de";
		break;
	case "fr":
		lang = "fr";
		break;
	case "nl":
		lang = "nl";
		break;
	case "ar":
		lang = "ar";
		break;
	case "pl":
		lang = "pl";
		break;
	case language[6]:
		if (language[6] !== "") {
			lang = language[6];
		} 
		else {
			lang = "en";
		}
		break;
	default:
		lang = "en";
		break;
	}
	GM_setValue("ds_lang", lang);
	return lang;
}
	

function test_slash(url) {
	if  (url) {
		if (url.substr(1, url.length) != "/") {
			url = url + "/";
		}
	}
	return url;
}


function http(name, url) {
	var test;
	try {
		test = url.match(/http\:\/\//)[0];
	} 
	catch (e) {
		test = '';
	}

	if (test) {
		if (name == "dsphpbb_adr" + welt + uv) {
			url = test_slash(url);
		}
		return url;
	}
	else {
		if (url && url.length > 14) {
			if (name == "dsphpbb_adr" + welt + uv) {
				url = test_slash(url);
			}
			url = "http://" + url;
			return url;
		}
	}
	return false;
}


function GM_test(name, url) {
	var test;
	var GM = GM_getValue(name);
	if (url == "0") {
		if (GM != "") {
			GM = http(name, GM);
			if (GM) {
				return GM;
			}
		}
		url = "";
	}
	else	{
		if (url !== "") {
			test = http(name, url);
			if (test) {
				GM_setValue(name, test);
				return test;
			}
		}
		url = "";
	}

	if (url == "") {
		switch (name) {
		case "dsphpbb_adr" + welt + uv:
			url = "";
			break;
		case "sound1":
			url = "http://www.policeinterceptor.com/sounds/newgq.wav";
			break;
		case "sound2":
			url = "http://www.mediacollege.com/downloads/sound-effects/vehicle/siren/firetrucks-01.wav";
			break;
		case "sound3":
			url = "http://www.mediacollege.com/downloads/sound-effects/star-trek/tos/tos-intercom.wav";
			break;
		case "sound4":
			url = "http://www.mediacollege.com/downloads/sound-effects/star-trek/voy/voy-comp-01.wav";
			break;
		case "sound_nf":
			url = "http://www.mediacollege.com/downloads/sound-effects/city/factorywhistle-01.wav";
			break;
		case "sound_nr":
			url = "http://www.mediacollege.com/downloads/sound-effects/audience/kids-cheer-01.wav";
			break;
		case "sound_nm":
			url = "http://www.wav-sounds.com/mail/mail2.wav";
			break;
		default:
			return "";
		}
		GM_setValue(name, url);
		return url;
	}
	else {
		test = http(name, url);
		if (test) {
			GM_setValue(name, test);
			return test;
		}
	}
}


function wait(time) {
	var jetzt = new Date();
	var start_time = parseInt(jetzt.getTime(), 10);
	var end_time = start_time;
	do {
		jetzt = new Date();
		end_time = parseInt(jetzt.getTime(), 10);
	} while ((end_time - start_time) < time);
}

	// spielt Sound
function play_sound(soundfile, volume) {
	if (soundfile == "") {
		return;
	}
	volume = (parseInt(volume, 10)) / 100;
	var arr = soundfile.split('.');
	var typ = arr[arr.length - 1];
	if (sound_on) {
		var buffer = Doc.createElement("audio");
		buffer.src = soundfile;
		buffer.volume = volume;
		buffer.id = 'Sound';
		buffer.autoplay = true;
//		buffer.loop = loop;					// erst ab Firefox 3.6 unterstützt
		if (typ == 'wav') {
			buffer.type = 'audio/wave';		// Currently, only codec "1" (PCM) is supported.
		}
		else if (typ == 'ogg') {
			buffer.type = 'audio/ogg';		// audio-only Ogg files
		}
		else {
			alert("dieser Audiotyp wird momentan noch nicht unterstützt!\nthis audiotype is currently not supported!");
		}
/*			// noch nicht unterstützt
			else if (typ == 'midi') buffer.setAttribute("type", 'audio/mid');
			else if (typ == 'mp3') buffer.setAttribute("type", 'audio/mpeg');
			else if (typ == 'wma') buffer.setAttribute("type", 'audio/x-ms-wma');
*/
		document.body.appendChild(buffer);
	}
}


function refresh_p() {
	if (sound4_on) {
		loop = GM_getValue("loop", true);
		play_sound(sound4, sound4_vol);
	}
	loop = false;
}

	// holt Zeitstempel
function zeit_holen() {
	var jetzt = new Date();
	return parseInt(jetzt.getTime() / 1000, 10);
}


function attacksound() {
	loop = GM_getValue("loop", true);
	if (uv) {
		if (sound2_on) {
			play_sound(sound2, sound2_vol);
		}
	}
	else {
		if (sound1_on) {
			play_sound(sound1, sound1_vol);
		}
	}
	loop = false;
}

	// testet auf Angriffe und merkt sich, welche bekannt sind
function check_angriff() {
	cwert = parseInt(GM_getValue(cn, 0), 10);
	try {								// auf Angriffssymbol pruefen
		awert = parseInt(Body.match(/graphic\/unit\/att\.png[^>]+>[^\(]+\((\d+)\)/)[1], 10);
    //awert = parseInt(Body.match(/incomings">[^>]+> \((\d+)\)/)[1], 10);
	} 
	catch (e) {
		awert = 0;
	}
	if (awert > 0) {
		var jetzt = zeit_holen();
		var barracks; 
		var train;
		try {							// auf Kaserne pruefen
			barracks = Boolean(Doc.location.href.match(/screen=barracks/)[0]);
		} 
		catch (ee) {
			barracks = false;
		}

		try {							// Rekrutierenansicht pruefen
			train = Boolean(Doc.location.href.match(/screen=train/)[0]);
		} 
		catch (eee) {
			train = false;
		}

		if (cwert !== awert) {
			var a1wert = awert;
			var c1wert = cwert;
			if (awert == '') {
				a1wert = 0;
			}
			if (cwert == '') {
				c1wert = 0;
			}
			if (parseInt(a1wert, 10) > parseInt(c1wert, 10)) {
				attacksound();
				GM_setValue("adelay_" + welt + uv, jetzt);
				GM_setValue("known_" + welt + uv, 0);
			}
			else {
				if (sound3_on) {
					play_sound(sound3, sound3_vol);
				}
			}
			GM_setValue(cn, awert);
		}
		else if (train || barracks) {
			if (GM_getValue("known_" + welt + uv, 0) == 0) {
				var adelay = GM_getValue("adelay_" + welt + uv, 220255);
				if ((jetzt - adelay) > (60 * zeit)) {
					attacksound();
					GM_setValue("adelay_" + welt + uv, jetzt);
				}
			}
		}
		else {
			GM_setValue("known_" + welt + uv, 1);
		}
	}
	else if (cwert) {
		GM_deleteValue(cn);
		if (sound3_on) {
			play_sound(sound3, sound3_vol);
		}
		GM_setValue("known_" + welt + uv, 1);
	}
}

	// neuer Eintrag im DSphpBB-Forum?
function extforum(name, zeit, jetzt, soundfile, volume) {
	var a = Doc.getElementsByTagName("a");
	for (var i = 0; i < a.length - 1; i++) {
		if (a[i].href == forum) {
			var img = a[i].firstChild;
			var pic2f = img.src;
			GM_xmlhttpRequest({
				method: 'GET',
				url: pic2f,
				onload: function (responseDetails) {
					if (responseDetails.status == 200) {
						var pic2 = responseDetails.responseText;
						var len2 = pic2.length;

						GM_xmlhttpRequest({
							method: 'GET',
							url: pic1f,
							onload: function (responseDetails) {
								if (responseDetails.status == 200) {
									var pic1 = responseDetails.responseText;
									var len1 = pic1.length;
									if (len1 == len2) {
										GM_setValue("alarm_" + name, jetzt);
										GM_setValue("delay", jetzt);
										play_sound(soundfile, volume);
									}
								}
							}
						});
					}
				}
			});
		}
	}
}

	// gibt's was neues ?
function check_new(name, soundfile, volume) {
	if (soundfile == "") {
		return;
	}
	var wert;
	var zeit1 = GM_getValue("alarm_" + name, 220255);
	var delay = GM_getValue("delay", 220255);
	var jetzt = zeit_holen();

	if ((jetzt - zeit1) > (60 * zeit)) {
		if ((name == "igm") && sound_nm_on) {
			try {
				wert = Body.match(/header new_mail"/)[0];
			} 
			catch (e) {
				wert = '';
			}
		}
		else if ((name == "report") && sound_nr_on) {
			try {
				wert = Body.match(/header new_report/)[0];
			} 
			catch (eee) {
				wert = '';
			}
		}
		else if ((name == "forum") && sound_nf_on && (dsphpbb == false)) {
			try {
				wert = Body.match(/header new_post/)[0];
			} catch (eeee) {
				wert = '';
			}
		}
		else if ((name == "forum") && sound_nf_on && (dsphpbb == true)) {
			extforum(name, zeit, jetzt, soundfile, volume);
			wert = '';
		}

		if (wert) {
			delay = GM_getValue("delay", 220255);
			if ((jetzt - delay) <= 3) {	// falls innerhalb von 3 Sek ein anderer Sound gespielt wurde
				// kurze Pause einlegen, Funktion fehlt noch
			}
			GM_setValue("alarm_" + name, jetzt);
			GM_setValue("delay", jetzt);
			play_sound(soundfile, volume);
		}
	}
}

	// testet auf andere Ereignisse
function check_other() {
	check_new("igm", sound_nm, sound_nm_vol);		// IGM?
	check_new("report", sound_nr, sound_nr_vol);		// Bericht?
	check_new("forum", sound_nf, sound_nf_vol);		// Forum?
}


function check_vol(name, wert) {
	wert = parseInt(wert, 10);
	if (isNaN(wert)) {
		wert = 70;
	}
	else if (wert <= 0) {
		wert = 100;
	}
	else if (wert <= 10) {
		wert = 10;
	}
	else if (wert >= 100) {
		wert = 100;
	}
	GM_setValue(name, wert);
	return wert;
}

	// zeigt Optionen
function optionen() {
	var pos = Doc.getElementById("Glocke");
	var Optionen = Doc.createElement("table");
	Optionen.setAttribute("id", "options");
	Optionen.setAttribute("class", "main");
	Optionen.setAttribute("style", "padding: 5px;");
	var tbody = Doc.createElement('tbody');
	var tr = Doc.createElement('tr');
	var td = Doc.createElement('td');

	var th = Doc.createElement('th');
	th.setAttribute("style", "text-align: center");
	th.appendChild(Doc.createTextNode(Text1)); 		// Title: Sound Options
	var table = Doc.createElement("table");
	table.setAttribute("class", "vis");
	table.appendChild(th);
// Sound on
	var row0 = Doc.createElement("tr");
	var td0 = Doc.createElement("td");
	var check0 = Doc.createElement("input");
	check0.setAttribute("type", "checkbox");
	check0.setAttribute("name", "sound_on");
	check0.checked = sound_on;
	check0.addEventListener("change", function () {
		GM_setValue("sound_on", this.checked);
		sound_on = GM_getValue("sound_on");
	}, false);
	td0.appendChild(check0);
	var img0 = Doc.createElement("img");
	img0.setAttribute("width", "17");
	img0.setAttribute("style", "vertical-align: bottom");
	img0.src = picsndon;
	td0.appendChild(img0);
	td0.appendChild(Doc.createTextNode(Text2));		// Sound an/aus
	row0.appendChild(td0);
	table.appendChild(row0);
// repeat time
	var rowx = Doc.createElement("tr");
	var tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row1 = Doc.createElement("tr");
	var td1 = Doc.createElement("td");
	var check1 = Doc.createElement("input");
	check1.setAttribute("type", "text");
	check1.setAttribute("style", "text-align: center");
	check1.setAttribute("name", "zeitspanne");
	check1.value = zeit;
	check1.setAttribute("size", "2");
	check1.setAttribute("maxlength", "2");
	check1.setAttribute("method", "post");
	check1.setAttribute("enctype", "multipart/form-data");
	check1.addEventListener("change", function () {
		if (this.value < 1) {
			this.value = 10;
		} 
		GM_setValue("zeit", parseInt(this.value, 10));
		zeit = GM_getValue("zeit");
	}, false);
	td1.appendChild(check1);
	td1.appendChild(Doc.createTextNode(Text3));		// repeat time
	row1.appendChild(td1);
	table.appendChild(row1);
// inc main account
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row5 = Doc.createElement("tr");
	var td5 = Doc.createElement("td");
	var check5 = Doc.createElement("input");
	check5.setAttribute("type", "checkbox");
	check5.setAttribute("name", "sound1_on");
	check5.checked = sound1_on;
	check5.addEventListener("change", function () {
		GM_setValue("sound1_on", this.checked);
		sound1_on = GM_getValue("sound1_on");
	}, false);
	td5.appendChild(check5);
	var img5 = Doc.createElement("img");
	img5.setAttribute("width", "17");
	img5.src = "./graphic/unit/att.png";
	td5.appendChild(img5);
	var check51 = Doc.createElement("input");
	check51.setAttribute("type", "text");
	check51.setAttribute("style", "text-align: center");
	check51.setAttribute("name", "sound1_vol");
	check51.value = sound1_vol;
	check51.setAttribute("size", "2");
	check51.setAttribute("maxlength", "3");
	check51.setAttribute("method", "post");
	check51.setAttribute("enctype", "multipart/form-data");
	check51.addEventListener("change", function () {
		sound1_vol = check_vol("sound1_vol", this.value);
	}, false);
	td5.appendChild(Doc.createTextNode(Text4)); 		// volume
	td5.appendChild(check51);
	td5.appendChild(Doc.createTextNode("% "));
	var test5 = Doc.createElement("input");
	test5.setAttribute("type", "image");
	test5.setAttribute("style", "vertical-align: middle");
	test5.setAttribute("src", stest);
	test5.setAttribute("title", "test");
	test5.addEventListener("click", function () {
		play_sound(sound1, sound1_vol);
	}, true);
	td5.appendChild(test5);
	td5.appendChild(Doc.createTextNode(Text5));		// attack main account sound url
	row5.appendChild(td5);
	table.appendChild(row5);
	var row50 = Doc.createElement("tr");
	var td50 = Doc.createElement("td");
	var check50 = Doc.createElement("input");
	check50.setAttribute("type", "text");
	check50.setAttribute("style", "text-align: left");
	check50.setAttribute("name", "sound1");
	check50.value = sound1;
	check50.setAttribute("size", "92");
	check50.setAttribute("maxlength", "200");
	check50.setAttribute("method", "post");
	check50.setAttribute("enctype", "multipart/form-data");
	check50.addEventListener("change", function () {
		sound1 = GM_test("sound1", this.value);
	}, false);
	td50.appendChild(check50);
	row50.appendChild(td50);
	table.appendChild(row50);
// inc sitting account
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row6 = Doc.createElement("tr");
	var td6 = Doc.createElement("td");
	var check6 = Doc.createElement("input");
	check6.setAttribute("type", "checkbox");
	check6.setAttribute("name", "sound2_on");
	check6.checked = sound2_on;
	check6.addEventListener("change", function () {
		GM_setValue("sound2_on", this.checked);
		sound2_on = GM_getValue("sound2_on");
	}, false);
	td6.appendChild(check6);
	var img6 = Doc.createElement("img");
	img6.setAttribute("width", "17");
	img6.src = "./graphic/unit/att.png";
	td6.appendChild(img6);
	var check61 = Doc.createElement("input");
	check61.setAttribute("type", "text");
	check61.setAttribute("style", "text-align: center");
	check61.setAttribute("name", "sound2_vol");
	check61.value = sound2_vol;
	check61.setAttribute("size", "2");
	check61.setAttribute("maxlength", "3");
	check61.setAttribute("method", "post");
	check61.setAttribute("enctype", "multipart/form-data");
	check61.addEventListener("change", function () {
		sound2_vol = check_vol("sound2_vol", this.value);
	}, false);
	td6.appendChild(Doc.createTextNode(Text4)); 		// volume
	td6.appendChild(check61);
	td6.appendChild(Doc.createTextNode("% "));
	var test6 = Doc.createElement("input");
	test6.setAttribute("type", "image");
	test6.setAttribute("style", "vertical-align: middle");
	test6.setAttribute("src", stest);
	test6.setAttribute("title", "test");
	test6.addEventListener("click", function () {
		play_sound(sound2, sound2_vol);
	}, true);
	td6.appendChild(test6);
	td6.appendChild(Doc.createTextNode(Text6));  	//attack sitting account sound url
	row6.appendChild(td6);
	table.appendChild(row6);
	row6.appendChild(td6);
	table.appendChild(row6);
	var row60 = Doc.createElement("tr");
	var td60 = Doc.createElement("td");
	var check60 = Doc.createElement("input");
	check60.setAttribute("type", "text");
	check60.setAttribute("style", "text-align: left");
	check60.setAttribute("name", "sound2");
	check60.value = sound2;
	check60.setAttribute("size", "92");
	check60.setAttribute("maxlength", "200");
	check60.setAttribute("method", "post");
	check60.setAttribute("enctype", "multipart/form-data");
	check60.addEventListener("change", function () {
		sound2 = GM_test("sound2", this.value);
	}, false);
	td60.appendChild(check60);
	row60.appendChild(td60);
	table.appendChild(row60);
// loop incs sound
	var row8 = Doc.createElement("tr");
	var td8 = Doc.createElement("td");
	var check8 = Doc.createElement("input");
	check8.setAttribute("type", "checkbox");
	check8.setAttribute("name", "loop");
	check8.checked = GM_getValue("loop");
	check8.addEventListener("change", function () {
		GM_setValue("loop", this.checked); 
		loop = GM_getValue("loop");
	}, false);
	td8.appendChild(check8);
	var img8 = Doc.createElement("img");
	img8.src = "./graphic/unit/att.png";
	td8.appendChild(img8);
	td8.appendChild(Doc.createTextNode(Text7));	// loop attack sound?
	row8.appendChild(td8);
	table.appendChild(row8);
// inc arrived
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row7 = Doc.createElement("tr");
	var td7 = Doc.createElement("td");
	var check7 = Doc.createElement("input");
	check7.setAttribute("type", "checkbox");
	check7.setAttribute("name", "sound3_on");
	check7.checked = sound3_on;
	check7.addEventListener("change", function () {
		GM_setValue("sound3_on", this.checked);
		sound3_on = GM_getValue("sound3_on");
	}, false);
	td7.appendChild(check7);
	var img7 = Doc.createElement("img");
	img7.setAttribute("width", "17");
	img7.src = "./graphic/command/cancel.png";
	td7.appendChild(img7);
	var check71 = Doc.createElement("input");
	check71.setAttribute("type", "text");
	check71.setAttribute("style", "text-align: center");
	check71.setAttribute("name", "sound3_vol");
	check71.value = sound3_vol;
	check71.setAttribute("size", "2");
	check71.setAttribute("maxlength", "3");
	check71.setAttribute("method", "post");
	check71.setAttribute("enctype", "multipart/form-data");
	check71.addEventListener("change", function () {
		sound3_vol = check_vol("sound3_vol", this.value);
	}, false);
	td7.appendChild(Doc.createTextNode(Text4)); 		// volume
	td7.appendChild(check71);
	td7.appendChild(Doc.createTextNode("% "));
	var test7 = Doc.createElement("input");
	test7.setAttribute("type", "image");
	test7.setAttribute("style", "vertical-align: middle");
	test7.setAttribute("src", stest);
	test7.setAttribute("title", "test");
	test7.addEventListener("click", function () {
		play_sound(sound3, sound3_vol);
	}, true);
	td7.appendChild(test7);
	td7.appendChild(Doc.createTextNode(Text8));		// attack end sound url
	row7.appendChild(td7);
	table.appendChild(row7);
	var row70 = Doc.createElement("tr");
	var td70 = Doc.createElement("td");
	var check70 = Doc.createElement("input");
	check70.setAttribute("type", "text");
	check70.setAttribute("style", "text-align: left");
	check70.setAttribute("name", "sound3");
	check70.value = sound3;
	check70.setAttribute("size", "92");
	check70.setAttribute("maxlength", "200");
	check70.setAttribute("method", "post");
	check70.setAttribute("enctype", "multipart/form-data");
	check70.addEventListener("change", function () {
		sound3 = GM_test("sound3", this.value);
	}, false);
	td70.appendChild(check70);
	row70.appendChild(td70);
	table.appendChild(row70);
// igm
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row4 = Doc.createElement("tr");
	var td4 = Doc.createElement("td");
	var check4 = Doc.createElement("input");
	check4.setAttribute("type", "checkbox");
	check4.setAttribute("name", "sound_nm_on");
	check4.checked = sound_nm_on;
	check4.addEventListener("change", function () {
		GM_setValue("sound_nm_on", this.checked);
		sound_nm_on = GM_getValue("sound_nm_on");
	}, false);
	td4.appendChild(check4);
	var img4 = Doc.createElement("img");
	img4.setAttribute("width", "17");
	img4.src = "./graphic/new_mail.png";
	td4.appendChild(img4);
	var check41 = Doc.createElement("input");
	check41.setAttribute("type", "text");
	check41.setAttribute("style", "text-align: center");
	check41.setAttribute("name", "sound_nm_vol");
	check41.value = sound_nm_vol;
	check41.setAttribute("size", "2");
	check41.setAttribute("maxlength", "3");
	check41.setAttribute("method", "post");
	check41.setAttribute("enctype", "multipart/form-data");
	check41.addEventListener("change", function () {
		sound_nm_vol = check_vol("sound_nm_vol", this.value);
	}, false);
	td4.appendChild(Doc.createTextNode(Text4)); 		//volume
	td4.appendChild(check41);
	td4.appendChild(Doc.createTextNode("% "));
	var test4 = Doc.createElement("input");
	test4.setAttribute("type", "image");
	test4.setAttribute("style", "vertical-align: middle");
	test4.setAttribute("src", stest);
	test4.setAttribute("title", "test");
	test4.addEventListener("click", function () {
		play_sound(sound_nm, sound_nm_vol);
	}, true);
	td4.appendChild(test4);
	td4.appendChild(Doc.createTextNode(Text9));		// message sound url
	row4.appendChild(td4);
	table.appendChild(row4);
	var row40 = Doc.createElement("tr");
	var td40 = Doc.createElement("td");
	var check40 = Doc.createElement("input");
	check40.setAttribute("type", "text");
	check40.setAttribute("style", "text-align: left");
	check40.setAttribute("name", "sound_nm");
	check40.value = sound_nm;
	check40.setAttribute("size", "92");
	check40.setAttribute("maxlength", "200");
	check40.setAttribute("method", "post");
	check40.setAttribute("enctype", "multipart/form-data");
	check40.addEventListener("change", function () {
		sound_nm = GM_test("sound_nm", this.value);
	}, false);
	td40.appendChild(check40);
	row40.appendChild(td40);
	table.appendChild(row40);
// report
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row3 = Doc.createElement("tr");
	var td3 = Doc.createElement("td");
	var check3 = Doc.createElement("input");
	check3.setAttribute("type", "checkbox");
	check3.setAttribute("name", "sound_nr_on");
	check3.checked = sound_nr_on;
	check3.addEventListener("change", function () {
		GM_setValue("sound_nr_on", this.checked);
		sound_nr_on = GM_getValue("sound_nr_on");
	}, false);
	td3.appendChild(check3);
	var img3 = Doc.createElement("img");
	img3.setAttribute("width", "17");
	img3.src = "./graphic/new_report.png";
	td3.appendChild(img3);
	var check31 = Doc.createElement("input");
	check31.setAttribute("type", "text");
	check31.setAttribute("style", "text-align: center");
	check31.setAttribute("name", "sound_nr_vol");
	check31.value = sound_nr_vol;
	check31.setAttribute("size", "2");
	check31.setAttribute("maxlength", "3");
	check31.setAttribute("method", "post");
	check31.setAttribute("enctype", "multipart/form-data");
	check31.addEventListener("change", function () {
		sound_nr_vol = check_vol("sound_nr_vol", this.value);
	}, false);
	td3.appendChild(Doc.createTextNode(Text4)); 		// volume
	td3.appendChild(check31);
	td3.appendChild(Doc.createTextNode("% "));
	var test3 = Doc.createElement("input");
	test3.setAttribute("type", "image");
	test3.setAttribute("style", "vertical-align: middle");
	test3.setAttribute("src", stest);
	test3.setAttribute("title", "test");
	test3.addEventListener("click", function () {
		play_sound(sound_nr, sound_nr_vol);
	}, true);
	td3.appendChild(test3);
	td3.appendChild(Doc.createTextNode(Text10));		// report sound url
	row3.appendChild(td3);
	table.appendChild(row3);
	var row30 = Doc.createElement("tr");
	var td30 = Doc.createElement("td");
	var check30 = Doc.createElement("input");
	check30.setAttribute("type", "text");
	check30.setAttribute("style", "text-align: left");
	check30.setAttribute("name", "sound_nr");
	check30.value = sound_nr;
	check30.setAttribute("size", "92");
	check30.setAttribute("maxlength", "200");
	check30.setAttribute("method", "post");
	check30.setAttribute("enctype", "multipart/form-data");
	check30.addEventListener("change", function () {
		sound_nr = GM_test("sound_nr", this.value);
	}, false);
	td30.appendChild(check30);
	row30.appendChild(td30);
	table.appendChild(row30);
// forum
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row2 = Doc.createElement("tr");
	var td2 = Doc.createElement("td");
	var check2 = Doc.createElement("input");
	check2.setAttribute("type", "checkbox");
	check2.setAttribute("name", "sound_nf_on");
	check2.checked = sound_nf_on;
	check2.addEventListener("change", function () {
		GM_setValue("sound_nf_on", this.checked);
		sound_nf_on = GM_getValue("sound_nf_on");
	}, false);
	td2.appendChild(check2);
	var img2 = Doc.createElement("img");
	img2.setAttribute("width", "16");
	img2.src = "./graphic/ally_forum.png";
	td2.appendChild(img2);
	var check21 = Doc.createElement("input");
	check21.setAttribute("type", "text");
	check21.setAttribute("style", "text-align: center");
	check21.setAttribute("name", "sound_nf_vol");
	check21.value = sound_nf_vol;
	check21.setAttribute("size", "2");
	check21.setAttribute("maxlength", "3");
	check21.setAttribute("method", "post");
	check21.setAttribute("enctype", "multipart/form-data");
	check21.addEventListener("change", function () {
		sound_nf_vol = check_vol("sound_nf_vol", this.value);
	}, false);
	td2.appendChild(Doc.createTextNode(Text4)); 		// volume
	td2.appendChild(check21);
	td2.appendChild(Doc.createTextNode("% "));
	var test2 = Doc.createElement("input");
	test2.setAttribute("type", "image");
	test2.setAttribute("style", "vertical-align: middle");
	test2.setAttribute("src", stest);
	test2.setAttribute("title", "test");
	test2.addEventListener("click", function () {
		play_sound(sound_nf, sound_nf_vol);
	}, true);
	td2.appendChild(test2);
	td2.appendChild(Doc.createTextNode(Text11));		// forum sound url
	row2.appendChild(td2);
	table.appendChild(row2);
	var row20 = Doc.createElement("tr");
	var td20 = Doc.createElement("td");
	var check20 = Doc.createElement("input");
	check20.setAttribute("type", "text");
	check20.setAttribute("style", "text-align: left");
	check20.setAttribute("name", "sound_nf");
	check20.value = sound_nf;
	check20.setAttribute("size", "92");
	check20.setAttribute("maxlength", "200");
	check20.setAttribute("method", "post");
	check20.setAttribute("enctype", "multipart/form-data");
	check20.addEventListener("change", function () {
		sound_nf = GM_test("sound_nf", this.value);
	}, false);
	td20.appendChild(check20);
	row20.appendChild(td20);
	table.appendChild(row20);
//forum DSphpBB
	if (dsphpbb) {
		var row10 = Doc.createElement("tr");
		var td10 = Doc.createElement("td");
		var check10 = Doc.createElement("input");
		check10.setAttribute("type", "text");
		check10.setAttribute("style", "text-align: left");
		check10.setAttribute("name", "forum");
		check10.value = forum;
		check10.setAttribute("size", "65");
		check10.setAttribute("maxlength", "200");
		check10.setAttribute("method", "post");
		check10.setAttribute("enctype", "multipart/form-data");
		check10.addEventListener("change", function () {
			forum = GM_test("dsphpbb_adr" + welt + uv, this.value);
		}, false);
		td10.appendChild(Doc.createTextNode(Text12));	// forum url
		td10.appendChild(check10);
		var img10a = Doc.createElement("img");
		img10a.setAttribute("width", "17");
		img10a.src = forum + "images/ds/ds_nonewpost.gif";
		var img10b = Doc.createElement("img");
		img10b.setAttribute("width", "17");
		img10b.src = forum + "images/ds/ds_newpost.gif";

		td10.appendChild(Doc.createTextNode(" "));
		td10.appendChild(img10a);
		td10.appendChild(Doc.createTextNode(" "));
		td10.appendChild(img10b);
		row10.appendChild(td10);
		table.appendChild(row10);
	}
// password refresh sound
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	var row64 = Doc.createElement("tr");
	var td64 = Doc.createElement("td");
	var check66 = Doc.createElement("input");
	check66.setAttribute("type", "checkbox");
	check66.setAttribute("name", "sound4_on");
	check66.checked = sound4_on;
	check66.addEventListener("change", function () {
		GM_setValue("sound4_on", this.checked);
		sound4_on = GM_getValue("sound4_on");
	}, false);
	td64.appendChild(check66);
	var img64 = Doc.createElement("img");
	img64.setAttribute("width", "17");
	img64.src = "./graphic/rabe.png";
	td64.appendChild(img64);
	var check67 = Doc.createElement("input");
	check67.setAttribute("type", "text");
	check67.setAttribute("style", "text-align: center");
	check67.setAttribute("name", "sound4_vol");
	check67.value = sound4_vol;
	check67.setAttribute("size", "2");
	check67.setAttribute("maxlength", "3");
	check67.setAttribute("method", "post");
	check67.setAttribute("enctype", "multipart/form-data");
	check67.addEventListener("change", function () {
		sound4_vol = check_vol("sound4_vol", this.value);
	}, false);
	td64.appendChild(Doc.createTextNode(Text4)); 		// volume
	td64.appendChild(check67);
	td64.appendChild(Doc.createTextNode("% "));
	var test68 = Doc.createElement("input");
	test68.setAttribute("type", "image");
	test68.setAttribute("style", "vertical-align: middle");
	test68.setAttribute("src", stest);
	test68.setAttribute("title", "test");
	test68.addEventListener("click", function () {
		play_sound(sound4, sound4_vol);
	}, true);
	td64.appendChild(test68);
	td64.appendChild(Doc.createTextNode(Text13));  	//pw refresh sound url
	row64.appendChild(td64);
	table.appendChild(row64);
	row64.appendChild(td64);
	table.appendChild(row64);
	var row65 = Doc.createElement("tr");
	var td65 = Doc.createElement("td");
	var check65 = Doc.createElement("input");
	check65.setAttribute("type", "text");
	check65.setAttribute("style", "text-align: left");
	check65.setAttribute("name", "sound4");
	check65.value = sound4;
	check65.setAttribute("size", "92");
	check65.setAttribute("maxlength", "200");
	check65.setAttribute("method", "post");
	check65.setAttribute("enctype", "multipart/form-data");
	check65.addEventListener("change", function () {
		sound4 = GM_test("sound4", this.value);
	}, false);
	td65.appendChild(check65);
	row65.appendChild(td65);
	table.appendChild(row65);

// Sprache einstellen
	rowx = Doc.createElement("tr");
	tdx = Doc.createElement("td");
	rowx.appendChild(tdx);
	table.appendChild(rowx);
	
	var row12 = Doc.createElement("tr");
	var td12 = Doc.createElement("td");
	var check = [];
	var counter = 0;
	for (var la = 0; la < language.length; la++) {
		if (language[la] !== "") {
			check[la] = Doc.createElement("input");
			check[la].setAttribute("type", "radio");
			check[la].setAttribute("name", "lang");
			check[la].setAttribute("value", language[la]);
			check[la].addEventListener("change", function () {
				check_lang(this.value);
			}, false);
			td12.appendChild(check[la]);
			td12.appendChild(Doc.createTextNode(lname[la] + " "));
			if (lang == language[la]) {
				check[la].checked = true;
			}
			counter += 1;
			if (counter > 5) {
				counter = 0; 
				var br = Doc.createElement("br"); 
				td12.appendChild(br);
			}
		}
	}
	row12.appendChild(td12);
	table.appendChild(row12);


// submit
	var row9 = Doc.createElement("p");
	row9.setAttribute("align", "right");
	var check9 = Doc.createElement("input");
	check9.setAttribute("type", "submit");
	check9.addEventListener("click", function () {
		location.reload();
	}, false);
	row9.appendChild(check9);
	table.appendChild(row9);
	td.appendChild(table);
	tr.appendChild(td);
	tbody.appendChild(tr);
	Optionen.appendChild(tbody);
	pos.replaceChild(Optionen, pos.firstChild);
}

	// bindet Grafik Glocke ein
function grafik() {
	var test = Boolean(Loc.href.search(/navi-border/) <= 0);	// DS-Version >= 5.x?
	var glocke = Doc.createElement('td');
	glocke.setAttribute("id", "Glocke");
	glocke.setAttribute("align", "center");
	var table = Doc.createElement("table");
	table.setAttribute("class", "box");
	table.setAttribute("cellspacing", "0");
	var tbody = Doc.createElement("tbody");
	var tr = Doc.createElement("tr");
	var td = Doc.createElement("td");
	td.setAttribute("width", "16");
	td.setAttribute("height", "20");
	var a = Doc.createElement('a');
	a.setAttribute("id", "Alarm");
	a.setAttribute("href", "javascript: ;");
	a.addEventListener("click", function () {
		optionen();
	}, false);

	var img = Doc.createElement("img");
	img.setAttribute("title", "sound options");
	if (sound_on) {
		img.setAttribute("alt", "on");
		img.src = picsndon;
	}
	else {
		img.setAttribute("alt", "off");
		img.src = picsndoff;
	}
	a.appendChild(img);
	td.appendChild(a);
	tr.appendChild(td);
	tbody.appendChild(tr);
	table.appendChild(tbody);
	glocke.appendChild(table);

	if (test) {						// is DS-Version >= 5.0?
		var glocke1 = Doc.createElement("td");
		glocke1.setAttribute("align", "center");
		var rtable = Doc.createElement("table");
		rtable.setAttribute("style", "border-collapse: collapse;");
		rtable.setAttribute("class", "navi-border");
		var rtbody = Doc.createElement("tbody");
		var rtr = Doc.createElement("tr");
		rtr.appendChild(glocke);
		rtbody.appendChild(rtr);
		rtable.appendChild(rtbody);
		glocke1.appendChild(rtable);
		var line = Doc.getElementsByTagName("hr");
		var pos1 = line[0].nextSibling.nextSibling.firstChild.nextSibling.firstChild;
		var pos2 = pos1.firstChild.nextSibling.nextSibling.nextSibling;
		pos1.insertBefore(glocke1, pos2);
	}
	else {
		alert(" - DS_Sounds 2.0 / TW_Sounds 2.0 - \nOnly valid from Tribalwars version 5.x and Firefox 3.5x !\nNur für Die Stämme ab Version 5.x und Firefox 3.5 ++ !");
	}
}



var sound_on = GM_getValue("sound_on", true);
var zeit = GM_getValue("zeit", 10);
var sound1 = GM_test("sound1", "0");
var sound1_on = GM_getValue("sound1_on", true);
var sound1_vol = GM_getValue("sound1_vol", 100);
var sound2 = GM_test("sound2", "0");
var sound2_on = GM_getValue("sound2_on", true);
var sound2_vol = GM_getValue("sound2_vol", 100);
var loop = false;
var sound3 = GM_test("sound3", "0");
var sound3_on = GM_getValue("sound3_on", true);
var sound3_vol = GM_getValue("sound3_vol", 70);
var sound_nm = GM_test("sound_nm", "0");
var sound_nm_on = GM_getValue("sound_nm_on", true);
var sound_nm_vol = GM_getValue("sound_nm_vol", 50);
var sound_nr = GM_test("sound_nr", "0");
var sound_nr_on = GM_getValue("sound_nr_on", true);
var sound_nr_vol = GM_getValue("sound_nr_vol", 50);
var sound_nf = GM_test("sound_nf", "0");
var sound_nf_on = GM_getValue("sound_nf_on", true);
var sound_nf_vol = GM_getValue("sound_nf_vol", 35);
var sound4 = GM_test("sound4", "0");
var sound4_on = GM_getValue("sound4_on", true);
var sound4_vol = GM_getValue("sound4_vol", 75);

var dsphpbb = false;
try {
	var wert = Body.match(/action=is_newer_post/)[0];
	if (wert) {
		dsphpbb = true;
	}
} 
catch (e) {
	dsphpbb = false;
}
if (dsphpbb) {
	var forum = GM_getValue("dsphpbb_adr" + welt + uv, "0");
	var pic1f = forum  + "images/ds/ds_newpost.gif";
}



if (Body.match(/input name=\"sid_refresh_password/) || Doc.location.href.match(/sid_wrong\.php/)) {
	refresh_p();
} 
else {
	check_angriff();			// Angriff?
	check_other();				// anderes Ereignis?
	grafik();					// Soundsymbol anzeigen
}






