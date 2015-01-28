var multipleValues = [];

multipleValues[0] = 50;

multipleValues[1] = 60;

multipleValues[2] = "Mouse";

console.log(multipleValues[2]);

var multipleValues = [50, 60, "Mouse"];

var multipleValues = new Array(); // arrays are objects

var multipleValues = Array();

var multipleValues = Array(5); // creating an array with 5 slots

// Array properties

var multipleValues = [10, 20, 30, 40, 50];

console.log(multipleValues.length); // length is 5, highest index is [4]

// Array Methods

someFunction(params); // to call a function 

// methods are functions that belong to an object
someObject.someMethod(); // to call a method

var multipleValues = [10, 20, 30, 40, 50];
var reversedValues = multipleValues.revers(); // .join(), .sort()

console.log( reversedValues.join() ); // "50, 40, 30, 20, 10"

// Arrays are everywhere... To get something 

var myArrayOfLinks = document.getElementsByTagName("a"); // this gets all elements inside <a></a> tags and returns them as an array