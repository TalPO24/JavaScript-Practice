//* JavaScript Array Methods

//* JavaScript Array at()
// ES2022 intoduced the array method at():

// Examples
// Get the third element of fruits using at():

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
// Get the third element of fruits using []:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];

// The at() method returns an indexed element from an array.
// The at() method returns the same as [].

//* JavaScript Array join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

// Result:
Banana * Orange * Apple * Mango;

//* Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.

//* JavaScript Array pop()
// The pop() method removes the last element from an array:
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

// The pop() method returns the value that was "popped out"

//* JavaScript Array push()
// The push() method adds a new element to an array (at the end):
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

// The push() method returns the new array length

//* Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.

//* JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

// The shift() method returns the value that was "shifted out"

//* JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

// The unshift() method returns the new array length

//* Changing Elements
// Array elements are accessed using their index number:
// Array indexes start with 0:
// [0] is the first array element
// [1] is the second
// [2] is the third ...

//* JavaScript Array length
// The length property provides an easy way to append a new element to an array:
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

//* Merging Arrays (Concatenating)
// In programming languages, concatenation means joining strings end-to-end.
// Concatenation "snow" and "ball" gives "snowball".
// Concatenating arrays means joining arrays end-to-end.

//* JavaScript Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:

// Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

//* Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
