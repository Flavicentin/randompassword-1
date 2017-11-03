function disp(numDrums){
  //var dispStr = $('select[name=left-column]').val() + $('select[name=mid-column]').val() + $('select[name=right-column]').val();
  var dispStr = "";
  for (var i = 0; i < numDrums; i++) {
  	dispStr += $("select[name=drum-select-" + i).val();
  }
  var dispArr = dispStr.split("");
<<<<<<< HEAD
  console.log(dispArr);
  //$('#sortable3').html('<li class="ui-state-highlight draggable-letter">' + dispArr[0] + '</li>');
  for (var i = 0; i < dispArr.length; i++) {
  	var draggableLetter = $('<li>');
  	draggableLetter.addClass("ui-state-highlight draggable-letter");
    $('#sortable3').append('<li class="ui-state-highlight draggable-letter">' + dispArr[i] + '</li>');
=======

  $('#sortable3').html('<li class="ui-state-highlight">' + dispArr[0] + '</li>');
  for (var i = 1; i < dispArr.length; i++) {
    $('#sortable3').append('<li class="ui-state-highlight">' + dispArr[i] + '</li>');
>>>>>>> 10c243e14bfe8e9afceb6f5e1e29c057ecc779b9
  };
  var numChar = $('#sortable3').children().length;
  $('.plength').text("Your password is " + numChar + " characters");
};

var Str;

function finalStr() {
  var finArr = []
  $('#sortable3').children().each(function() {
    finArr.push($(this).text());
  });
  Str = finArr.join("");
  return Str;
};

export {disp, finalStr, Str};
