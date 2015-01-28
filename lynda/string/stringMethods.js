var phrase = "This is a simple phrase";

console.log( phrase.toUpperCase() );

var words = phrase.split(" ") // splits at the space in teh string

var phrase = "We want a groovy keyword.";
var position = phrase.indexOf("groovy"); // 10


// it returns -1 if the term is not fund
if (phrase.indexOf("DDDD" == -1 )) {
  console.log("That word does not occur.");
};

.lastIndexOf()

// slice method

var phrase = "Yet another phrase.";
var segment = phrase.slice(6,11);
//returns other

.substring(start, end);
.substr(start, length);

// string comparison
//###################
var str1 = "Hello";
var str2 = "hello";

// str1 != str2

if ( str1.toLowerCase() == str2.toLowerCase() ) {
  console.log("Yes, equal");
};

// ABCD is less than abcd 