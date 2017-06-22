
// ==UserScript==
// @name         Recommended -> Recents
// @version      0.1
// @description  Redirect OnePlus Forums to Recents instead of Recommended
// @author       rag3trey
// @match        *forums.oneplus.net/
// @grant        none
// ==/UserScript==

var groupname = "?order=recent"; //insert your groupname between these brackets

location.href = location.protocol + "//forums.oneplus.net" + groupname;
