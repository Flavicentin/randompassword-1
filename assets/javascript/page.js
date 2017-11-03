import {disp, finalStr} from './final_disp.js';
import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";
import {passLength, sliderStart} from './length-slider.js';

var wordLists = [];

$( document ).ready(function() {
  //activate lenght selection slider
  sliderStart();

  // $( ".sortable" ).sortable();
  // $( ".sortable" ).disableSelection();
  // $('li').filter(":nth-child(1)").addClass("primary-option"); // Selects only the first element of the word lists
  // clickDrag();
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

  var numWordOptions = 16;
  setDrumWords(passLength.min, passLength.max, numWordOptions);

  $('.carousel').carousel('pause');

  $('.carousel-control-next').on('click', function() {
    disp(wordLists.length);
    setDrumWords(passLength.min, passLength.max, numWordOptions);
  });

  $('.btn').on('click', function() {
    finalStr();
  });

  $('.carousel-control-next').on('click', function() {
    // TODO
  });

  $('.carousel-control-next').on('click', function() {

  });

});

function setDrumWords(min, max, num) {
  wordLists = getWordLists(min, max, num);

  $("#selector-row").empty();

  for (var i = 0; i < wordLists.length; i++) {
    var outerCol = $("<div>");
    outerCol.addClass("col-md-" + Math.floor(12 / wordLists.length) + " outside");
    var select = $("<select>");
    select.attr("name", ("drum-select-" + i));
    outerCol.append(select);
    for (var j = 0; j < num; j++) {
      var word = wordLists[i][j].charAt(0).toUpperCase() + wordLists[i][j].substring(1);
      var option = $("<option>");
      option.attr("value", word);
      option.text(word);
      select.append(option);
    }
    $("#selector-row").append(outerCol);
    select.drum({panelCount: num});
  }
};

// function clickDrag() {
//   var isDragging = false;
//   $("li")
//   .mousedown(function() {
//       isDragging = false;
//   })
//   .mousemove(function() {
//       isDragging = true;
//    })
//   .mouseup(function() {
//     var wasDragging = isDragging;
//     isDragging = false;
//     if (wasDragging) {
//       setTimeout(function() { // Timeout adds a one(1) milisecond delay to this function executing
//         $('li').filter(":nth-child(1)").addClass("primary-option"); // Selects only the first element of the list
//         $('li').not(":nth-child(1)").removeClass("primary-option"); // Selects everything but the first element of the list
//       }, 1);
//     };
//   });
// }
