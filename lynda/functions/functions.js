function myFunction () {
  console.log("We're in the function");
  // loops, if statements etc...
};

myFunction();

// function with parameters

function myFunctionParameters ( x, y ) {
  var myVar = x * y ;
  console.log(myVar);
  // we can return values
  return myVar;
};

myFunctionParameters(123, 456)


function calculateLoan(amount, months, interest, name) {
  // lots of code
};

calculateLoan(10000, 60, 7, "Sam Jones"); // correct
calculateLoan(10000, 60, 7, "Sam Jones", "something extra"); //extras are ignored
calculateLoan(10000, 60, 7, "Sam Jones"); // missing are passed as "undefined"