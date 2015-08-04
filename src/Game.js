function Game(ruleLogic, player1, player2){
  this.ruleLogic = ruleLogic
  this.player1 = player1
  this.player2 = player2
  this.roundWinsTarget = 2
}

Game.prototype.roundResult = function() {
  if (this.player1.turn == this.player2.turn) {
    return "It's a tie"
  } else if (this.ruleLogic[this.player1.turn].indexOf(this.player2.turn)!= -1) {
    this.addRoundWin(this.player1);
    return "Player 1 Wins This Round"
  } else {
    this.addRoundWin(this.player2);
    return "Player 2 Wins This Round"
  }
};

Game.prototype.addRoundWin = function(player) {
  player.roundWins += 1
};

Game.prototype.checkForWinner = function(player1, player2) {
  if (player1.roundWins == 2) {
    return "Player 1 is the Winner!"
  } else if(player2.roundWins == 2) {
    return "Player 2 is the Winner!"
  } else {
    return
  }
};