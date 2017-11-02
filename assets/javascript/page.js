$( document ).ready(function() {
  // $( ".sortable" ).sortable();
  // $( ".sortable" ).disableSelection();
  // $('li').filter(":nth-child(1)").addClass("primary-option"); // Selects only the first element of the word lists
  // clickDrag();
  $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

// For these, panelCount = num of word options + 1
  $("#left-col").drum({ panelCount: 8 });
  $("#mid-col").drum({ panelCount: 8 });
  $("#right-col").drum({ panelCount: 8 });

  $('.carousel').carousel('pause');

  $('#confirm-2').on('click', function() {
    console.log($('select[name=left-column]').val());
    console.log($('select[name=mid-column]').val());
    console.log($('select[name=right-column]').val());
  });
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

// Arrays of IDS

var leftColId = ["left1", "left2", "left3", "left4", "left5", "left6", "left7"];
var midColId = ["mid1", "mid2", "mid3", "mid4", "mid5","mid6", "mid7"];
var rightColId = ["right1", "right2", "right3", "right4", "right5", "right6", "right7"];
