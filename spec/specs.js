describe('Word', function() {
  it("will provide a word for the game.", function() {
    var testWord = new Word ("Pencil");
    expect(testWord.wordInput).to.equal("Pencil");
  });
});

describe('selectWord', function() {
  it("will return a random word from the array of words.", function() {
    var testselectWord = new selectWord ("Pencil");
    expect(testselectWord.randomWord).to.equal("Pencil");
  });
  it("will separate the letters of the selected random word.", function() {
  
  })
});
