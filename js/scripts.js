var wordOutput = function() {
  var wordGroup = ["Forest"];
  var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
  return pickedWord;
}

function hangMan(userGuessLetter, wordOutput) {
  this.counter;
  this.guessedLetters = [];
  this.userGuessLetter = userGuessLetter;
  this.wordOutput = wordOutput;
  this.puzzleNotShowing = [];
  this.htmlOutput;
}

// hangMan.prototype.correctGuess = function() {
// var guessLetterResult = false;
//
//   for (var i = 0; i < this.wordOutput.length; i++) {
//     if (this.wordOutput.indexOf(this.userGuessLetter) > -1) {
//       guessLetterResult = true;
//     };
//   };
//   return guessLetterResult;
// };

hangMan.prototype.counter = function() {

var wrongCounter = 0;
    if (this.wordOutput.indexOf(this.userGuessLetter) > -1) {
    wrongCounter = wrongCounter;
    }
    else {
      wrongCounter = wrongCounter + 1;
    }
  return wrongCounter;
};

hangMan.prototype.displayUnderscore = function() {
  for (var i = 0; i < this.wordOutput.length; i++) {
    this.puzzleNotShowing.push('_')
  }
  return this.puzzleNotShowing;
}


hangMan.prototype.replaceUnderscore = function() {
  for (var i = 0; i < this.wordOutput.length; i++) {
    if (this.wordOutput[i].indexOf(this.userGuessLetter) > -1) {
      this.puzzleNotShowing[i]=(this.userGuessLetter);
    } else if (this.wordOutput[i].indexOf("_")) {
      this.puzzleNotShowing[i]=('_');
    } else if (this.wordOutput[i].indexOf(this.guessedLetters) > -1) {
      this.puzzleNotShowing[i] = this.puzzleNotShowing[i].val();
    }
    else {
      this.puzzleNotShowing[i] = this.puzzleNotShowing[i].val();
    }
  }
  return this.puzzleNotShowing;
}

hangMan.prototype.inputCollector = function() {
  this.guessedLetters.push(this.userGuessLetter);
  return this.guessedLetters;
}

// hangMan.prototype.counter = function() {
//   var wrongCounter = this.counter;
//   if (this.wrongGuess === false); {
//     wrongCounter = wrongCounter + 1;
//   }
//   return wrongCounter;
// }

$(document).ready(function() {

$("form#new-game").submit(function(event) {
  var userGuessLetter = $("input#letter").val();
  console.log(userGuessLetter);
  var newGame = hangMan(userGuessLetter, wordOutput);
  event.preventDefault();
  });



});
