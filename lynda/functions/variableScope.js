function simple() {
  // lots of code
  var foo = 500; // local variable only inside function
  fee = 600;
  // lots of code
  console.log(foo); // will display 500
};

simpleFunction(); // will display 500
console.log(foo); // will show "undefined"
console.log(fee); // will display 600