$( document ).ready(function() {
  $( ".sortable" ).sortable();
  $( ".sortable" ).disableSelection();
  $('li').filter(":nth-child(1)").addClass("primary-option"); // Selects only the first element of the word lists
  clickDrag();

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
