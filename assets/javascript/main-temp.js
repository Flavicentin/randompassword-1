
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider, noteAnimation} from "./length-slider.js";
// import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";

const selectedWords = [];




$('document').ready(function() {


  //make center box in main
  let centerBox = $(`<div id="center-box" class="center-box">`);
  $("#main").append(centerBox);
  //ABOVE IS TEMPORARY do not copy into main.js

  $(".word-box").draggable({containment: 'parent'});

  //event lister, select words in word-box
  $(".word-box").on('mouseup', function() {
    //remove red-text
    //$('.red-text').each($(this).removeClass('red-text'));
    let winHeight = $(window).innerHeight();
    let winMid = winHeight / 4;
    $(".random-word").each( function() {
      console.log($(this));
      let elemPos = $(this).position();
      let elemBottom = elemPos.top + $(this).height();
      //is elment in the middle of the window
      if (elemPos.top <= winMid && elemBottom >= winMid) {
        //add red-text class
        $(this).addClass('red-text');
        console.log($(this));
      };
      // console.log(winMid, elemPos.top, elemBottom);


    });

  });



}); //end of document ready
