// ==UserScript==
// @name        Hackaday layout
// @namespace   http://localhost
// @description Customises Hackaday
// @include     http*://hackaday.com/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

document.body.style.color = "#000";
//var backgr="rgb(255,252,252)";
var backgr="rgb(246, 244, 244)";
var linkc="#4C9ED9"

GM_addStyle('.widget-area { display: none !important;}');
GM_addStyle('.main-navigation, .widget-title, .widgettitle, .store-item .store-description { border-bottom-color: rgba(76, 158, 217, 0.5); }');
GM_addStyle('.main-navigation { margin-bottom: 4px; }');
GM_addStyle('.calendar_current_time { color: #537d6f; }');
//GM_addStyle('.calendar_current_time { color: #93249f; }');
GM_addStyle(`.subscribe-form .subscribe-field {
	border: 1px solid #383535;
	color: #000;
	background: #bfb797;
}`);
GM_addStyle(`body { background-color: ${backgr} !important; }`);
GM_addStyle('.content-area { width: 100% !important; padding-top: 5em;} ');
GM_addStyle(`.icon-hackaday-comment, .logo-img, .share-post span {
	filter: invert(100%);
}`);
GM_addStyle(`.entry-featured-image > img, .entry-image, .featured-image, .store-item img, .trending-project-image img, div.slick-slide > div > a > div {
border: 1px solid black;
}`)
GM_addStyle(`a { color: ${linkc} !important; }`);
GM_addStyle(`a:hover, a:focus, a:active { color: ${linkc} !important; }`);

GM_addStyle('h1, h1 > a, h2, h2 > a {	font-weight: 800;	text-transform: uppercase;	color: #000 !important;	text-decoration: none; }');
GM_addStyle('.site-branding .site-title a, .main-navigation a {	color: #000; }');
GM_addStyle(`.blog, .entry-header, .entry-content, .entry-footer, .entry-meta, .entry-date {	margin: 0; background-color: ${backgr}; }`);

GM_addStyle(`.site-footer {	background-color: ${backgr};}`);
GM_addStyle('#leaderboard { display: none; }');
GM_addStyle('.site-title { display: none; }');
GM_addStyle('#content { width: 90%; padding-top: 5em;}');
GM_addStyle(`#masthead, #footer { width: 100%; padding-left: 10px; padding-right: 10px; background-color: ${backgr}; }`);
GM_addStyle('#masthead { position: fixed; z-index: 10000; top: 0px; }');
GM_addStyle(`.store-item { background: ${backgr}!important; }`);
GM_addStyle(`.trending-project { background: ${backgr}; }`);
GM_addStyle('pre, code, blockquote {background: #eee;}');
GM_addStyle('.report-abuse,.site-branding { display: none; }');
