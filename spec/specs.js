describe('Word', function() {
  it("will provide a word for the game.", function() {
    var testWord = new Word ("Pencil");
    expect(testWord.wordInput).to.equal("Pencil");
  });
});

describe('Words', function() {
  it("will return a random word from the array of words.", function() {
    expect(testWords("Pencil")).to.equal("Pencil");
  });
});
