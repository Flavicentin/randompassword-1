import {disp, finalStr, Str} from './final_disp.js';
import {getWordsOfLength, getXWordsFromList, getWordLists} from "./generator.js";
import {passLength, sliderStart, fancySlider, makeFancySlider} from './length-slider.js';

var wordLists = [];

$( document ).ready(function() {
  //activate lenght selection slider
  sliderStart();
  
  $( "#sortable1, #sortable2" ).sortable({
    connectWith: ".connectedSortable",
    receive: function( event, ui ) {
      if (ui.item != null) {
        ui.item.remove();
      }
      if (ui.helper != null) {
        ui.helper.remove();
      }
      if (ui.placeholder != null) {
        ui.placeholder.remove();
      }
    },
    //accept: "",
    helper: function() {
      var instance = $(this).sortable("instance");
      var ret = $('<li>');
      ret.addClass("ui-state-default");
      ret.text(instance.currentItem.text());
      return ret;
    },
    duplicate: true
  }).disableSelection();
  $( "#sortable3" ).sortable({
    connectWith: ".connectedSortable",
    accept: "#sortable1, #sortable2",
    cancel: ".draggable-letter"
  }).disableSelection();

  var numWordOptions = 16;
  setDrumWords(passLength.min, passLength.max, numWordOptions);

  $('.carousel').carousel('pause');

  $('body').on('click touch', function() {
    disp(wordLists.length);

    if($('.active').attr('id') === 'length-selector') {
      setDrumWords(passLength.min, passLength.max, numWordOptions);
    }
  });

  // $('.btn').on('click', function() {
  //   finalStr();
  // });

  $(document).on('dblclick', '.draggable-letter', function() {
    var letter = $(this).text();
    if (letter === letter.toUpperCase()) {
      $(this).text(letter.toLowerCase());
    } else {
      $(this).text(letter.toUpperCase());
    }
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
  $('body').on('click', function(){
    var numChar = $('#sortable3').children().length;
    $('.plength').text("Your password is " + numChar + " characters");
  });

// Code for slider
  // $('#center-box').html(makeFancySlider());
  // fancySlider();

};
