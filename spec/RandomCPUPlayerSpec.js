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

  xit("generates a random turn for the CPU player", function() {
    //refactor to stub out
    spyOn(randomcpuplayer, "takeTurn").and.returnValue("Rock");
    //this returns the right value but not storing in this.turns - how do you return properties within a stubbed method?
    randomcpuplayer.takeTurn();
    console.log(randomcpuplayer.turn)
    expect(randomcpuplayer.turn).toEqual("Rock")
  })
})