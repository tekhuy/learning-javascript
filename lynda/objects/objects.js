// arrays are objects
// dates are objects 
// Objects are containers that hold variables and functions

var player = new Object();

player.name = "Fred";
player.score = 10000;
player.rank = 1;




var player1 = { name: "Fred", score: 10000, rank: 1 }; // shorthand for creating player object
var player2 = { name: "Sam", score: 1000000, rank: 3 };

function playerDetails() {
  //display info about each player
  console.log(this.name + " has a rank of: " + this.rank + " and a score of " + this.score);
};

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();
