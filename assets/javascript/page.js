import {disp, finalStr} from './final_disp.js';
import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";
import {passLength, sliderStart} from './length-slider.js';

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

// For these, panelCount = num of word options + 1
  var numWordOptions = 8;
  var wordLists = getWordLists(8, 16, numWordOptions);

  for (var i = 0; i < wordLists.length; i++) {
    var outerCol = $("<div>");
    outerCol.addClass("col-md-" + Math.floor(12 / wordLists.length) + " outside");
    var select = $("<select>");
    select.attr("name", ("drum-select-" + i));
    outerCol.append(select);
    for (var j = 0; j < numWordOptions; j++) {
      var word = wordLists[i][j].charAt(0).toUpperCase() + wordLists[i][j].substring(1);
      var option = $("<option>");
      option.attr("value", word);
      option.text(word);
      select.append(option);
      //select.append($("<option>").attr("value", word).text(word));
    }
    $("#selector-row").append(outerCol);
    select.drum({panelCount: numWordOptions});
  }

  //$("#left-col").drum({ panelCount: numWordOptions });
  //$("#mid-col").drum({ panelCount: numWordOptions });
  //$("#right-col").drum({ panelCount: numWordOptions });

  $('.carousel').carousel('pause');

  $('#confirm-2').on('click', function() {
    disp(wordLists.length);
  });

  $('#confirm-3').on('click', function() {
    finalStr();
  });

    // console.log(dispStr);
    // console.log($('select[name=left-column]').val());
    // console.log($('select[name=mid-column]').val());
    // console.log($('select[name=right-column]').val());

});



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
