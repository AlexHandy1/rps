describe("HumanPlayer", function(){
  var humanplayer;

  beforeEach( function(){
    humanplayer = new HumanPlayer();
  })

  it("has an empty turn property when initialized", function() {
    expect(humanplayer.turn).toEqual(null);
  });

  it("stores a selected turn when passed a valid string", function() {
    humanplayer.takeTurn("Rock")
    expect(humanplayer.turn).toEqual("Rock")
  })

  it("has zero round wins when initialized", function() {
    expect(humanplayer.roundWins).toEqual(0)
  })

})