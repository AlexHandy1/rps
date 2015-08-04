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
    //basic : always pick the second in the array
    //v2 : pick randomIndex between 0..1 in array
    // var randomIndex = Math.floor(Math.random() * (2 - 0) + 0);
    this.turn = this.ruleLogic[this.previousTurns[this.previousTurns.length-1]][1]
    this.previousTurns.push(this.turn)
  }
};