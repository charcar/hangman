describe('Word', function() {
  it("will provide functionality for the puzzle word.", function() {
    var testWord = new Word ("input");
    expect(testWord.wordInput).to.equal("input");
  });
  it("will return a random word from an array.", function() {
    var testWord = new Word ();
    expect(testWord.pickRandomWord).to.equal("Pencil");
  })
});


// describe('Word', function() {
//   it("will provide a word for the game.", function() {
//     var testWord = new Word ("Pencil");
//     expect(testWord.wordInput).to.equal("Pencil");
//   });
//   it("will return a random word from the array of words.", function() {
//     var testWord = new Word ("");
//     expect(testWord.generateWord).to.equal("Pencil");
//   });
//   it("will split the selected random word into an array of separate letters.", function() {
//     expect(splitWord(generateWord)).to.eql(["P","e","n","c","i","l"]);
//   });
// });
