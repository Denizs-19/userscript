// ==UserScript==
// @name           120s20d2sd0a2d0ad
// @namespace      http://userscripts.org/users/musl
// @description    Direktlinkek, mint a travian 

plusszban -- Frod?totta: Simulacrum
// @include        http://*.travian.*php*
// @exclude 	   http://*.travian.*/login.php*
// @exclude        http://*.travian.*/logout.php*
// @exclude 	   http://*.travian.*/chat.php*
// @exclude 	   http://forum.travian.*
// @exclude 	   http://*.travian.*/index.php*
// @exclude 	   http://*.travian.*/manual.php*
// ==/UserScript==

//Configuration
var links = [
    ['OoO'     , 'allianz.php'],
    ['WwW'        , 'allianz.php?s=3'],
	['MmM'        , 'allianz.php?s=4'],
];

//Code
var menu = document.getElementById('side_info');
if(menu == null) { //Just one village
  menu = document.createElement('div');
  menu.setAttribute('id','sright');
  document.getElementById('lmidall').appendChild(menu);
}
menu.appendChild(document.createElement('br'));

var elemB, elemUL, elemLI, elemA;

/* Links Menu */
elemB  = document.createElement('b');
elemB.appendChild(document.createTextNode('||~ Gr 

~||'));
menu.appendChild(elemB)

elemUL = document.createElement('ul');
elemUL.setAttribute('class','dl');
menu.appendChild(elemUL)

for each ( var link in links ){
    elemLI = document.createElement('li');
    elemLI.setAttribute('class','dl');

    elemA = document.createElement('a');
    elemA.href = link[1];
    elemA.appendChild(document.createTextNode(link[0]));

    elemLI.appendChild(elemA);
    elemUL.appendChild(elemLI);
}