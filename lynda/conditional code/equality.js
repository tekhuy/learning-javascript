 // = assignment
 // == equality checker
 // === strict equality checker

 // if (a == b) {};
 //  if (a != b) {};
 //   if (a === b) {};
 //    if (a !== b) {};
 //     if (a > b) {};
 //      if (a < b) {};
 //       if (a >= b) {};
 //        if (a <= b) {};

 var a = 5;
 var b = "5"

if (a = b) {
  alert("yes, they're equal"); // return they are equal
} else {
  alert("They are NOT equal");
};

if (a == b) {
  alert("yes, they're equal"); // return they are equal
} else {
  alert("They are NOT equal");
};

if (a === b) {
  alert("yes, they're equal"); // return they are not equal
} else {
  alert("They are NOT equal");
};