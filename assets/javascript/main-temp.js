
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider, noteAnimation} from "./length-slider.js";
import {selectedWords, makeListContainer} from "./word-select.js";
import {addSymbol} from "./add-symbol.js";






$('document').ready(function() {


  //make center box in main
  let centerBox = $(`<div id="center-box" class="center-box">`);
  $("#main").append(centerBox);
  //don't include above in final copy

  //add and animate in add symbol interface
  addSymbol();
  $('#password-container').velocity({left: '50%'},1000);














}); //end of document ready
