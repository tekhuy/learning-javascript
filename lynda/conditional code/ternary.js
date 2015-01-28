condition ? true : false

// mini if else statement

var playerOne = 500;
var playerTwo = 600;

// sometime later

var highScore;

if (playerOne > playerTwo) {
  highScore = playerOne;
} else {
  highScore = playerTwo;
};

// can use this instead of if/else statement

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo ;