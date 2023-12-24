// JavaScript Arithmetic 

/*JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Remainder)
++	        Increment
--	        Decrement */

// increment operations 

{let x = 5;
console.log(x);
x++; /* x = x + 1 */
let z = x;
console.log(x, z);}

// operator precedence 

let x = 100 + 5 - 10 * 6 / 2 /* first multiplication or division is performed. 10 * 6 = 60 / 2 = 30 or 6 / 2 = 3 * 10 = 30. Then subtraction or addition is performed  */
console.log(x);