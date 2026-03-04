console.log("Helloworld");
console.log(2+2);
console.log(2*2);

//Data types
let a = 1/0;
console.log(a);
console.log(typeof a);

//Type conversion
let b = false;
console.log(b);
console.log(typeof b);
let c = String(b);//String() is a function that converts a value to a string
console.log(c);
console.log(typeof c);
let d = "123";
console.log(d);
console.log(typeof d);
let e = Number(d);//Number() is a function that converts a value to a number
console.log(e);
console.log(typeof e);
let f ="123abc";
console.log(f);
console.log(typeof f);
let g = parseInt(f);//parseInt() is a function that converts a string to an integer
console.log(g);
console.log(typeof g);

//comaprison operators
let h = 5;
console.log(h==5);
let username = "raj";
let enteredUsername = "raaj";
console.log(username == enteredUsername);

console.log(5=='5');//== is a loose equality operator that compares the values of two operands and returns true if they are equal, regardless of their types. In this case, 5 and '5' are considered equal because they have the same value, even though they are of different types (number and string).
console.log(5==='5');//=== is a strict equality operator that compares both the values and the types of two operands and returns true only if they are equal in both value and type. In this case, 5 and '5' are not considered equal because they have different types (number and string), even though they have the same value. Therefore, 5 === '5' evaluates to false.
console.log(Number(true)==1);//true is converted to 1 and false is converted to 0 when compared with numbers using the == operator. Therefore, Number(true) == 1 evaluates to true because both sides are equal in value after type conversion.

