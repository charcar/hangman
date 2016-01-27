function Word(wordInput) {
  this.wordInput = wordInput;
  };

function selectWord(randomWord) {
  var randomWords = ["Pencil","Forest","Skyline","Neptune"];
  var randomWord = randomWords[Math.floor(Math.random()* randomWords.length)];
  console.log(randomWords);
  console.log(randomWord);
  return randomWord;
}

// $(document).ready(function() {
//
// $("form#new-ticket").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
