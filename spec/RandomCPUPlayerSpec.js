describe("RandomCPUPlayer", function(){
  var randomcpuplayer;

  beforeEach( function(){
    RULELOGIC = { "Rock":["Scissors", "Lizard"], "Paper":["Rock", "Spock"], "Scissors":["Paper", "Lizard"], "Lizard":["Paper", "Spock"], "Spock":["Scissors", "Rock"] }
    randomcpuplayer = new RandomCPUPlayer(RULELOGIC);
  })

  it("has an empty turn property when initialized", function() {
    expect(randomcpuplayer.turn).toEqual(null);
  });

  it("has zero round wins when initialized", function() {
    expect(randomcpuplayer.roundWins).toEqual(0)
  })

  it("has access to the rule logic for a particular game when initialized in order to select the correct turn options", function() {
    expect(randomcpuplayer.ruleLogic).toEqual({ "Rock":["Scissors", "Lizard"], "Paper":["Rock", "Spock"], "Scissors":["Paper", "Lizard"], "Lizard":["Paper", "Spock"], "Spock":["Scissors", "Rock"] })
  })

  it("generates a random turn for the CPU player", function() {
    spyOn(Math, "random").and.returnValue(0);
    randomcpuplayer.takeTurn();
    expect(randomcpuplayer.turn).toEqual("Rock")
  })
})