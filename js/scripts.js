var Word;

function Word(wordInput) {
  this.wordInput = wordInput;
  };

Word.prototype.pickRandomWord() {
  var words = ["Pencil","Orange","Porcupine","Mailman"];
  return words[Math.floor(Math.random() * words.length)];
  };

//
// function generateWord() {
//   var randomWords = ["Pencil","Pen","Paper"];
//   var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
//   return randomWord;
// };
//
// function splitWord(generateWord) {
//   var splitWord = this.generateWord();
//   console.log(splitWord);
//   return splitWord.split('');
//   // console.log(splitWord);

//
// };

// $(document).ready(function() {
//
// $("form#new-ticket").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
