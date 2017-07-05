// ==UserScript==
// @name         Recommended -> Recents (ALPHA)
// @version      0.3a
// @description  Redirect OnePlus Forums to Recents instead of Recommended
// @author       Baymax
// @match        *forums.oneplus.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var groupname = "?order=recent"; //insert your groupname between these brackets

    location.href = location.protocol + "//forums.oneplus.net/" + groupname;
} )();
