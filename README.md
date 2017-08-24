# _Pig Dice Game_

#### _This app is the Pig dice game, August 23, 2017_

#### By _**Dan Nollette, Debbie Michel**_

## Description

_This page starts off with displaying a roll, hold and new button.  Player one begins the game by pressing the roll button. If they rolled a one, a text pops up and reads SORRY! you rolled a 1.  You're turn is over and you don't get any points for the turn; otherwise the text pops up and tells the player what they rolled, what their total rolled amount is and tells them to click roll or hold buttons to continue. If the player presses the roll button the display will repeat depending on what they rolled.  If they press Hold, the display will say Total of (number total) has been added to your score. It's next Player's turn and the total of the turn score is added to the players total.  If you press the new button the game starts over, clearing all value._

## Specification
  * _Start page with everything cleared_
  * _Create a random number generator_
  * _Create a button to run the number generator_
    * _Example: press the roll button_
    * _Example: outputs a random number_
  * _Press button again and it generators another number and adds it to the first number_
    * _Example: press roll button again_
    * _Example: outputs another random number and adds to the first random number_
  * _If a number 1 is generated when the roll button is hit, output loose turn and total output numbers generated is equal to zero_
    * _Example: press roll button and a one is generated_
    * _Example: outputs loose your turn and the total points for that round equals 0_
  * _Create a hold button to add total points generated to players score_
    * _Example: press hold button_
    * _Example: outputs the total points that will be added to score and add that amount to score_
  * _Create a way to say "You Win" when a player reaches 100 points_
    * _Example: player 1's hits the hold button and his new score is 103_
    * _Example: outputs "You Win"_
  * _Create a reset button to to start a new game_
    * _Example: press the reset button_
    * _Example: outputs player 1, scores go back to zero_
  * _Create a way to display each random number generated for the turn_
    * _Example: first roll = 4, second roll = 6_
    * _Example: outputs will equal 4, then 6 plus the total of the two rolls_
  * _Create a output info placement for each player_
    * _Example: player 1 is player, he presses the roll button_
    * _Example: outputs will be generated in the player 1's section of the screen_
  * _Create the "YOU WIN" pop out on the screen_
    * _Example: player one reaches 104_
    * _Example: "YOU WIN" pops out in the middle of the screen_
  * _When "YOU WIN" pop out, the game will be reset to a new game_
    * _Example: "YOU WIN" pops out_
    * _Example: Player goes back to Player 1 and scores return to zero_





## Setup/Installation Requirements

* _Clone the pigDice repository_
* _Open the index.html file in a browser of your choice_
* _Hit the roll button to begin the game_

## Known Bugs

_No known bugs at this time_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns please contact Dan Nollette at [nollette.dan@gmail.com] or Debbie Michel at [debbiemichel1633@gmail.com].  You are more then welcome to play with the code and change it in anyway you wish_

## Technologies Used

_This was built with html, css, js and jquery-3.2.1_

### License

*MIT*

Copyright (c) 2017 **_Dan Nollette and Debbie Michel_**
