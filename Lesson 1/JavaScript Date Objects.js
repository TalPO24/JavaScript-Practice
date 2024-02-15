//* JavaScript Date Objects
// JavaScript Date Objects let us work with dates:
// Examples
const d = new Date();
const d = new Date("2022-03-25");

//* JavaScript Date Output
// By default, JavaScript will use the browser's time zone and display a date as a full text string:

//* Thu Feb 15 2024 20:01:17 GMT+0200 (Israel Standard Time)

//* Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:
// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

//* JavaScript new Date()
// new Date() creates a date object with the current date and time:

// Example
const d = new Date();

//* new Date(date string)
// new Date(date string) creates a date object from a date string:

// Examples
const d = new Date("October 13, 2014 11:13:00");
const d = new Date("2022-03-25");

//* Note
// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

// Specifying:
const d = new Date(2018, 15, 24, 10, 33, 30);
//Is the same as:
const d = new Date(2019, 3, 24, 10, 33, 30);

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

// Specifying:
const d = new Date(2018, 5, 35, 10, 33, 30);
// Is the same as:
const d = new Date(2018, 6, 5, 10, 33, 30);

//* Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:

// Example
const d = new Date(2018, 11, 24, 10, 33, 30);
// 5 numbers specify year, month, day, hour, and minute:
// Example
const d = new Date(2018, 11, 24, 10, 33);

// 4 numbers specify year, month, day, and hour:
// Example
const d = new Date(2018, 11, 24, 10);

// 3 numbers specify year, month, and day:
// Example
const d = new Date(2018, 11, 24);

// 2 numbers specify year and month:
// Example
const d = new Date(2018, 11);

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
// Example
const d = new Date(2018);

//* Displaying Dates
// JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:
// Example
// Thu Feb 15 2024 20:01:17 GMT+0200 (Israel Standard Time)

// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
// Example
const d = new Date();
d.toString();

// The toDateString() method converts a date to a more readable format:
// Example
const d = new Date();
d.toDateString();

// The toUTCString() method converts a date to a string using the UTC standard:
// Example
const d = new Date();
d.toUTCString();
