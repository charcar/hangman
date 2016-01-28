describe('hangMan', function() {
  it("will provide an array for the puzzle word.", function() {
    var testWord = new hangMan ("power");
    expect(wordGroup.includes(testWord.gameWord)).to.equal(false);
  });

  // it("will return a random word from an array.", function() {
  //   var testWord = new hangMan ("Forest");
  //   expect(testWord.pickWord()).to.equal("Forest");
  // });
  it("will split the selected word into letters.", function() {
    var testWord = new hangMan ("Film");
    expect(testWord.pickSplitWord()).to.eql(["F","i","l","m"]);
  });
});

describe('userInput', function() {
  it("will take a single alphabet character input and evaluate it against the picked word.", function() {
    var testInput = new userInput ("a",['F','i','l','m']);
    expect(testInput.characterInput).to.equal("a",);
  });

});
