const passLength = {
  min: null,
  max: null,
};

function slider(){
   $( "#slider-range" ).slider({
     range: true,
     min: 8,
     max: 30,
     values: [ 12, 18 ],
     slide: function( event, ui ) {
       $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
       passLength.min = ui.values[ 0 ];
       passLength.max = ui.values[ 1 ];
       console.log(passLength.min);
     }
   });
   $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) );

};

slider();
