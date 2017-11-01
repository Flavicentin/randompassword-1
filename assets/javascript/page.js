$( document ).ready(function() {
  $( ".sortable" ).sortable();
  $( ".sortable" ).disableSelection();
  // $('li').first().css("background", "red");
  $(document).on('click', function(event) {
    console.log(event.target.nodeName);
  });

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
      setTimeout(function() {
        $('li').first().addClass("primary-option");
        $('li').not(":nth-child(1)").removeClass("primary-option");
      }, 1);
    }
  })


});

// $(document).on('mouseup', function() {
//   $('li').first().css("background", "red");
// })

// function ifFirst() {
//   if ($('li').first() === true) {
//     console.log(this);
//   };
// }
