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

//* JavaScript Array splice()
// The splice() method can be used to add new items to an array:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

//* Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.

//* JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a // new array, keeping the original array unchanged, while the old method altered the original array.

// Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

//* JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
// Slice out a part of an array starting from array element 1 ("Orange"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
// Note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
// Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
// Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);

//* Automatic toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
// This is always the case when you try to output an array.

//* Note: All JavaScript objects have a toString() method
