describe('wordOutput', function() {
  it("will provide a random word from an array of words.", function () {
    expect(wordOutput()).to.equal("Forest");
  });
});

describe('hangMan', function() {
  it("will provide properties to store game values.", function() {
    var testGuess = new hangMan ("a","Forest");
    expect(testGuess.counter).to.equal();
    expect(testGuess.guessedLetters).to.eql(['a']);
    expect(testGuess.userGuessLetter).to.equal("a");
    expect(testGuess.wordOutput).to.equal("Forest");
    expect(testGuess.htmlOutput).to.equal();
  });
  it("will determine if the user guess letter is in the word.", function() {
    var testGuess = new hangMan ("x","Forest");
    expect(testGuess.correctGuess()).to.equal(false);
  });
  it("will determine if the user guess letter is NOT in the word.", function() {
    var testGuess = new hangMan ("r","Forest");
    expect(testGuess.wrongGuess()).to.equal(false);
  });
  it("will provide an array for underscore display.", function() {
    var testGuess = new hangMan ("f","Forest");
    expect(testGuess.displayUnderscore()).to.eql(['_', '_', '_', '_', '_', '_']);
  });
  it("will provide an array to store user letter guesses.", function() {
    var testGuess = new hangMan ("e", "Forest");
    expect(testGuess.replaceUnderscore()).to.eql(['F','_','_','_','_','_']);
  });
});
//
// describe('showWordHtml', function() {
//   it("will provide properties to store values that display arrays.", function() {
//     var testGuess = new showWordHtml (["_ _ _ _ _ _"],["f o r e s t"]);
//     expect(testGuess.displayUnderscore).to.eql(["_ _ _ _ _ _"]);
//     expect(testGuess.displayLetters).to.eql(["f o r e s t"]);
//   });
// });
