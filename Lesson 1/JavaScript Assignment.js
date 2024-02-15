//* JavaScript Assignment

//* JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.
/*
Operator	Example	    Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y
*/

//* Logical Assignment Operators
/*
Operator	Example	    Same As
&&=	        x &&= y	    x = x && (x = y)
||=	        x ||= y	    x = x || (x = y)
??=	        x ??= y	    x = x ?? (x = y)
*/

//* Note
// The Logical assignment operators are ES2020.

//* The %= Operator
// The Remainder Assignment Operator assigns a remainder to a variable.
// Remainder Assignment Example
let x = 10;
x %= 5;

//*The ??= Operator
// The Nullish coalescing assignment operator is used between two values.
// If the first value is undefined or null, the second value is assigned.
// Nullish Coalescing Assignment Example
let x;
x ??= 5;
