import {disp, finalStr, Str} from './final_disp.js';
import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";
import {passLength, sliderStart, fancySlider, makeFancySlider} from './length-slider.js';

var wordLists = [];

$( document ).ready(function() {
  //activate lenght selection slider
  sliderStart();

  $( "#sortable1, #sortable2, #sortable3" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

  var numWordOptions = 16;
  setDrumWords(passLength.min, passLength.max, numWordOptions);

  $('.carousel').carousel('pause');

  $('.carousel-control-next').on('click', function() {
    disp(wordLists.length);

    if($('.active').attr('id') === 'length-selector') {
      setDrumWords(passLength.min, passLength.max, numWordOptions);
    }
  });

  // $('.btn').on('click', function() {
  //   finalStr();
  // });

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
  };
// Copy finished password to clipboard
  $('#copy-clip').on('click', function() {
    finalStr();
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    dummy.setAttribute('value', Str);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy)
  });

// Character counter
  $('body').mouseup(function(){
    var numChar = $('#sortable3').children().length;
    $('.plength').text("Your password is " + numChar + " characters");
  });

// Code for slider
  // $('#center-box').html(makeFancySlider());
  // fancySlider();

};
