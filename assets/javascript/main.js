
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider} from "./length-slider.js";
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



//end of document ready
});






//opening animation

// opening.main.append(opening.makeTitleElm());
// for(let i = 0; i < opening.titleArray.length; i++) {
//   let speed = (Math.random() * 2000);
//   $(`#${i}`).delay(speed).velocity({top: '50%'}, 'slow');
// };
