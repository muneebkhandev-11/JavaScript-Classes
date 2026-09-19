/*
Data Types 
there are two types or data type 
> Primative : its hold single value 
> Non Primative : its hold group of values 

=> Number 
=> String 
=> Boolean
=> Null
=> Undefined
=> Symbol

*/

// Practice of data types

/*

let a = 10; // Number
console.log(typeof a);

let name = "Ali"; // String
console.log(typeof name);

let islogin = true; // Boolean
console.log(typeof islogin);

let value = null; // Null
console.log(typeof value);
console.log(null); //object

let age; // Undefined
console.log(typeof undefined);
console.log(typeof age);

let b = Symbol("hello"); // Symbol
let c = Symbol("hello"); // Symbol
console.log(typeof b);
console.log(b == c); // false

*/

// Comprarasion operator

/*

Equality operator (==) : it compare only value
Strict equality operator (===) : it compare value and data type both

let x = 10;
let y = "10";

console.log(x == y); // true    
console.log(x === y); // false

*/

// Grater than (>) : it compare value only

/*

let a = 10;
let b = 5;  
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true

console.log(10 !== 5); // true

*/

// Logical operator

// && (AND) : it return true if both condition are true
// true true => true
// true false => false
// false true => false
// false false => false

// || (OR) : it return true if any one condition is true

// && AND operator

// let email = "user@example.com";
// let password = "password123";
// let termcondition = true;

// console.log(email === "user@example.com" && password === "password123"); // true
// console.log(email === "user@example.com" && password === "password321"); // false
// console.log(
//   email === "user@example.com" &&
//     password === "password123" &&
//     termcondition === false,
// ); // false

// || OR operator   || => pipe
// true true => true
// false false => false
// true false => true
// false true => true

let email = "user@example.com";
let password = "password123";
let termcondition = true;

console.log(email === "user@example.com" || password === "password123"); // true
console.log(email === "user123@example.com" || password === "password321"); // false
console.log(
  email === "user321@example.com" ||
    password === "password321" ||
    termcondition === false,
); // true
