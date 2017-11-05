
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider, noteAnimation} from "./length-slider.js";
import {selectedWords, makeListContainer} from "./word-select.js";




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

  //event listener for slider-next click, triggers word select
  $('#slider-next').on("click", function(){
    setTimeout(function(){

      //makes lists of random words
      makeListContainer();

      // make word-box(s) draggable
      $(".word-box").draggable({containment: 'parent'});
      selectedWords.test();

      //event lister, select words in word-box
      $(".word-box").on('mouseup', function() {
        selectedWords.test();
        //fade in next button
        $(".words-next").velocity({opacity: '1'}, 1000);

      });

      //animate in word list
      $('#list-container').velocity({left: '50%'}, 1000);
      $('#gradient-mask').velocity({left: '50%'}, 1000);

  }, 1100)});



}); //end of document ready
