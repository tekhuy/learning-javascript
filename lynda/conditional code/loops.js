// also called iteration

// while loop

var a = 1;
 
while ( a < 10 ) {
  console.log(a);
  a++;
};


// do while loop

var a = 100;

do {
  console.log(a);
  a++;
} while ( a < 10 );


// for loop

for ( var i = 1 ; i < 10 ; i++ ) {
  //do stuff
};

// break jumps out of the loop


// "continue" in a loop - continue moves back to the top of teh function

for ( var i = 1 ; i < 5000 ; i++ ) {
  // do stuff
  if ( i % 5 == 0 ) {
    continue; // done with this iteratiin and moves back to the top
  };
  // do second set of stuff
};