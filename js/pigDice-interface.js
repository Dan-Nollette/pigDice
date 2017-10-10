var Player = require('./../js/pigDice.js').playerModule;

$(document).ready(function(){

//output information for the roll button
  $("#roll-die").submit(function(event){
     event.preventDefault();
    $("#output").text(dieRoller());
    $("#currentPlayer").text(currentPlayer.name);
  });
//output information for the hold button
  $("#hold").submit(function(event){
    event.preventDefault();
    $("#output").text(turnHolder());
    $("#pOneScore").text(player1.score);
    $("#pTwoScore").text(player2.score);
    $("#currentPlayer").text(currentPlayer.name);
  });
//output for the reset button
  $("#reset").submit(function(event){
    event.preventDefault();
    $("#output").text(reseter);
    $("#currentPlayer").text("Player 1");
    $("#pOneScore").text(player1.score);
    $("#pTwoScore").text(player2.score);
  });
});




//residual backend logic

var player1 = new Player(1);
var player2 = new Player(2);
var playerCounter = 1;
var currentPlayer = player1;

//Press the roll button...if one-loose turn...else continue playing

var dieRoller = function(){
  checkCurrentPlayer();
  currentPlayer.rollDie();

  if (currentPlayer.roll === 1) {
    playerCounter++;
    checkCurrentPlayer();
    currentPlayer.turnScore = 0;
    return "SORRY! You rolled a 1. You're turn is over and you don't get any points for the turn.";
  } else {
    return "You rolled a " + currentPlayer.roll + ". Your score for the turn is now " + currentPlayer.turnScore + ". Click 'Roll' or 'Hold' to continue.";
  }
};
