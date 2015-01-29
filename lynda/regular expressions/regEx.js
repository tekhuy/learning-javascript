// Regular Expressions
//######################


// create regular expressions
var myRE = /hello/;

// or

var myRE = new RegExp("hello");

var myString = "Does this sentence have the word hello in it?";
if ( myRE.test(myString) ) {  // , test will return true or false, if use .search then will return the position of the first match
  alert("Yes");
};

// creating patterns

var myRE = /^hello/; // ^ at the start = hello would have to appear at the start of the string
           /hello$/; // $ at the end of the string
           /hel+o/; // + means the previous character would have to appear once or more "helo", "hello", "helllllllllo"
           /hel*o/; // * means the previous character would have to appear zero or more times, "heo", "helo", "hello", "helllllllllo"
           /hel?o/; // ? means zero or one "heo", "helo", "hello", "helllllllllo"
           /hello|goodbye/; // means either hello or goodbye
           /he..o/; // . means any character
           /\wello/; // \w alphanumeric character or _ (underscore)
           /\bhello/; // \b word  - means hello would have to appear after a space or a new line as word by itself and not part of any other
           /[crnld]ope/; // [...] gives a range of characters, i this case, preceding ope.. So "cope", "rope", "nope", "lope", "dope" will be true... "zope" will be false


//More complex patterns 
//#######################

This is for a US zip code with an optional 4 digit extension

/^[0-9]{5}(?:-[0-9]{4})?$/ // ^ denotes start of the string, [0-9] denotes what characters are allowed, {5 denotes how many characters are allowed} 
// ? denotes whether things are optional or not. 

// Can find reg ex on line for anything


This is for an email
####################

/^[a-zA-Z0-9._-]+@[a-zA-zO-9.-]+\.[a-zA-Z]{2,4}$/

first part begins with '^', 
"[a-zA-Z0-9._-]" then we can have multiple digits, letters, periods, dashes and underscores
"@" must exist
"[a-zA-zO-9.-]+\" where we cannot use special characters
".a-zA-Z]{2,4}$" then must end with a 2-4 letter domain like .com or .co.uk etc...
This one doesnt allow plus signs in email or .museum... 
There's a lot of regex out there... don't need to memorize




