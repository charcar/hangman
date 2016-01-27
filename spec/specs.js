describe('Word', function() {
  it("will provide a word for the game.", function() {
    var testWord = new Word ("Pencil");
    expect(testWord.wordInput).to.equal("Pencil");
  });
  it("will return a random word from the array of words.", function() {
    expect(generateWord("Pencil")).to.equal("Pencil");
  });
  it("will split the selected random word into an array of separate letters.", function() {
    expect(splitWord(generateWord)).to.eql(["P","e","n","c","i","l"]);
  });
});
