describe('hangMan', function() {
  it("will provide an array for the puzzle word.", function() {
    var testWord = new hangMan ("power");
    expect(wordGroup.includes(testWord.gameWord)).to.equal(false);
  });

  it("will return a random word from an array.", function() {
    var testWord = new hangMan ("Forest");
    expect(testWord.pickWord()).to.equal("Forest");
  });

  it("will split the selected word into letters.", function() {
    var testWord = new hangMan ("Film");
    expect(testWord.splitWord()).to.equal("F","i","l","m");
  });
});

// describe('pickWord', function() {
//   it("will return a random word from an array.", function() {
//     var testWord = new hangMan ("Pencil");
//     expect(testWord.pickRandomWord).to.equal("Pencil");
//   })
// })
