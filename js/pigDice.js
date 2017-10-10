//Business logic
function Player(number){
  this.playerNumber = number;
  this.score = 0;
  this.roll = 0;
  this.turnScore = 0;
  this.name = "Player " + number;
}

Player.prototype.rollDie = function(){
  this.roll = Math.ceil(Math.random() * 6);
  this.turnScore += this.roll;
};

exports.playerModule = Player;
