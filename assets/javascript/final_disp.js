function disp(numDrums){
  //var dispStr = $('select[name=left-column]').val() + $('select[name=mid-column]').val() + $('select[name=right-column]').val();
  var dispStr = "";
  for (var i = 0; i < numDrums; i++) {
  	dispStr += $("select[name=drum-select-" + i).val();
  }
  var dispArr = dispStr.split("");
  console.log(dispArr);
  $('#sortable3').html('<li class="ui-state-highlight">' + dispArr[0] + '</li>');
  for (var i = 1; i < dispArr.length; i++) {
    $('#sortable3').append('<li class="ui-state-highlight">' + dispArr[i] + '</li>');
  };
};

function finalStr() {
  var finArr = []
  $('#sortable3').children().each(function() {
    finArr.push($(this).text());
  });
  var Str = finArr.join("");
  console.log(Str);
// Create and fill the password display box
  $('#popdisp').prepend('<div class="pop-up"></div>')
  var pop = $('.pop-up');
  pop.css({"position":"absolute", "top": "50%", "left":"50%", "height":"200px","margin-top": "-100px", "margin-left": "-150px", "width":"300px", "background-color": "white", "border": "black 5px solid", "opacity": "0"});
  pop.append('<div class="pop-text"></div>');
  var ptxt = $('.pop-text');
  ptxt.append('<p class="pop-text">Your secure password is:</p>');
  ptxt.css({"text-align": "ceneter", "width": "100%"});
  ptxt.append('<div class="pwordDisp"></div>');
  $('.pwordDisp').text(Str);
};

export {disp, finalStr};
