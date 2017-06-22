
// ==UserScript==
// @name         Recommended -> Recents
// @version      0.1
// @description  Redirect OnePlus Forums to Recents instead of Recommended
// @author       rag3trey
// @match        *forums.oneplus.net/
// @grant        none
// ==/UserScript==

$(document).ready(function () {
	function change() {
		$window.location.replace = "https://forums.oneplus.net/?order=recent";
	}
	$(document).ajaxStop(function () {
		change();
	});
	change();
});
