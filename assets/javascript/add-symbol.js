import {selectedWords} from "./word-select.js";

//make password with draggable symbol and caps
const addSymbol = () => {
  let passwordContainer = $(`<div id="password-container"></div>`);
  $("#main").append(passwordContainer);

  let sortBox = $(`<div class="sort-box sortable"></div>`);
  passwordContainer.append(sortBox);

  //make divs for each letter in chosen words
  for ( let i = 0; i < selectedWords.chosenString.length; i ++) {
    let newLetterElem = $(`<div class="array-letter sort-disable"></div>`);
    newLetterElem.text(selectedWords.chosenString[i]);
    sortBox.append(newLetterElem);
  };
  //make sortBox sortable
  $('.sortable').sortable({cancel: ".sort-disable"});

  //make and insert random symbol into random spot
  let chosenLetters = $('.array-letter');
  const randomSpot = () => {
    return Math.floor(Math.random() * chosenLetters.length);
  };

  let autoSymbol = $(`<div class='symbol-insert'>${selectedWords.defaultSymbol}</div>`);
  //insert random symbol
  $(chosenLetters[randomSpot()]).after(autoSymbol);
  //change random letter to upper case
  $(chosenLetters[randomSpot()]).text(function() {
    $(this).text($(this).text().toUpperCase());
    $(this).addClass('upper-case-letter');
  });

  //add event listener for letter capitalization
  $('.array-letter').on('click', function() {
    let clickedLetter = $(this).text();
    //check for upper case
    if (clickedLetter === clickedLetter.toLowerCase()) {
      // if upper case
      $(this).text($(this).text().toUpperCase());
      $(this).addClass('upper-case-letter bounce');
    } else {
      $(this).text($(this).text().toLowerCase());
      $(this).removeClass('upper-case-letter bounce');
    };
  });
  symbolListener();
  copyToClipboard();

};

const copyToClipboard = () => {
  //make copy button
  let copyButton = $(`<div class="copy-to-clipboard"></div>`);
  $('#main').append(copyButton);

  //animate in copy button
  copyButton.delay(2000).velocity({top: '65%'}, 1000);

  //add event listenr to button to copy to clipboard
  $('.copy-to-clipboard').on('click', function() {
    //check mark
    let checkMark = $(`<div class="check-mark"></div>`);
    copyButton.append(checkMark);
    checkMark.velocity({left: '+=7rem'}, 500);
    checkMark.delay(800).velocity({opacity: '0'}, 500);
    setTimeout(function(){
      checkMark.remove();
    }, 1800);

    //INSERT COPY TO CLIPBOARD LOGIC
    console.log($('.sort-box').children().text());

    let finalPassword = $('.sort-box').children().text();
    new Clipboard('.copy-to-clipboard', {
    text: function(trigger) {
        return finalPassword;
      }
    });
  });
};

const symbolListener = () => {
  //list of symbols and numbers to choose from
  const symbols = ['!','@','#','$','%','^','&','*','_','(',')','-','0','1','2','3','4','5','6','7','8','9'];

  // add event listener for click on symbol
  $('#main').on('click','.symbol-insert', function() {
    //remove symbol group if already existing
    $(".symbol-select").remove();
    let clickedSymbol = $(this);
    clickedSymbol.removeClass('wobble');

    // make and animate helper text to select new symbol
    $("#main").append(`<div class="symbol-select"></div>`);
    symbols.forEach(function(currentSymbol){
      let newSymbolElem = $(`<div class="symbol-select-letter">${currentSymbol}</div>`);
      $('.symbol-select').append(newSymbolElem);
    });
    //make 'add' button
    let addButton = $(`<div id="add-button" class="add-symbol"></div>`);
    $('.symbol-select').append(addButton);

    //add button event listener
    addButton.on('click', function() {
      $(".symbol-select").velocity({top: '50%'},600);

      //make and insert random symbol into random spot
      let chosenLetters = $('.array-letter');
      const randomSpot = () => {
        return Math.floor(Math.random() * chosenLetters.length);
      };

      let autoSymbol = $(`<div class='symbol-insert wobble'>${selectedWords.defaultSymbol}</div>`);
      //insert random symbol
      $(chosenLetters[randomSpot()]).after(autoSymbol);

      //remove select symbols
      setTimeout(function(){
        $(".symbol-select").remove();
        $('.symbol-insert').removeClass('wobble');
      }, 600);
    });

    //annimate in symbols
    $(".symbol-select").velocity({top: '40%'},700);

    //when new symbol is clicked replace symbol in password
    $('.symbol-select-letter').on('click', function(){
      clickedSymbol.text($(this).text());
      $(".symbol-select").velocity({top: '50%'},600);
      setTimeout(function(){
        $(".symbol-select").remove();
        clickedSymbol.addClass('wobble');
        setTimeout(function() {
          clickedSymbol.removeClass('wobble');
        }, 600);
      }, 600);
    });

  });
};



export {addSymbol};
