// ==UserScript==
// @name           Ikariam Aide-Memoire (Scientists)
// @namespace      http://userscripts.org/scripts/show/51273
// @author         Martynius (http://userscripts.org/users/68307)
// @license        GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html)
// @homepage       http://userscripts.org/scripts/show/51273
// @description    Shows the Scientists score of a player in the island view afer you have looked it up in the highscores.
// @require        http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js
// @require        http://ikariamscriptresources.googlecode.com/svn/tags/Latest/IkariamHostDetection.js
// @require        http://ikariamscriptresources.googlecode.com/svn/tags/Latest/IkariamLanguageDetection.js
// @require        http://ikariamscriptresources.googlecode.com/svn/tags/Latest/IkariamLanguage_Highscore.js
// @require        http://ikariamscriptresources.googlecode.com/svn/tags/Latest/IkariamLanguage_Time.js
// @require        http://www.betawarriors.com/bin/gm/57756user.js
// @require        http://userscripts.org/scripts/source/51116.user.js
// @version        1.0.0d
// @include        http://s*.ikariam.*/index.php
// @include        http://s*.ikariam.*/index.php?*view=city*
// @include        http://s*.ikariam.*/index.php?*view=island*
// @include        http://s*.ikariam.*/index.php?*view=highscore*
// @include        http://s*.ikariam.*/index.php?*view=allyHighscore*
// @include        http://s*.ikariam.*/index.php?*view=diplomacyAdvisorAlly*
// @include        http://s*.ikariam.*/index.php?*view=embassy*
// @include        http://s*.ikariam.*/index.php?*view=options*&page=game*
// @exclude        http://support*.ikariam.*/*
//
// @history	1.0.0d	Feature: Updated Included Pages; Feature: Moved options from "Account Data" to "Game Options" page.
// @history	1.0.0c	Feature: Updated Dependency.
// @history	1.0.0b	Feature: Updated auto-updater to use PhasmaExMachina's UserScript.
// @history	1.0.0a	Bugfix: Fixed issue displaying own scores.
// @history	1.0.0	Original version based on Ikariam Aide-Memoire (Generals Score)
// ==/UserScript==


if ( PAGE_ID !== undefined ) {
	new IkariamAideMemoire( {
		SCORE_TYPE: "research_score_main",
		SCRIPT_ID: 51273,
		SCRIPT_VERSION:	"1.0.0b",
		SCRIPT_NAME: "Ikariam Aide-Memoire (Scientists)"
	});
}