function Game(ruleLogic, player1, player2){
  this.ruleLogic = ruleLogic
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.roundResult = function() {
    if (this.player1.turn == this.player2.turn) {
      return "It's a tie"
    } else if (this.ruleLogic[this.player1.turn] == this.player2.turn) {
      return "Player 1 Wins"
    } else {
      return "Player 2 Wins"
    }
};