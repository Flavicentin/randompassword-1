const passLength = {
  min: 8,
  max: 29,

  _fMin: 9,
  _fMax: 30,
  get fMin(){
    return this._fMin;
  },
  set fMin(input){
    this.min = input - 1;
    this._fMin = input;
  },
  get fMax(){
    return this._fMax;
  },
  set fMax(input){
    this.max = input - 1;
    this._fMax = input;
  },
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
  const sliderContent = (`
    <div id="resizable" class="red-slider" style="opacity: 0">
      <div id="min-handle-box" class="ui-resizable-handle ui-resizable-w">
        <div class="min-handle-group">
          <div id="min-handle-text" class="min-handle-text">9</div>
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
    let minValue = 9;
    //defines number of posible password lengths
    let cellQty = 22;
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
        let cellSize = parentWidth / (cellQty);

        //min or max move logic
        if(posChange === 0 && sizeChange !== 0) {
          //change max value
          maxValue = maxValue + (-sizeChange / cellSize);
          passLength.fMax = Math.round(maxValue);
          $("#max-handle-text").text(passLength.fMax);
          console.log(passLength.fMax, passLength.max);

        } else if (posChange !== 0 && sizeChange !== 0){
          //change min value
          minValue = minValue + (-posChange / cellSize);
          passLength.fMin = Math.round(minValue);
          $("#min-handle-text").text(passLength.fMin);
          console.log(passLength.fMin, passLength.min);
        };
      },
    });

  };

const noteAnimation = () => {

  //next button appears on mouseup
  $("#main").append(`<div id="slider-next" class="slider-next"></div>`);
  minMaxListener('min');
  minMaxListener('max');

  //make choose length notification
  setTimeout(function() {
    $("#main").append(`<div class="length-notification">choose password length</div>`);
    //animate choose length notification
    $(".length-notification").velocity({top: '50%'}, 1000);
    $(".length-notification").delay(1000).velocity({top: '80%'}, 1000);
    setTimeout(function(){
      $(".length-notification").remove();
    }, 3000);
  }, 5000);

  //length helper notification
  $("#main").append(`<div class="length-note-helper">slide the 'min' and 'max' arrows, then press next</div>`);
  $(".length-note-helper").delay(11000).velocity({top: '60%'},1000);

  //hide helper on mousedown
  $(document).on('mousedown', function(){
    $(".length-note-helper").velocity({top: "50%"}, 800);
    setTimeout(function(){$(".length-note-helper").remove()}, 800);
  });
}; //end of noteAnimation

const removeFancySlider = () => {
  $(".red-slider").velocity({left: '-150%'}, 1000);
};

const minMaxListener = (minOrMax) => {
  $(`.${minOrMax}-handle`).on('mousedown', function(){
    $(document).on('mouseup', function() {
      $(".slider-next").velocity({opacity: '1'}, 1000);
    });


    //next button event listener
    $("#slider-next").on('click', function(){
      $(".slider-next").velocity({opacity: '0'}, 1000);
      console.log("min,max",passLength.min, passLength.max);
      setTimeout(function() {
        $("#slider-next").remove();
      }, 1001);

      //remove slider
        removeFancySlider();
    });

    //remove this listener
    $(`.min-handle`).off();
    $(`.max-handle`).off();
  });
};



export {passLength, sliderStart, makeFancySlider, fancySlider, noteAnimation};
