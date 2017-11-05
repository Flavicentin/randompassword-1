const selectedWords = {

  chosen: [],
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
  },

  randomSets: [
    ['worda1', 'word2xxxxx', 'word3', 'word4', 'word5', 'word6', 'word7'],
    ['wordb1', 'word2xxxxx', 'word3', 'word4', 'word5', 'word6', 'word7'],
    ['wordc1', 'word2xxxxx', 'word3', 'word4', 'word5', 'word6', 'word7']
  ],

}; //end selectedWords object



const wordsNextButton = () => {
  $("#main").append(`<div id="words-next" class="words-next"></div>`);
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
  wordsNextButton();
};



export {selectedWords, makeListContainer};
