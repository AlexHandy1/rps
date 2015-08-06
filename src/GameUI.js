RULELOGIC = { "Rock":["Scissors", "Lizard"], "Paper":["Rock", "Spock"], "Scissors":["Paper", "Lizard"], "Lizard":["Paper", "Spock"], "Spock":["Scissors", "Rock"] }
P2WINRULELOGIC = {"Scissors":["Rock", "Spock"], "Paper":["Scissors", "Lizard"], "Rock":["Paper", "Spock"], "Lizard":["Rock", "Scissors"], "Spock":["Lizard", "Paper"]}

$(document).ready( function(){
  $("#start-random-cpu").click( function() {
    player1 = new HumanPlayer();
    player2 = new RandomCPUPlayer(RULELOGIC);
    game = new Game(RULELOGIC, player1, player2);
  })

  $("#start-tactical-cpu").click( function() {
    player1 = new HumanPlayer();
    player2 = new TacticalCPUPlayer(P2WINRULELOGIC);
    game = new Game(RULELOGIC, player1, player2);
  })

  $("#p1").click( function(e) {
    e.preventDefault()
    var p1turn = document.getElementById('turn').value
    player1.takeTurn(p1turn);
    player2.takeTurn();
    var p2turn = player2.turn
    var roundresult = game.roundResult();
    var overallresult = game.checkForWinner(player1, player2);
    $('#p1-turn').html(p1turn);
    $('#cpu-turn').html(p2turn);
    $('#roundresult').html(roundresult);
    $('#overallresult').html(overallresult);
  })

  $("#newgame").click( function() {
    player1.roundWins = 0
    player2.roundWins = 0
    $('#p1-turn').html(null);
    $('#cpu-turn').html(null);
    $('#roundresult').html(null);
    $('#overallresult').html(null);
  })
})