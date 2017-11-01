$( document ).ready(function() {
  $( ".sortable" ).sortable();
  $( ".sortable" ).disableSelection();
  $('li').filter(":nth-child(1)").addClass("primary-option"); // Selects only the first element of the word lists
  clickDrag();
// For these, panelCount = num of Panels + 1
  $("#left-col").drum({ panelCount: 8 });
  $("#mid-col").drum({ panelCount: 8 });
  $("#right-col").drum({ panelCount: 8 });
});

function clickDrag() {
  var isDragging = false;
  $("li")
  .mousedown(function() {
      isDragging = false;
  })
  .mousemove(function() {
      isDragging = true;
   })
  .mouseup(function() {
    var wasDragging = isDragging;
    isDragging = false;
    if (wasDragging) {
      setTimeout(function() { // Timeout adds a one(1) milisecond delay to this function executing
        $('li').filter(":nth-child(1)").addClass("primary-option"); // Selects only the first element of the list
        $('li').not(":nth-child(1)").removeClass("primary-option"); // Selects everything but the first element of the list
      }, 1);
    };
  });
}

// Arrays of IDS

var leftColId = ["left1", "left2", "left3", "left4", "left5", "left6"];
var midColId = ["mid1", "mid2", "mid3", "mid4", "mid5","mid6"];
var rightColId = ["right1", "right2", "right3", "right4", "right5", "right6"];
