function RandomCPUPlayer(){
  this.turn = null
  this.roundWins = 0
}

RandomCPUPlayer.prototype.takeTurn = function() {
  var turns = ["Rock", "Paper", "Scissors"]
  var randomIndex = Math.floor(Math.random() * (turns.length - 0) + 0);
  this.turn = turns[randomIndex]
};