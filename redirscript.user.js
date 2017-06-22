
// ==UserScript==
// @name         Recommended -> Recents
// @version      0.1
// @description  Redirect OnePlus Forums to Recents instead of Recommended
// @author       rag3trey
// @match        *forums.oneplus.net/*
// @grant        none
// ==/UserScript==

document.body.addEventListener('mousedown', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/forums.oneplus.net/) ) {
        targ.href = targ.href.replace(/https?:\/\/forums.oneplus\.net/, 'http://forums.oneplus.net/?order=recent');
    }
});
