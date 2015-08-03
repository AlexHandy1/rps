describe("RandomCPUPlayer", function(){
  var randomcpuplayer;

  beforeEach( function(){
    randomcpuplayer = new RandomCPUPlayer();
  })

  it("has an empty turn property when initialized", function() {
    expect(randomcpuplayer.turn).toEqual(null);
  });

  xit("stores a selected turn when passed a valid string", function() {
    //refactor to stub out
    spyOn(randomcpuplayer, "takeTurn").and.returnValue("Rock");
    randomcpuplayer.takeTurn()
    expect(randomcpuplayer.turn).toEqual("Rock")
  })

})