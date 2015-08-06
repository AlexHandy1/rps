function RandomCPUPlayer(ruleLogic){
  this.turn = null
  this.roundWins = 0
  this.ruleLogic = ruleLogic
}

RandomCPUPlayer.prototype.takeTurn = function() {
  var turns = []
  for (turn in this.ruleLogic) {
    turns.push(turn);
  }
  var randomIndex = Math.floor(Math.random() * (turns.length - 0) + 0);
  this.turn = turns[randomIndex]
};