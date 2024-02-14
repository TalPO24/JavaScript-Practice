//* JavaScript Sorting Arrays

//* Sorting an Array
// The sort() method sorts an array alphabetically:
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//* Reversing an Array
// The reverse() method reverses the elements in an array:
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

// By combining sort() and reverse(), you can sort an array in descending order:
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

//* JavaScript Array toSorted() Method
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

// Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

//* JavaScript Array toReversed() Method
// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the  original array unchanged, while the last method alters the original array.

// Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();

//* Numeric Sort
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

// Use the same trick to sort an array descending:
// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});


//* The Compare Function
// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
function(a, b){return a - b}

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.
// Example:
// The compare function compares all the values in the array, two values at a time (a, b).
// When comparing 40 and 100, the sort() method calls the compare function(40, 100).
// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

//* Sorting an Array in Random Order
// Using a sort function, like explained above, you can sort an numeric array in random order
// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

//* Find the Lowest (or Highest) Array Value
// There are no built-in functions for finding the max or min value in an array.
// To find the lowest or highest valu you have 3 options:
// - Sort the array and read the first or last element
// - Use Math.min() or Math.max()
// - Write a home made function

// Find Min or Max with sort()
// After you have sorted an array, you can use the index to obtain the highest and lowest values.

// Sort Ascending:
// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

// Sort Descending:
// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

//* Using Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array:

// Example
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//* Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:
// Example
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

//* Sorting Object Arrays
// JavaScript arrays often contain objects:
// Example
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

// Even if objects have properties of different data types, the sort() method can be used to sort the array.
// The solution is to write a compare function to compare the property values:

// Example
cars.sort(function(a, b){return a.year - b.year});

// Comparing string properties is a little more complex:
// Example
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});