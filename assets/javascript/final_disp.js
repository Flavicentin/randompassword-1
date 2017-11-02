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
  $('#popdisp').prepend('<div class="pop-up"></div>')
  var pop = $('.pop-up');
  pop.css({"position":"absolute", "top": "30%", "left":"45%", "height":"30%", "width":"40%", "background-color": "white", "border": "black 5px solid"});
  pop.append('<div class="pop-text"></div>');
  var ptxt = $('.pop-text');
  ptxt.text("Your secure password is:");
  ptxt.css();
};

export {disp, finalStr};
