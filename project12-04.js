"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-04

      Project to create an interactive slideshow
      Author: 
      Date:   

      Filename: project12-04.js
*/
$(document).ready(function() {
    var slideNumber = 0;

    $("img#leftbutton").click(function() {
        if (slideNumber > 0) {
            $("img.slideImages").animate({left: "+=401px"}, 1000);
            slideNumber--;
            var currentSlide = $("img.slideImages")[slideNumber];
            var slideCaption = $(currentSlide).attr("alt");
            changeCaption(slideCaption);
        }
    });

    $("img#rightbutton").click(function() {
        if (slideNumber < 11) {
            $("img.slideImages").animate({left: "-=401px"}, 1000);
            slideNumber++;
            var currentSlide = $("img.slideImages")[slideNumber];
            var slideCaption = $(currentSlide).attr("alt");
            changeCaption(slideCaption);
        }
    });

    function changeCaption(captionText) {
        $("div#caption").effect("blind", {mode: "hide", direction: "left", duration: 500}, function() {
            $("div#caption").text(captionText).effect("blind", {mode: "show", direction: "left", duration: 500});
        });
    }
});
