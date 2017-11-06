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
  });
};

export {addSymbol};
