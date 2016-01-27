describe('Word', function() {
  it("will provide a word for the game.", function() {
    var testWord = new Word ("Pencil");
    expect(testWord.wordInput).to.equal("Pencil");
  });
});
