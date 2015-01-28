var today = new Date(); // current date and time

// year, month, day
var y2k = new Date(2000, 0, 1);

// year, onth, day, hours, minutes, seconds
var y2k = new Date(2000, 0, 1, 0, 0, 0);

// date methods
//###############

// get methods
today.getMonth(); // returns 0 - 11, 0 is Jan
today.getFullYear(); // YYYY (not zero-based)
today.getDate(); // 1 - 31 day of month
today.getDay(); // return 0 - 6, 0 is Sunday
today.getHours(); // 0 - 23
today.getTime(); // milliseconds since 1/1/1970

// set dates
var today = new Date();

today.setMonth(5);
today.setFullYear(2012);
today.setDay(0);
// etc

// Comparing dates
//################

var date1 = new Date(2000, 0, 1);
var date2 = new Date(2000, 0, 1);

if ( date1.getTime() == date2.getTime() ) {

};