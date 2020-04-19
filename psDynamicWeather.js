// ==UserScript==
// @name          Showdown Dynamic Weather
// @description	  The basic theme with dynamic weather
// @author        Will_the_Wizard
// @homepage      https:/
// @include       http://play.pokemonshowdown.com/*
// @include       https://play.pokemonshowdown.com/*
// @include       http://*.play.pokemonshowdown.com/*
// @include       https://*.play.pokemonshowdown.com/*
// @include       http://replay.pokemonshowdown.com/*
// @include       https://replay.pokemonshowdown.com/*
// @include       http://*.replay.pokemonshowdown.com/*
// @include       https://*.replay.pokemonshowdown.com/*
// @include       http://psim.us/*
// @include       https://psim.us/*
// @include       http://*.psim.us/*
// @include       https://*.psim.us/*
// @run-at        document-start
// @version       0.5
// ==/UserScript==

(function() {var css = [
    ".movemenu button {",
	"letter-spacing: 0.3px;",
	"}",
	"",
	".movemenu label {",
	"letter-spacing: 0.3px;",
	"font-weight: 700;",
	"color: #777;",
	"text-transform: uppercase;",
	"margin-top: -10px;",
	"padding-bottom: 0.7%;",
	"letter-spacing: 2px;",
	"}",
	"",
	".movemenu label:hover {",

	"letter-spacing: 2px;",
	"color: #FFF;",
	"text-transform: uppercase;",
	"background: -webkit-linear-gradient(#777, #fb4864);",
	"-webkit-background-clip: text;",
	"-webkit-text-fill-color: transparent;    ",
	"border-color: #fb4864;",
	"padding-bottom: 0.7%;",
	"}",
	"",
	".moveselect button,",
	".switchselect button {",
	"visibility: hidden;",
	"height: 15px;",
	"}",
	"",
	"/* Changes Move Typing & PP Text Properties */",
	"",
	".pp,",
	".type {",

	"letter-spacing: 0.3px;",
	"text-transform: uppercase;",
	"font-weight: 500;",
	"}",
	"",
	".movemenu button.type-Fairy small,",
	".movemenu button.type-Electric small,",
	".movemenu button.type-Grass small,",
	".movemenu button.type-Dragon small,",
	".movemenu button.type-Water small,",
	".movemenu button.type-Normal small,",
	".movemenu button.type-Ghost small,",
	".movemenu button.type-Steel small,",
	".movemenu button.type-Dark small,",
	".movemenu button.type-Fire small,",
	".movemenu button.type-Fighting small,",
	".movemenu button.type-Poison small,",
	".movemenu button.type-Rock small,",
	".movemenu button.type-Ground small,",
	".movemenu button.type-Ice small,",
	".movemenu button.type-Flying small,",
	".movemenu button.type-Psychic small,",
	".movemenu button.type-Bug small {",

	"letter-spacing: 0.3px;  ",
	"font-size: 8.5px;",
	"text-transform: uppercase;",
	"font-weight: 500;",
	"}",
	"",
	".movemenu button:disabled small {",

	"letter-spacing: 0.3px;",
	"font-size: 8.5px;",
	"text-transform: uppercase;",
	"font-weight: 500;",
	"}",
	"",
	"/* Changes Pokemon Name */",
	"",
	".statbar strong { ",
	"letter-spacing: 0.3px;",
	"color: #FFF;",
	"font-weight: 500;",
	"/* 	text-transform: uppercase; */",
	"/*     font-size: 90%; */",
	"}",
	"",
	"/* Changes Pokemon LV  */",
	"",
	".statbar strong small { ",

	"letter-spacing: 0.3px;",
	"font-weight: 300;",
	"}",
	"",
	".statbar .hpbar .hptext {",

	"letter-spacing: 0.3px;",
	"font-weight: 700;",
	"}",
	"",
	"/* Changes Turn Box */",
	"",
	".turn {",

	"letter-spacing: 0.3px;",
	"border: none;",
	"opacity: 1;",
	"}",
	"",
	".turn.style {",

	"letter-spacing: 0.3px;",
	"border: none;",
	"opacity: 1;",
	"}",
	"",
	".backdrop:after {",

	"letter-spacing: 0.3px;",
	"display: inline-block;",
	"content: \"\";",
	"background:",
	"/*     			 linear-gradient(to top, #eef2f5, transparent 7%), */",
	"            url(http://pedrojmiranda.com/img/rotate.php) no-repeat;",
	"position: absolute;",
	"width: 700px;",
	"height: 450px;",
	"}",
	"",
	".battle { ",
	"border: 0;",
	"}",
	"",
	".whatdo {",
	"}",
	"",
	".leftbar,",
	".rightbar {",
	"letter-spacing: 0.3px;",
	"background: none;",
	"border: none;",
	"color: #FFF;",
	"}",
	"",
	".leftbar .trainer strong {",
	"position: relative !important;",
	"top: 305px;",
	"left: 63px;",
	"font-weight: 500;",
	"text-align: left;",
	"}",
	"",
	"",
	".rightbar .trainer strong {",
	"font-weight: 500;",
	"position: relative !important;",
	"top: 329px;",
	"right: 95px;",
	"text-align: right;",
	"}",
	"",
	".spacer.battle-history {",
	"border-top: 2px solid rgba(171, 183, 183, 0.2);",
	"}",
	"",
	".battle-history {",
	"letter-spacing: 0.3px;",
	"padding-top: 2px;",
	"}",
	"",
	"h2.battle-history {",
	"border-bottom: none;",
	"padding: 10px;",
	"margin-top: -7px;",
	"margin-bottom: -8px;",
	"}",
	"",
	".chat {",
	"letter-spacing: 0.3px;",
	"margin-top: 13px;",
	"}",
	"",
	".battle-history small { ",

	"letter-spacing: 0.3px;",
	"color: #bd5252;",
	"}",
	"",
	".battle-log {",

	"letter-spacing: 0.3px;",
	"border: none;",
	"}",
	"",
	".userlist {",

	"letter-spacing: 0.3px;",
	"border: none;",
	"}",
	"",
	".battle-log-add {",

	"letter-spacing: 0.3px;",
	"border: none;",
	"}",
	"",
	"/*  #tooltipwrapper {",
	"border: 1px solid #e3e3e3;",
	"} */",
	"",
	"#tooltipwrapper .tooltip {",

	"letter-spacing: 0.3px;",
	"border: 1px solid #e3e3e3;",
	"background: rgba(255,255,255, 0.95);",
	"}",
	"",
	".leftbar .trainer .teamicons {",
	"float: left !important;",
	"position: relative !important;",
	"top: 0px !important;",
	"right: 0px !important;",
	"opacity: 1 !important;",
	"}",
	"",
	".rightbar .trainer .teamicons {",
	"float: left !important;",
	"position: relative !important;",
	"top: 20px !important;",
	"right: 0px !important;",
	"opacity: 1 !important;",
	"}",
	"",
	".rightbar .teamicons:nth-of-type(2)  span:nth-of-type(1) {",
	"position: relative !important;",
	"top: 5px !important;",
	"left: 167px !important;",
	"}",
	"",
	".rightbar .teamicons:nth-of-type(2)  span:nth-of-type(2) {",
	"position: relative !important;",
	"top: 40px !important;",
	"left: 134px !important;",
	"}",
	"",
	".rightbar .teamicons:nth-of-type(2)  span:nth-of-type(3) {",
	"position: relative !important;",
	"top: 75px !important;",
	"left: 102px !important;",
	"}",
	"",
	".rightbar .teamicons:nth-of-type(3) span:nth-of-type(1) {",
	"position: relative !important;",
	"top: 110px !important;",
	"left: 69px !important;",
	"}",
	"",
	".rightbar .teamicons:nth-of-type(3) span:nth-of-type(2) {",
	"position: relative !important;",
	"top: 145px !important;",
	"left: 37px !important;",
	"}",
	"",
	".rightbar .teamicons:nth-of-type(3) span:nth-of-type(3) {",
	"position: relative !important;",
	"top: 180px !important;",
	"left: 5px !important;",
	"}",
	"",
	".leftbar .teamicons:nth-of-type(2)  span:nth-of-type(1) {",
	"position: relative !important;",
	"top: 0px !important;",
	"left: 38px !important;",
	"}",
	"",
	".leftbar .teamicons:nth-of-type(2)  span:nth-of-type(2) {",
	"position: relative !important;",
	"top: 35px !important;",
	"left: 5px !important;",
	"}",
	"",
	".leftbar .teamicons:nth-of-type(2)  span:nth-of-type(3) {",
	"position: relative !important;",
	"top: 70px !important;",
	"left: -27px !important;",
	"}",
	"",
	".leftbar .teamicons:nth-of-type(3) span:nth-of-type(1) {",
	"position: relative !important;",
	"top: 105px !important;",
	"left: -60px !important;",
	"}",
	"",
	".leftbar .teamicons:nth-of-type(3) span:nth-of-type(2) {",
	"position: relative !important;",
	"top: 140px !important;",
	"left: -92px !important;",
	"}",
	"",
	".leftbar .teamicons:nth-of-type(3) span:nth-of-type(3) {",
	"position: relative !important;",
	"top: 175px !important;",
	"left: -124px !important;",
	"}",
	"",
	".trainer div.teamicons {",
	"width: 97px;",
	"height: 30px;",
	"left: 25px;",
	"}",
	"",
	".rightbar .trainer {",
	"margin-top: 50px;",
	"}",
	"",
	".leftbar {",
	"top: -125px; ",
	"left: -57px;",
	"}",
	"",
	".leftbar .trainersprite {",
	"visibility: hidden;",
	"}",
	"",
	".rightbar .trainersprite {",
	"filter: blur(0.4px);",
	"position: relative !important;",
	"left: -20px;",
	"top: 30px;",
	"}",
	"",
	"/* Weather */",
	"",
    ".sunweather,",
	".sunnydayweather,",
	".desolatelandweather",
	"{",
	"background: url(https://i.imgur.com/DNMtOWR.gif) no-repeat scroll left top;",
	"color: #664411;",
	"text-shadow: #FFFFFF 5px 5px 0, #FFFFFF 1px -1px 0, #FFFFFF -1px 1px 0, #FFFFFF -1px -1px 0;",
	"background-size:cover;",
	"}",
    "",
	".rainweather,",
	".raindanceweather,",
	".primordialseaweather",
	"{",
	"background:url(https://i.imgur.com/NQqkU6j.gif) scroll left top;",
	"background-size:cover;",
	"color: #0044BB;",
	"text-shadow: #FFFFFF 5px 5px 0, #FFFFFF 1px -1px 0, #FFFFFF -1px 1px 0, #FFFFFF -1px -1px 0;",
	"}",
	"",
	".sandstormweather",
	"{",
	"background: url(https://i.imgur.com/OEB3hum.gif) scroll left top;",
	"background-size:cover;",
	"color: #554433;",
	"text-shadow: #FFFFFF 1px 1px 0, #FFFFFF 1px -1px 0, #FFFFFF -1px 1px 0, #FFFFFF -1px -1px 0;",
	"}",
	"",
	".hailweather",
	"{",
	"background: url(https://i.imgur.com/PweinWm.gif) scroll left top;",
	"background-size:cover;",
	"color: #114455;",
	"text-shadow: #FFFFFF 5px 5px 0, #FFFFFF 1px -1px 0, #FFFFFF -1px 1px 0, #FFFFFF -1px -1px 0;",
	"}",
	"",
	".weather em {",
	"color: #FFF;",
	"font-weight: 500;",
	"text-shadow: 0px 0px 4px rgba(0,0,0, 1);",
	"}",
    ".leftbar {",
	"position: absolute !important;",
	"top: 173px !important;",
	"left: 10 !important;",
	"height: 95px !important;",
	"width: 320px !important;",
	"}",
	"",
	".rightbar {",
	"position: absolute !important;",
	"top: 278px !important;",
	"right: -90px !important;",
	"height: 95px !important;",
	"width: 320px !important;",
	"}",
	".message {",

	"letter-spacing: 0.3px;  ",
	"}",
	"",
	"",
	"p {",

	"letter-spacing: 0.3px;  ",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
