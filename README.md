# Random Password

### [Live Website: https://jessehgerard.github.io/randompassword/](https://jessehgerard.github.io/randompassword/)

created by [Jesse Gerard](http://jessegerard.com/), [Joseph Schefer](https://github.com/jes3rk), [Stuart Lindstrom](https://github.com/the-realest-stu)

#### key libraries and tech <br>

Velocity <br>
jQuery UI <br>
jQuery <br>
Google Fonts <br>
Clipboard.js <br>
Animate.css <br>
Git / Github <br>
Javascript ES6 <br>

### about this project
We all make trade offs with our passwords between ease of use and security. The goal of this project is to make it easier to create and use unique passwords for every new login.
<br><br>
The method for making strong passwords using randomly selected words and inserting a random symbol was inspired by this [computerfile video](https://www.youtube.com/watch?v=3NjQ9b3pgIg).
<br><br>
This project was presented at a Hack and Tell event. I took a quick poll of a room full of developers and hackers of who uses the same password for everything. And, a surprising number of hands went up. Everyone needs a better way to create and handle online security!

### code
This frontend project was completed in a week with a small team. ES6 modules were used so that contributors could work on it simultaneously without merge conflicts. Those modules come together easily: using some of the principles of functional programing the app executes using only a few easy to interpret functions in the [main js](#main.js) file.
<br>
The [intro animation](#intro-animation) is a nice visual metaphor for the random-ness of the password that will be generated.

#### intro animation
By assigning a random duration to each letter in the intro animation, it enables a unique visual every time the page is loaded.
<br><br>
code below is quoted from: randompassword/assets/javascript/opening.js

```
const startOpening = () => {
  opening.main.append(opening.makeTitleElm());
  for(let i = 0; i < opening.titleArray.length; i++) {
    let speed = (Math.random() * 2000);
    $(`#${i}`).delay(speed).velocity({top: '57%'}, 'slow');
  };
  setTimeout(function(){
    for(let i = 0; i < opening.titleArray.length; i++) {
      let speed = (Math.random() * 1000);
      $(`#${i}`).delay(speed).velocity({top: '110%'}, 'slow');
    };
};
```

#### main.js
code below is quoted from: randompassword/assets/javascript/main.js
```
//make center box in main
let centerBox = $(`<div id="center-box" class="center-box">`);

//start opening animation
startOpening()

//make fancy slider (transparent on start)
centerBox.html(makeFancySlider());
$("#main").append(centerBox);

//start slider functionality, animate slider fade in
fancySlider();

//animates notifications and adds next button
noteAnimation();
  //noteAnimation's next button triggers removal of slider

//animate in slider
$(".red-slider").delay(4000).velocity({opacity: 1}, 2000);



//event listener for slider-next click, triggers word select
$('#slider-next').on("click", function(){
  selectedWords.randomSets = getWordLists(passLength.min, passLength.max, 7);
  setTimeout(function(){

    //makes lists of random words
    makeListContainer();

    // make word-box(s) draggable
    $(".word-box").draggable({containment: 'parent'});
    selectedWords.test();

    //event lister, select words in word-box
    $(".word-box").on('mouseup', function() {
      selectedWords.test();
      //fade in next button
      $(".words-next").velocity({opacity: '1'}, 1000);
    });

  //animate in word list
  $('#list-container').velocity({left: '50%'}, 1000);
  $('#gradient-mask').velocity({left: '50%'}, 1000);

}, 1100)});

//add words-next event listener,
$('#main').on("click", '#words-next', function(){
  setTimeout(function(){

    //make and animate random symbol interface
    addSymbol();
    $('#password-container').velocity({left: '50%'},1000);

  }, 1001);
});
```
