// Copyright (c) 2006, Vanson Samuel
// ==UserScript==
// @name           CSS Remix Redirect
// @namespace      http://binq.org/greasemonkey/
// @description    CSS Remix Redirect v2.0: CSS Beauty pages that are opened in a new tab/window take you directly to the dugg article.  It's very useful when looking through RSS feeds.
// @include        http://*.cssremix.com/*/*
// @include        http://cssremix.com/*/*
// ==/UserScript==

BINQ = {};

BINQ.linkJumper = {
	jumpToFirstValidLink: function() {
		var that=this; //For the private fuctions below.
		function findValidLink(links) {
			if (typeof that.isValidLink == "undefined") { return links.iterateNext(); }
			while (link = links.iterateNext()) {
				if (that.isValidLink(link)) { return link; }
			}
			return null;
		}
		function getRedirectUrl(link) {
			if (typeof that.parseUrlFromLink == "undefined") { return link.href; }
			return that.parseUrlFromLink(link);
		}

		var links = document.evaluate(this.searchPath, document, null, 0, null);
		var link = findValidLink(links);
		if (link) { window.location = getRedirectUrl(link); }
	}
}

BINQ.cssremixLinkJumper = {
	init: function() {
		this.jumpToFirstValidLink = BINQ.linkJumper.jumpToFirstValidLink;
		return this;
	},
	searchPath: "//a[@id='the_screenshot']",
}

if (history.length == 1) { BINQ.cssremixLinkJumper.init().jumpToFirstValidLink(); }