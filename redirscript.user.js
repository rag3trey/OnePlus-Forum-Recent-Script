// ==UserScript==
// @name         Recommended -> Recents
// @version      0.4
// @description  Redirect OnePlus Forums to Recents instead of Recommended
// @author       Baymax
// @match        *forums.oneplus.com
// @grant        none
// ##Acknowledgements: sfomin and JasonMR. Thank you both for your support! ##
// ==/UserScript==

(function() {
    'use strict';
    var groupname = "?order=Recent"; //insert your groupname between these brackets

    location.href = location.protocol.pushstate + "//forums.oneplus.com/" + groupname;
} )();
