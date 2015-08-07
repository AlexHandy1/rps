describe("TacticalCPUPlayer", function(){
  var tacticalcpuplayer;

  beforeEach( function(){
    P2WINRULELOGIC = {"Scissors":["Rock", "Spock"], "Paper":["Scissors", "Lizard"], "Rock":["Paper", "Spock"], "Lizard":["Rock", "Scissors"], "Spock":["Lizard", "Paper"]}
    tacticalcpuplayer = new TacticalCPUPlayer(P2WINRULELOGIC);
  })

  it("has an empty turn property when initialized", function() {
    expect(tacticalcpuplayer.turn).toEqual(null);
  });

  it("has zero round wins when initialized", function() {
    expect(tacticalcpuplayer.roundWins).toEqual(0)
  })

  it("has an empty previous turns property to track turns taken so can decide tactics for next move", function() {
    expect(tacticalcpuplayer.previousTurns).toEqual([])
  })

  it("has access to the winning game rule logic when initialized", function() {
    expect(tacticalcpuplayer.ruleLogic).toEqual({ "Scissors":["Rock", "Spock"], "Paper":["Scissors", "Lizard"], "Rock":["Paper", "Spock"], "Lizard":["Rock", "Scissors"], "Spock":["Lizard", "Paper"]})
  })

  it("can store previous turns in an array", function() {
    tacticalcpuplayer.takeTurn();
    tacticalcpuplayer.takeTurn();
    expect(tacticalcpuplayer.previousTurns).toEqual(["Rock", "Spock"])
  })

  it("can store the latest turn whilst storing previous turns", function() {
    tacticalcpuplayer.takeTurn();
    tacticalcpuplayer.takeTurn();
    expect(tacticalcpuplayer.previousTurns).toEqual(["Rock", "Spock"])
    expect(tacticalcpuplayer.turn).toEqual("Spock")
  })

  it("takes its next turn based on selecting the choice that would have beaten its previous turn", function(){
    tacticalcpuplayer.takeTurn();
    tacticalcpuplayer.takeTurn();
    tacticalcpuplayer.takeTurn();
    expect(tacticalcpuplayer.previousTurns).toEqual(["Rock", "Spock", "Paper"])
  });
})



