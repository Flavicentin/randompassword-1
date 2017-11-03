const passLength = {
  min: 12,
  max: 18,
};

function sliderStart(){
   $( "#slider-range" ).slider({
     range: true,
     min: 8,
     max: 30,
     values: [ passLength.min, passLength.max ],
     slide: function( event, ui ) {
       $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
       passLength.min = ui.values[ 0 ];
       passLength.max = ui.values[ 1 ];
     }
   });
   $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) );
};

$( function() {
    let parentHeight = $("#center-box").height();
    let parentWidth = $("#center-box").width();
    let minHandle = $("#min-handle-box");
    let maxHandle = $("#max-handle-box");
    $( "#resizable" ).resizable({
      handles: {minHandle, maxHandle},
      containment: "#center-box",
      maxHeight: parentHeight,
      maxWidth: parentWidth,
      minHeight: parentHeight,
      grid: (parentWidth / 22),

    });
  } );




sliderStart();


export {passLength, sliderStart};
