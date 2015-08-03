function HumanPlayer(){
  this.turn = null
}

HumanPlayer.prototype.takeTurn = function(turn) {
  this.turn = turn
};