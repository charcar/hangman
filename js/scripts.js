var wordGroup = ["Forest","Mailman","Film"];

function hangMan(gameWord) {
  this.gameWord = gameWord;
}

hangMan.prototype.pickWord = function() {

  var pickedWord = wordGroup[Math.floor(Math.random() * wordGroup.length)];
  console.log(pickedWord);
  return pickedWord;
}

hangMan.prototype.splitWord = function() {
  console.log();
  var splittedWord = this.splitWord;
  return splittedWord.split();


}

//
// pickRandomWord = function() {
//   var words = ["Pencil","Orange","Porcupine","Mailman"];
//   console.log(words);
//   return words[Math.floor(Math.random() * words.length)];
// };
//

// $(document).ready(function() {
//
// $("form#new-ticket").submit(function(event) {
//   event.preventDefault();
//
//   });
// });
