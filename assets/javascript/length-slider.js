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

const makeFancySlider = () => {
  const sliderContent = (`<div id="resizable" class="red-slider">
    <div id="min-handle-box" class="ui-resizable-handle ui-resizable-w">
      <div class="min-handle-group">
        <div id="min-handle-text" class="min-handle-text">8</div>
        <div class="min-handle"></div>
      </div>
    </div>
    <div id="max-handle-box" class="ui-resizable-handle ui-resizable-e">
      <div class="max-handle-group">
        <div class="max-handle"></div>
        <div id="max-handle-text" class="max-handle-text">30</div>
      </div>
    </div>
  </div>`);
  return sliderContent;
};




const fancySlider = () => {
    let parentHeight = $("#center-box").height();
    let parentWidth = $("#center-box").width();
    let minHandle = $("#min-handle-box");
    let maxHandle = $("#max-handle-box");
    let minValue = 8;
    //defines number of posible password lengths
    let cellQty = 24;
    let maxValue = 30;
    $( "#resizable" ).resizable({
      handles: {minHandle, maxHandle},
      containment: "#center-box",
      maxHeight: parentHeight,
      maxWidth: parentWidth,
      minHeight: parentHeight,
      grid: (parentWidth / cellQty),
      //change min length and max length values on resize event
      stop: function( event, ui ) {
        let sizeChange = ui.originalSize.width - ui.size.width;
        let posChange = ui.originalPosition.left - ui.position.left;
        let cellSize = parentWidth / (cellQty - 1);

        //min or max move logic
        if(posChange === 0 && sizeChange !== 0) {
          //change max value
          maxValue = maxValue + (-sizeChange / cellSize);
          console.log((-sizeChange / cellSize));
          passLength.max = Math.round(maxValue);
          $("#max-handle-text").text(passLength.max);

        } else if (posChange !== 0 && sizeChange !== 0){
          //change min value
          minValue = minValue + (-posChange / cellSize);
          console.log((-posChange / cellSize));
          passLength.min = Math.round(minValue);
          $("#min-handle-text").text(passLength.min);
        };
      },
    });

  };

$("#center-box").html(makeFancySlider());
fancySlider();




export {passLength, sliderStart};
