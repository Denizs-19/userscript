/* 
     A simple easy to follow script
     Created by rossario @ http://www.mysspace.com/rossario
*/

// ==UserScript==
// @name          greetings
// @namespace     rx2-designs.com
// @description	  Greeting script 
// @include       http://home.myspace.com/*=user
// @include       http://home.myspace.com/*=user&*
// @exclude       http://*myspace.com/*=user&*comment*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('h4.heading > b { font-size: 12px !important ;}');

var r = new Date();
var heading = r.getHours();
if (heading <= 3) { 
    html = document.body.innerHTML.replace (/Hello,/, "<b>eek it's</b>"); 
    document.body.innerHTML = html;
} 
else if (heading > 3 && heading < 12) { 
    html = document.body.innerHTML.replace (/Hello,/, "<b>eek it's</b>"); 
    document.body.innerHTML = html;
}  
else if (heading >=12 && heading <= 16) { 
    html = document.body.innerHTML.replace (/Hello,/, "<b>eek it's</b>"); 
    document.body.innerHTML = html;
} 
else{ 
    html = document.body.innerHTML.replace (/Hello,/, "<b>eek it's</b>");
    document.body.innerHTML = html;
}
