function HumanPlayer(){
  this.turn = null
  this.roundWins = 0
}

HumanPlayer.prototype.takeTurn = function(turn) {
  this.turn = turn
};