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

Bitwise Shift Assignment Operators

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

// signed right shift bitwise assignment operator.  In many cases, JavaScript uses a technique called "sign-propagating right shift," which preserves the sign of the number while shifting.

{
    let x = 100; /** in binary x = 1100100 */
    x >>= 5; /** x = x >> 5 --> x = 11 */
    console.log('right shift positive '+x);
}

{
    let x = -100; /** in binary x = -1100100 */
    x >>= 5; /** x = x >> 5 --> x = -100 */
    console.log('right shift negative '+x);
}
{
    let x = -10; /** in binary x = -1010 */
    x >>= 5; /** x = x >> 5 --> x = -1 */
    console.log('right shift negative '+x);
}


// Unsigned Right Shift Assignment Operator

{
    let x = 100;
    x >>>= 5;
    console.log('unsigned right shift positive '+x);
}
{
    let x = -100;
    x >>>= 5;
    console.log('unsigned right shift negative '+x);
}

//bitwise AND assignment operator

{
    let x = 100; /** in binary x = 1100100 */
    x &= 5; /*  1100100 
                0000101 
                --------
                0000100*/
    console.log('AND '+x);
}

{
    let x = -100;
    x &=5; 
    console.log('AND neg '+x);
}

//Bitwise OR Assignment Operator

{
    let x = 100; /**
                    1100100
                    0000101
                    --------
                    1100101 */
    x |= 5;
    console.log('OR '+x)
}

{
    let x= -100;
                       /**
                00000000000000000000000001100100 (100 in 32-bit signed two's complement)
                11111111111111111111111110011011 (-100 after inverting)
                11111111111111111111111110011100 (-100 after adding 1 in 32-bit signed two's complement)
                00000000000000000000000000000101 (5 in 32-bit signed two's complement)
                -------------------------------------
                11111111111111111111111110011101 (-99 in 32-bit signed two's complement)
                00000000000000000000000001100010 (inverting)
                00000000000000000000000001100011 (adding 1) (99in 32-bit signed two's complement)*/
    
    x |= 5;
    console.log('OR neg '+ x);
}

//Bitwise XOR Assignment Operator

{
    let x = 100; /**
                00000000000000000000000001100100 (100 in 32-bit signed two's complement)
                00000000000000000000000000000101 (5 in 32-bit signed two's complement)
                --------------------------------
                00000000000000000000000001100001 */
    x ^= 5;
    console.log('XOR '+x)
}
{
    let x = -100; /**
                00000000000000000000000001100100 (100 in 32-bit signed two's complement)
                11111111111111111111111110011011 (-100 after inverting)
                11111111111111111111111110011100 (-100 after adding 1 in 32-bit signed two's complement)
                00000000000000000000000000000101 (5 in 32-bit signed two's complement)
                -------------------------------------
                11111111111111111111111110011001 (-103 in 32-bit signed two's complement)
                00000000000000000000000001100110 (inverting)
                00000000000000000000000001100111 (adding 1) (103 in 32-bit signed two's complement)*/
    x ^= 5;
    console.log('XOR neg '+x)
}

//Logical AND assignment operator 

{
    let x = 100;
    x &&= 5; /*x = x && (x = 5) 
               1. if x is truthy then x = 5
               2. if x is falsy then x = x. x remains unchanged*/
    console.log('logical AND assignment truthy '+x);
}
{
    let x = 0;
    x &&= 5; /*x = x && (x = 5) 
               1. if x is truthy then x = 5
               2. if x is falsy then x = x. x remains unchanged*/
    console.log('logical AND assignment falsy '+x);
}

//Logical OR assignment operator

{
    let x = 100;
    x ||= 5; /* x = x || (x = 5)
                1. if x is falsy then x = 5
                2. if x is truthy then x = x. x remains unchanged */
    console.log('logical OR assignment truthy '+x)
}
{
    let x = 0;
    x ||= 5; /* x = x || (x = 5)
                1. if x is falsy then x = 5
                2. if x is truthy then x = x. x remains unchanged */
    console.log('logical OR assignment falsy '+x)
}

//Nullish coalescing assignment operator

// like logical OR assignment but specifically for null and undefined value 

{
    let x = 0;
    x ??=5 /* x = x ?? (x = 5)
              1. if x contains value other than null and undefined then x = x. remains unchanged 
              2. if x contains null or undefined then x = 5*/
    console.log('nullish coalescent unsatisfied '+x);
}
{
    let x = 'undefined';
    x ??=5 /* x = x ?? (x = 5)
              1. if x contains value other than null and undefined then x = x. remains unchanged 
              2. if x contains null or undefined then x = 5*/
    console.log('nullish coalescent unsatisfied '+x);
}
{
    let x = null;
    x ??=5 /* x = x ?? (x = 5)
              1. if x contains value other than null and undefined then x = x. remains unchanged 
              2. if x contains null or undefined then x = 5*/
    console.log('nullish coalescent satisfied '+x);
}
{
    let x = undefined;
    x ??=5 /* x = x ?? (x = 5)
              1. if x contains value other than null and undefined then x = x. remains unchanged 
              2. if x contains null or undefined then x = 5*/
    console.log('nullish coalescent satisfied '+x);
}
//-----------------------------------------------------------------------------------------------------------

// typeOf operator

console.log(typeof "")
console.log(typeof (3+3))
console.log(typeof [1, 2]) /*array is one kind of object */
let car 
console.log(typeof(car));
console.log(typeof({name: 'value'}))