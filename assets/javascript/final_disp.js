function disp(){
  var dispStr = $('select[name=left-column]').val() + $('select[name=mid-column]').val() + $('select[name=right-column]').val();
  var dispArr = dispStr.split("");
  console.log(dispArr);
  $('#sortable3').html('<li class="ui-state-highlight">' + dispArr[0] + '</li>');
  for (var i = 1; i < dispArr.length; i++) {
    $('#sortable3').append('<li class="ui-state-highlight">' + dispArr[i] + '</li>');
  };
};

function finalStr() {
  $('#sortable3').children().contents().each(function() {
    console.log($(this).text);
    }
});

}

export {disp, finalStr};
