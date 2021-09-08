// ==UserScript==
// @name         Youtube Subscribe Hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /https?:\/\/www\.youtube\.com.*/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('yt-page-data-updated', function () {
        $(".hide-content").remove();
        let cookie = $.cookie('subscribe_hide');
        let tag = "";
        let css = {
            display:"flex",
            float:"left",
            border:"3px solid",
            borderRadius:"7px",
            margin:"0.4em 0",
            padding:"0.2em 4px",
            fontSize:"1.3em",
            height:"17px",
            cursor:"pointer",
            alignItems:"center",
            alignContent:"center",
            transition:"0.6s",
        }
        if (cookie == 'show') {
            tag = '<div class="hide-content">Hide</div>';
            css["background"] = "none";
            css["color"] = "#fff";
        }else{
            tag = '<div class="hide-content show">Show</div>';
            css["background"] = "#fff";
            css["color"] = "transparent";
            $('.hide-content').css({background:"#fff", color:"transparent"});
            $('.ytp-ce-element').css("display","none");
        }
        $('.ytp-right-controls').prepend(tag);
        $('.hide-content').css(css);
    });
    $('body').on( 'click', '.hide-content', function() {
        $.cookie('subscribe_hide', 'hide');
        $(this).html('Show').addClass( 'show' );
        $('.show').css({background:"#fff", color:"transparent"});
        $('.ytp-ce-element').css("display","none");
    });
    $('body').on( 'click', '.show', function() {
        $.cookie('subscribe_hide', 'show');
        $(this).html('Hide').removeClass( 'show' );
        $('.hide-content').css({background:"none", color:"#fff"});
        $('.ytp-ce-element').css("display","block");
    });
})();