
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {startOpening} from "./opening.js";
import {makeFancySlider, fancySlider, noteAnimation} from "./length-slider.js";
// import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";

const selectedWords = {
  //selects words in center of window, changes text to black
  test() {
    $('.black-text').removeClass('black-text');
    //get center height
    let winHeight = window.innerHeight;
    let winMid = winHeight / 2;
    //tests each random-word for position on center height
    $(".random-word").each( function(index, element,) {
      let elemPos = $(this).offset();
      let elemBottom = elemPos.top + $(this).height();
      //is elment in the middle of the window?
      if (elemPos.top <= winMid && elemBottom > winMid) {
        //if true make text black
        $(this).addClass('black-text');
      };
    });
  },

  randomSets: [
    ['worda1', 'word2xxxxx', 'word3', 'word4', 'word5', 'word6', 'word7'],
    ['wordb1', 'word2xxxxx', 'word3', 'word4', 'word5', 'word6', 'word7'],
    ['wordc1', 'word2xxxxx', 'word3', 'word4', 'word5', 'word6', 'word7']
  ],

}; //end selectedWords object

const makeListContainer = () => {
  //make list-container
  let listContainer = $(`<div id="list-container"></div>`);
  $("#main").append(listContainer);

  //place words in lists in list-container
  for (let i = 0; i < selectedWords.randomSets.length; i++) {
    // define and append drag-container and word-box
    let dragContainer = $(`<div class="drag-container"></div>`);
    let wordBox = $(`<div class="word-box"></div>`)
    $('#list-container').append(dragContainer);
    dragContainer.append(wordBox);

    //place randomSets words in word-box(s)
    selectedWords.randomSets[i].forEach(function(word) {
      let randomWord = $(`<div class="random-word">${word}</div>`);
      wordBox.append(randomWord);
    });
  };
};


$('document').ready(function() {


  //make center box in main
  let centerBox = $(`<div id="center-box" class="center-box">`);
  $("#main").append(centerBox);
  //ABOVE IS TEMPORARY do not copy into main.js






}); //end of document ready
