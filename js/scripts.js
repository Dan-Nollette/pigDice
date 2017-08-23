//Business logic
function player(number){
  this.playerNumber = number;
  this.score = 0;
  this.roll = 0;
  this.turnScore = 0;
  this.name = "player" + number;
}

player.prototype.rollDie = function(){
  this.roll = Math.ceil(Math.random() * 6);
  this.turnScore += this.roll;
}
var rollTotal = function(turnScore, playerScore){
  return turnScore + playerScore;
}


//User Intreface Logic
$(document).ready(function(){
  var player1 = new player(1);
  var player2 = new player(2);
  var playerCounter = 1;
  var currentPlayer;

  $("#reset").submit(function(event){
    event.preventDefault();
    player1 = new player(1);
    player2 = new player(2);
    $("#pOneScore").text(player1.score);
    $("#pTwoScore").text(player2.score);
    playerCounter = 1;
  });

  $("#roll-die").submit(function(event){
    event.preventDefault();
    if (playerCounter % 2 === 1){
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }
    currentPlayer.rollDie();
    if (currentPlayer.roll === 1) {
      $("#output").text("SORRY! You rolled a 1. You're turn is over and you don't get any points for the turn.");
      playerCounter++;
      currentPlayer.turnScore = 0;

    } else {
      $("#output").text("You rolled a " + currentPlayer.roll + ". Your score for the turn is now " + currentPlayer.turnScore + ". Click 'Roll' or 'Hold' to continue.");
    }
    $("#currentPlayer").text(currentPlayer.name);
    $("#takeTurn").show();
  });

  $("#hold").submit(function(event){
    event.preventDefault();
    currentPlayer.score += currentPlayer.turnScore;

    if(currentPlayer.score >= 100){
      $("#output").text("You Win!!!");
    }else{
      $("#output").text("Total of " + currentPlayer.turnScore + " has been added to your score. It's next Player's turn.");
    }
    currentPlayer.turnScore = 0;
    playerCounter++;
    $("#pOneScore").text(player1.score);
    $("#pTwoScore").text(player2.score);
    $("#currentPlayer").text(currentPlayer.name);
    $("#takeTurn").show();
  });
});
