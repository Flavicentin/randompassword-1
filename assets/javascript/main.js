
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider, noteAnimation} from "./length-slider.js";
import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";




$('document').ready(function() {


  //make center box in main
  let centerBox = $(`<div id="center-box" class="center-box">`);

  //start opening animation
  startOpening()

  //make fancy slider (transparent on start)
  centerBox.html(makeFancySlider());
  $("#main").append(centerBox);

  //start slider functionality, animate slider fade in
  fancySlider();
  $(".red-slider").delay(4000).velocity({opacity: 1}, 2000);

  //animates notifications and adds next button
  noteAnimation();
    //noteAnimation's next button triggers removal of slider



}); //end of document ready
