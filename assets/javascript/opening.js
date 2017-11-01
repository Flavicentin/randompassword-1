const opening = {
  main: $("#main"),
  letter: $("<div>*</div>"),
  _title: 'random password',
  //returns _title in upper case
  get title() {
    return this._title.toUpperCase();
  },
  _titleArray: null,
  get titleArray() {
    this._titleArray = this.title.split('');
    return this._titleArray;
  },

  makeTitleElm() {
    let newContainer = $('<div class="letter-container"></div>');
    this.titleArray.forEach(function(arrayLetter, index){
      let newDiv = $(`<div class="array-letter" id="${index}">${arrayLetter}</div>`);
      newContainer.append(newDiv);
    });
    return newContainer;
  },

};

export {opening};

//PLACE CODE BELOW IN .READY FOR OPENING ANIMATION

// opening.main.append(opening.makeTitleElm());
// for(let i = 0; i < opening.titleArray.length; i++) {
//   let speed = (Math.random() * 2000);
//   $(`#${i}`).delay(speed).velocity({top: '50%'}, 'slow');
// };
