var wordOutput = function() {
  var wordGroup = ["Forest","Mailman","Film"];
  var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
  console.log(pickedWord);
  return pickedWord;
}

function hangMan(counter,userGuessLetter, wordOutput) {
  this.counter = counter;
  this.userGuessLetter = userGuessLetter;
  this.wordOutput = wordOutput;
  
}

hangMan.prototype.correctGuess = function() {

  for (var i = 0; i < wordOutput.length; i++) {

    if (wordOutput.indexOf(userGuessLetter) > -1) {
      return true;
    }
  }
}

// hangMan.prototype.pickWord = function() {
//
//   var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
//   console.log(pickedWord);
//   return pickedWord;
// }
//
// hangMan.prototype.pickSplitWord = function() {
//   var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
//   var splitWord = pickedWord;
//   console.log(splitWord);
//   this.splitWord = splitWord.split('');
//   return splitWord.split('');
// }


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
