// create an object
var playerFred = { name: "Fred", score: 10000, rank: 1 };

// add a new property
playerFred.gameType = "MMORPG";

// add a method
playerFred.logScore = function() {
  console.log(this.score);
};

// call the method
playerFred.logScore();

// create another object
var playerBob = { name: "Bob", highscore: 50, level: "b" };


// formalizing objects with constructors

function Player(n, s, r) {
  this.name = n;
  this.score = s;
  this.rank = r;
};

Player.prototype.logInfo = function() {
  console.log("I am: ", this.name);
};

Player.prototype.promote = function() {
  this.rank++;
  console.log("My new rank is: ", this.rank);
};

var fred = new Player("Fred", 10000, 5);

fred.logInfo();
fred.promote();

var bob = new Player("Bob", 50, 1)
bob.logInfo();
bob.promote();