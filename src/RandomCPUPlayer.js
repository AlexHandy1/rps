function RandomCPUPlayer(){
  this.turn = null
  this.roundWins = 0
}

RandomCPUPlayer.prototype.takeTurn = function() {
  var turns = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
  var randomIndex = Math.floor(Math.random() * (turns.length - 0) + 0);
  this.turn = turns[randomIndex]
};