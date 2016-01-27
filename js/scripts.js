function Word(wordInput) {
  this.wordInput = wordInput;
  };

function generateWord() {
  var randomWords = ["Pencil","Pen","Paper"];
  var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  // console.log(randomWords);
  // console.log(randomWord);
  return randomWord;
}

function splitWord(generateWord) {
  var splitWord = this.generateWord();
  console.log(splitWord);
  return splitWord.split('');
  // console.log(splitWord);


}

// $(document).ready(function() {
//
// $("form#new-ticket").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
