//Press the Hold button...total for that group of rolls adds to player total...Next persons turn
var Player = require('./../js/pigDice.js').playerModule;

var turnHolder = function(){
  currentPlayer.score += currentPlayer.turnScore;
  var returnString = "";
  if(currentPlayer.score >= 100){
    returnString = "You Win!!!";
  }else{
    returnString = "Total of " + currentPlayer.turnScore + " has been added to your score. It's next Player's turn.";
  }
  currentPlayer.turnScore = 0;
  playerCounter++;

  checkCurrentPlayer();
  return returnString;
};

//Hit the reset button...evetything clears out and new game begins
var reseter = function(){
  player1 = new Player(1);
  player2 = new Player(2);
  playerCounter = 1;
  checkCurrentPlayer();
  return("");
};

//Check to see which player is playing
var checkCurrentPlayer = function(){
  if (playerCounter % 2 === 1){
    currentPlayer = player1;
  } else {
    currentPlayer = player2;
  }
};
