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

{let x = 100 + 5 - 10 * 6 / 2 /* first multiplication or division is performed. 10 * 6 = 60 / 2 = 30 or 6 / 2 = 3 * 10 = 30. Then subtraction or addition is performed  */
console.log(x);}
// -----------------------------------------------------------------------------------------------------

// JavaScript assignment operators 

/*JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	       Same As
=	        x = y	       x = y
+=	        x += y	       x = x + y
-=	        x -= y	       x = x - y
*=	        x *= y	       x = x * y
/=	        x /= y	       x = x / y
%=	        x %= y	       x = x % y
**=	        x **= y	       x = x ** y

Shift Bitwise Assignment Operators

Operator	Example	       Same As
<<=	        x <<= y	       x = x << y
>>=	        x >>= y	       x = x >> y
>>>=	    x >>>= y	   x = x >>> y


Bitwise Assignment Operators

Operator	Example	       Same As
&=	        x &= y	       x = x & y
^=	        x ^= y	       x = x ^ y
|=	        x |= y	       x = x | y


Logical Assignment Operators

Operator	Example	       Same As
&&=	        x &&= y	       x = x && (x = y)
||=	        x ||= y	       x = x || (x = y)
??=	        x ??= y	       x = x ?? (x = y) */

// Exponentiation Assignment Operator 

{
    let x = 10;
    x **= 2; /*x = x ** 2 */
    console.log('exponentiation assignment '+x);
}

// left shift bitwise assignment operator 

{
    let x = 100; /** in binary x = 1100100 */
    x <<= 5; /*x = x << 5 --> x = 1100100 << 5 = 110010000000*/
    console.log('left shift positive '+ x)
}
{
    let x = -100; /** in binary x = -1100100 */
    x <<= 5; /*x = x << 5 --> x = 1100100 << 5 = -110010000000*/
    console.log('left shift negative '+ x)
}

// right shift bitwise assignment operator 

{
    let x = 100; /** in binary x = 1100100 */
    x >>= 5; /** x = x >> 5 --> x = 11 */
    console.log('right shift positive '+x);
}

{
    let x = -100; /** in binary x = -1100100 */
    x >>= 5; /** x = x >> 5 --> x = 11 */
    console.log('right shift negative '+x);
}