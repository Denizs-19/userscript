// ==UserScript==
// @name          for Omid
// @namespace      for Omid
// @description    برای برادر عزیزم امید
// @version        1.0
// @include        http://ww*.erepublik.com/en
// ==/UserScript==

var actualCode = [
'create_elements();',

'function create_elements()',
'{',
	'if(document.getElementById("fundRW_btn") !== null)',
		'document.getElementById("fundRW_btn2").click();',
	'else',
		'setTimeout("location.reload(true);",400);',
'}'
].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);