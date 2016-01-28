describe('wordOutput', function() {
  it("will provide a random word from an array of words.", function () {
    expect(wordOutput()).to.equal("Forest");
  });
});

describe('hangMan', function() {
  it("will provide properties to store game values.", function() {
    var testGuess = new hangMan ("a","Forest");
    expect(testGuess.counter).to.equal();
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

});
