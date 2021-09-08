// ==UserScript==
// @name         Volume And Skip Contolore
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
    window.addEventListener('yt-page-data-updated', function () {
        $('.ytp-volume-panel, ytp-volume-slider, .ytp-volume-slider-handle').mouseup(function () {
            $(this).blur();
            $('video').focus();
        });
    });
})();