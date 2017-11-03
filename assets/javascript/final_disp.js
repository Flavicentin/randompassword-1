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

var Str;

function finalStr() {
  var finArr = []
  $('#sortable3').children().each(function() {
    finArr.push($(this).text());
  });
  Str = finArr.join("");
  console.log(Str);
  return Str;
};

export {disp, finalStr, Str};
