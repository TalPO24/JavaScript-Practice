//* JavaScript Array Search

//* JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.

// Example
// Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

//* Syntax
//* array.indexOf(item, start)

// item - Required. The item to search for.
// start - Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.

//* JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true

//* Syntax
// array.includes(search-item)
// Array.includes() allows to check for NaN values. Unlike Array.indexOf().

//* JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:
// Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Note that the function takes 3 arguments:
// - The item value
// - The item index
// - The array itself

//* JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 18:
// Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//* JavaScript Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

// Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);

//* vaScript Array findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.

// Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex((x) => x > 40);
