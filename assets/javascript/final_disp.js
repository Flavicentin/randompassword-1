function disp(){
  var dispArr = [$('select[name=left-column]').val(), $('select[name=mid-column]').val(), $('select[name=right-column]').val()];
  var dispStr = dispArr.join("");
  console.log(dispStr);
  for (var i = 0; i < dispStr.length; i++) {
    $('#sortable3').html('<li class="ui-state-highlight">' + dispStr[i] + '</li>');

  };
};

export {disp};
