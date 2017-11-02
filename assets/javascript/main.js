
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {opening} from "./opening.js";
import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";


$(document).ready(function(){

  $(".word-box").draggable({axis: 'y', containment: "parent"});

  $(".drag-container").mouseup(function(){
    $(".red").removeClass('red');
    var elem = document.elementFromPoint((window.innerWidth / 2), window.innerHeight /2);
    console.log(elem);
    $(elem).addClass('red');
  });

  document.onkeyup = function(event) {
	console.log(getWordLists(8, 16, 6));
  };

});






//opening animation

// opening.main.append(opening.makeTitleElm());
// for(let i = 0; i < opening.titleArray.length; i++) {
//   let speed = (Math.random() * 2000);
//   $(`#${i}`).delay(speed).velocity({top: '50%'}, 'slow');
// };
