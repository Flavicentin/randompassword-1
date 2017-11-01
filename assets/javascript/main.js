
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {helloWorld, example} from "./export-example.js";

const opening = {
  main: $("#main"),
  letter: $("<div>*</div>"),
  _title: 'password generator',
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
    console.log(this.titleArray);
    let newContainer = $('<div>');
    this.titleArray.forEach(function(arrayLetter){
      let newDiv = $(`<div class="array-letter">${arrayLetter}</div>`);
      newContainer.append(newDiv);
    });
    return newContainer;
  },

};


$(document).ready(function(){

  opening.main.append(opening.makeTitleElm());


});
