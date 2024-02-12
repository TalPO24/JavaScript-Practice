//* JavaScript Strings
//* JavaScript Strings as Objects
// Normally, JavaScript strings are primitive values, created from literals:
let x = "John";

// But strings can also be defined as objects with the keyword new:
let y = new String("John");

// Example
let x = "John";
let y = new String("John");

//* Do not create Strings objects.
// The new keyword complicates the code and slows down execution speed.
// String objects can produce unexpected results:

// When using the == operator, x and y are equal:
let x = "John";
let y = new String("John");

// When using the === operator, x and y are not equal:
let x = "John";
let y = new String("John");

// Note the difference between (x==y) and (x===y).
// (x == y) true or false?

let x = new String("John");
let y = new String("John");

// (x === y) true or false?
let x = new String("John");
let y = new String("John");
// Comparing two JavaScript objects always returns false
