var wordOutput = function() {
  var wordGroup = ["Forest","Mailman","Film"];
  var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
  return pickedWord;
}

function hangMan(userGuessLetter, wordOutput) {
  this.counter = 0;
  this.guessedLetters = [];
  this.userGuessLetter = userGuessLetter;
  this.wordOutput = wordOutput;
  this.puzzleNotShowing = [];
  this.puzzleYesShowing = [];
  this.htmlOutput;
}

hangMan.prototype.correctGuess = function() {
var guessLetterResult = false;

  for (var i = 0; i < this.wordOutput.length; i++) {
    if (this.wordOutput.indexOf(this.userGuessLetter) > -1) {
      guessLetterResult = true;
    };
  };
  return guessLetterResult;
};

hangMan.prototype.wrongGuess = function() {
var guessLetterResult = true;

  for (var i = 0; i < this.wordOutput.length; i++) {
    if (this.wordOutput.indexOf(this.userGuessLetter) > -1) {
      guessLetterResult = false;
    };
  };

  

  return guessLetterResult;
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

hangMan.prototype.counter = function() {
  var wrongCounter = this.counter;
  if (this.wrongGuess === false); {
    wrongCounter = wrongCounter + 1;
  }
  return wrongCounter;
}

// $(document).ready(function() {
//
// $("form#new-ticket").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
