function TacticalCPUPlayer(ruleLogic){
  this.turn = null
  this.previousTurns = []
  this.roundWins = 0
  this.ruleLogic = ruleLogic
}

TacticalCPUPlayer.prototype.takeTurn = function() {
  if (this.previousTurns.length == 0) {
    this.turn = "Rock"
    this.previousTurns.push(this.turn)
  } else {
    this.turn = this.ruleLogic[this.previousTurns[this.previousTurns.length-1]]
    this.previousTurns.push(this.turn)
  }
};