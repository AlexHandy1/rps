describe("RandomCPUPlayer", function(){
  var randomcpuplayer;

  beforeEach( function(){
    randomcpuplayer = new RandomCPUPlayer();
  })

  it("has an empty turn property when initialized", function() {
    expect(randomcpuplayer.turn).toEqual(null);
  });

  xit("generates a random turn for the CPU player", function() {
    //refactor to stub out
    spyOn(randomcpuplayer, "takeTurn").and.returnValue("Rock");
    randomcpuplayer.takeTurn()
    expect(randomcpuplayer.turn).toEqual("Rock")
  })

  it("has zero round wins when initialized", function() {
    expect(randomcpuplayer.roundWins).toEqual(0)
  })
})