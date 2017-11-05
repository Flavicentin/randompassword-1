const selectedWords = {

  //words chosen by word slect screen
  chosen: ['hello','random','world'],

  get chosenString() {
    return this.chosen.join('');
  },

  get chosenArray() {
    return this.chosenString.split('');
  },

  get defaultSymbol() {
    let symbols = ['!','@','#','$','%','%','^','&','&','*'];
    //return random symbol from symbols
    return symbols[(Math.floor(Math.random() * symbols.length))];
  },

  //selects words in center of window, changes text to black
  test() {
    $('.black-text').removeClass('black-text');
    this.chosen = [];
    //get center height
    let winHeight = window.innerHeight;
    let winMid = winHeight / 2;
    //tests each random-word for position on center height
    $(".random-word").each( function(index, element,) {
      let elemPos = $(this).offset();
      let elemBottom = elemPos.top + $(this).height();
      //is elment in the middle of the window?
      if (elemPos.top <= winMid && elemBottom > winMid) {
        //if true make text black & add to selectedWords.chosen
        $(this).addClass('black-text');
        let addToChosen = $(this).text();
        selectedWords.chosen.push(addToChosen);
      };
    });
    console.log(this.chosen);
  },

  randomSets: [
    ['worda1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7'],
    ['wordb1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7'],
    ['wordc1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7']
  ],

}; //end selectedWords object


const wordsNextButton = () => {
  //make words-next button
  $("#main").append(`<div id="words-next" class="words-next"></div>`);

  //add remove words-next event listener
  $("#words-next").on('click', function(){
    $("#words-next").velocity({opacity: '0'}, 1000);
    setTimeout(function() {
      $("#words-next").remove();
    }, 1001);

    //animate out word list
    $('#list-container').velocity({left: '-150%'}, 1000);
    $('#gradient-mask').velocity({left: '-150%'}, 1000);
    //remove word list
    setTimeout(function() {
      $('#list-container').remove();
      $('#gradient-mask').remove();
    }, 1001);
  });
};


const makeListContainer = () => {
  //make list-container
  let listContainer = $(`<div id="list-container"></div>`);
  $("#main").append(listContainer);

  //make gradient-mask
  let gradientMask = $(`<div id="gradient-mask"></div>`);
  $("#main").append(gradientMask);

  //place words in lists in list-container
  for (let i = 0; i < selectedWords.randomSets.length; i++) {
    // define and append drag-container and word-box
    let dragContainer = $(`<div class="drag-container"></div>`);
    let wordBox = $(`<div class="word-box"></div>`)
    $('#list-container').append(dragContainer);
    dragContainer.append(wordBox);

    //place randomSets words in word-box(s)
    selectedWords.randomSets[i].forEach(function(word) {
      let randomWord = $(`<div class="random-word">${word}</div>`);
      wordBox.append(randomWord);
    });
  };
  wordsNoteHelper();
  wordsNextButton();
};

const wordsNoteHelper = () => {
  //words helper notification
  $("#main").append(`<div class="words-note-helper">drag words into the grey box, then press next</div>`);
  $(".words-note-helper").delay(6000).velocity({bottom: '10%'},1000);

  //hide helper on mousedown
  $(document).on('mousedown', function(){
    $(".words-note-helper").velocity({bottom: '-10%'}, 800);
    setTimeout(function(){$(".words-note-helper").remove()}, 800);
  });
};




export {selectedWords, makeListContainer};
