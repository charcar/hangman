var wordOutput = function() {
  var wordGroup = ["Forest","Mailman","Film"];
  var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
  return pickedWord;
}

function hangMan(userGuessLetter, wordOutput) {
  this.counter;
  this.userGuessLetter = userGuessLetter;
  this.wordOutput = wordOutput;
  this.htmlOutput;

}

hangMan.prototype.correctGuess = function() {

var guessLetterResult = false;

  for (var i = 0; i < this.wordOutput.length; i++) {
    console.log(i);

    if (this.wordOutput.indexOf(this.userGuessLetter) > -1) {
      guessLetterResult = true;
      console.log(guessLetterResult);
    };
  };
  return guessLetterResult;
};

hangMan.prototype.wrongGuess = function() {

var guessLetterResult = true;

  for (var i = 0; i < this.wordOutput.length; i++) {
    console.log(i);

    if (this.wordOutput.indexOf(this.userGuessLetter) > -1) {
      guessLetterResult = false;
      console.log(guessLetterResult);
    };
  };
  return guessLetterResult;
};



function userInput(testInput, pickedWord) {



  // take testInput and loop through pickedWord searching for character match
  for (var i = 0; i < pickedWord.length; i++) {
    var letterCheck = testInput
    if (letterCheck === charAt[i]) {

      alert("correct.");
    }
  }
};




// $(document).ready(function() {
//
// $("form#new-ticket").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
