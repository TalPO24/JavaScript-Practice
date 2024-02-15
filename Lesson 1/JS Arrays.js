//* JS Arrays

//* Accessing Array Elements
// You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

//* Note: Array indexes start with 0.
// [0] is the first element. [1] is the second element.

//* Changing an Array Element
// This statement changes the value of the first element in cars:
cars[0] = "Opel";

Example;
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

//* Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
// Result:
Banana, Orange, Apple, Mango;

//* Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// Example
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

//* Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// Array:
const person = ["John", "Doe", 46];

// Objects use names to access its "members". In this example, person.firstName returns John:
// Object:
const person = { firstName: "John", lastName: "Doe", age: 46 };

//* Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

// Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits

// New element can also be added to an array using the length property:
// Example
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon"; // Adds "Lemon" to fruits

//* The Difference Between Arrays and Objects
// - In JavaScript, arrays use numbered indexes.
// - In JavaScript, objects use named indexes.
