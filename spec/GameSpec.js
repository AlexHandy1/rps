describe("Game", function(){
  var game;
  var player1;
  var player2;

  beforeEach( function(){
    RULELOGIC = { "Rock":"Scissors", "Paper":"Rock", "Scissors":"Paper"}
    //refactor and mock-out
    player1 = new HumanPlayer();
    player2 = new RandomCPUPlayer();
    game = new Game(RULELOGIC, player1, player2);
  })

  it("has a set of game rule logic when initialized", function() {
    expect(game.ruleLogic).toEqual({ "Rock":"Scissors", "Paper":"Rock", "Scissors":"Paper"})
  });

  it("has two players when initialized", function() {
    expect(game.player1).toBe(player1)
    expect(game.player2).toBe(player2)
  })

  it("can evaluate a Player 1 Win after both players have taken one go", function() {
    player1.takeTurn("Rock");
    //refactor and stub correctly
    player2.turn = "Scissors"
    expect(game.roundResult()).toEqual("Player 1 Wins")
  })

  it("can evaluate a Player 2 Win after both players have taken one go", function() {
    player1.takeTurn("Rock");
    //refactor and stub correctly
    player2.turn = "Paper"
    expect(game.roundResult()).toEqual("Player 2 Wins")
  })

  it("can evaluate a tie after both players have taken one go", function() {
    player1.takeTurn("Rock");
    //refactor and stub correctly
    player2.turn = "Rock"
    expect(game.roundResult()).toEqual("It's a tie")
  })
})