function die(){
  this.state = "state";
}

die.prototype.roll = function(){
  return Math.ceil(Math.random() * 6);
}
var rollTotal = function(turnScore, playerScore){
  return turnScore + playerScore;
}


//User Intreface Logic
$(document).ready(function(){
  var newDie = new die ();
  var playerOneScore = 0;
  var turnScore = 0;
  $("#roll-die").submit(function(event){
    event.preventDefault();
    currentRoll = newDie.roll();
    if (currentRoll === 1) {
      turnScore = 0;
      $("#output").text("SORRY! You rolled a 1. You're turn is over and you don't get any points for the turn.");
    } else {
      turnScore += currentRoll;
      $("#output").text("You rolled a " + currentRoll + ". Your score for the turn is now " + turnScore + ". Click 'Roll' or 'Hold' to continue.");
    }
  });
  $("#hold").submit(function(event){
    event.preventDefault();
    $("#output").text("Total of " + turnScore + " has been add to your score. It's Player2's turn.");
    playerOneScore = rollTotal(turnScore, playerOneScore);
    turnScore = 0;
    if(playerOneScore >= 100){
      $("#output").text("You Win!!!");
    }else{
      $("#output").text("Next person's turn!!!");
    }


    console.log(playerOneScore);


  });

});
