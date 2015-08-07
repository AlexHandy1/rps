describe("Game", function(){
  var game;
  var player1;
  var player2;

  beforeEach( function(){
    RULELOGIC = { "Rock":["Scissors", "Lizard"], "Paper":["Rock", "Spock"], "Scissors":["Paper", "Lizard"], "Lizard":["Paper", "Spock"], "Spock":["Scissors", "Rock"] }
    P2WINRULELOGIC = {"Scissors":["Rock", "Spock"], "Paper":["Scissors", "Lizard"], "Rock":["Paper", "Spock"], "Lizard":["Rock", "Scissors"], "Spock":["Lizard", "Paper"]}
    TRADITIONALRULELOGIC = { "Rock":["Scissors"], "Paper":["Rock"], "Scissors":["Paper"]}
    player1 = new HumanPlayer();
    player2 = new RandomCPUPlayer();
    tacticalplayer = new TacticalCPUPlayer(P2WINRULELOGIC);
    game = new Game(RULELOGIC, player1, player2);
    tacticalGame = new Game(RULELOGIC, player1, tacticalplayer);
    tradtionalGame = new Game(TRADITIONALRULELOGIC, player1, player2);
  })

  it("has a set of game rule logic when initialized", function() {
    expect(game.ruleLogic).toEqual({ "Rock":["Scissors", "Lizard"], "Paper":["Rock", "Spock"], "Scissors":["Paper", "Lizard"], "Lizard":["Paper", "Spock"], "Spock":["Scissors", "Rock"] })
  });

  it("has two players when initialized", function() {
    expect(game.player1).toBe(player1)
    expect(game.player2).toBe(player2)
  })

  it("has a round wins target of 2 reflecting best of 3 round game when initialized", function() {
    expect(game.roundWinsTarget).toEqual(2)
  })

  it("can evaluate a Player 1 Win after both players have taken one go", function() {
    player1.takeTurn("Rock");
    player2.turn = "Scissors"
    expect(game.roundResult()).toEqual("Player 1 Wins This Round")
  })

  it("can evaluate a Player 2 Win after both players have taken one go", function() {
    player1.takeTurn("Rock");
    player2.turn = "Paper"
    expect(game.roundResult()).toEqual("Player 2 Wins This Round")
  })

  it("can evaluate a tie after both players have taken one go", function() {
    player1.takeTurn("Rock");
    player2.turn = "Rock"
    expect(game.roundResult()).toEqual("It's a tie")
  })

  it("tracks the number of round wins that players accumulate", function() {
    player1.takeTurn("Rock");
    player2.turn = "Scissors"
    game.roundResult();
    player2.turn = "Paper"
    game.roundResult();
    expect(player1.roundWins).toEqual(1)
    expect(player2.roundWins).toEqual(1)
  })

  it("can evaluate an overall winner as the first player to reach 2 round wins", function() {
    player1.takeTurn("Rock");
    player2.turn = "Scissors"
    game.roundResult();
    player1.takeTurn("Scissors");
    player2.turn = "Paper"
    game.roundResult();
    expect(game.checkForWinner(player1, player2)).toEqual("Player 1 is the Winner!")
    expect(player1.roundWins).toEqual(2)
  })

  it("can evaluate an overall winner in a game where a human player takes on a tactical CPU player", function() {
    player1.takeTurn("Rock");
    tacticalplayer.takeTurn();
    expect(tacticalGame.roundResult()).toEqual("It's a tie")
    player1.takeTurn("Scissors");
    tacticalplayer.takeTurn();
    tacticalGame.roundResult();
    player1.takeTurn("Rock");
    tacticalplayer.takeTurn();
    tacticalGame.roundResult();
    expect(tacticalGame.checkForWinner(player1, tacticalplayer)).toEqual("Player 2 is the Winner!")
  })

  it("can easily switch between sets of rules and process a result", function() {
    player1.takeTurn("Rock");
    player2.turn = "Scissors"
    expect(tradtionalGame.roundResult()).toEqual("Player 1 Wins This Round")
  })
})