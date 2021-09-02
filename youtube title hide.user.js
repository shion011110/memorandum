// ==UserScript==
// @name         youtube title hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://*.youtube.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.ytp-panel-menu').prepend('<div class="ytp-menuitem ytp-menu-title-hide" role="menuitemcheckbox" aria-checked="true" tabindex="0"><div class="ytp-menuitem-icon"></div><div class="ytp-menuitem-label">タイトル非表示</div><div class="ytp-menuitem-content"><div class="ytp-title-hide ytp-menuitem-toggle-checkbox"></div></div></div>');
    $( 'body' ).on( 'click', '.ytp-title-hide', function() {
        var title_hide_props = {display:"none",}
        $('.ytp-title, .ytp-chrome-top').css(title_hide_props);
        $('.ytp-menu-title-hide').attr('aria-checked', 'false');
        $( this ).addClass( 'change' );
    } );
    $( 'body' ).on( 'click', '.change', function() {
        var title_show_props = {display:"flex",}
        $('.ytp-title, .ytp-chrome-top').css(title_show_props);
        $('.ytp-menu-title-hide').attr('aria-checked', 'true');
        $( this ).removeClass( 'change' );
    } );
})();