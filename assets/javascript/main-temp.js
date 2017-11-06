
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider, noteAnimation, passLength} from "./length-slider.js";
import {selectedWords, makeListContainer} from "./word-select.js";
import {addSymbol} from "./add-symbol.js";
import {getWordLists} from "./generator.js";




$('document').ready(function() {

  //!!!!!!!!!!!
  let centerBox = $(`<div id="center-box" class="center-box">`);
  $("#main").append(centerBox);
  addSymbol();
  $('#password-container').velocity({left: '50%'},1000);
  //!!!!!!!!!!!



  









}); //end of document ready
