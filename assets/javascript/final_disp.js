function disp(numDrums){
  //var dispStr = $('select[name=left-column]').val() + $('select[name=mid-column]').val() + $('select[name=right-column]').val();
  var dispStr = "";
  for (var i = 0; i < numDrums; i++) {
  	dispStr += $("select[name=drum-select-" + i).val();
  }
  var dispArr = dispStr.split("");

  //console.log(dispArr);
  $('#sortable3').children().remove();
  for (var i = 0; i < dispArr.length; i++) {
    $('#sortable3').append('<li class="ui-state-highlight draggable-letter">' + dispArr[i] + '</li>');
  }
  var numChar = $('#sortable3').children().length;
  $('.plength').text("Your password is " + numChar + " characters");

  var sortableLetters = $('.draggable-letter');
  for (var i = 0; i < sortableLetters.length; i++) {
  	Hammer(sortableLetters[i]).on('doubletap', function(event) {
  	  var letter = $(this).text();
      if (letter === letter.toUpperCase()) {
      	$(this).text(letter.toLowerCase());
      } else {
        $(this).text(letter.toUpperCase());
      }
  	});
  }

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
