/*
For (initialization, condition, update) {
body of the loop
}





*/

// for (let i = 1; i <= 10; i++) {
// if (i % 2 === 0) console.log("Hassan " + i);
// if (i % 2 !== 0) console.log("Hassan " + i);
// }

/*
Experiments With for Loop
How many even numbers are there between 15 to 45
How many odd numbers are there between 15 to 45
find odd numbers in range of 15 to 45
find even numbers in range of 15 to 45

*/
// let evenNumberCount = [];
// for (let i = 15; i <= 45; i++) {
//   if (i % 2 === 0) {
//     evenNumberCount.push(i);
//   }
// }
// console.log(evenNumberCount);
// console.log("Total Even Numbers: " + evenNumberCount.length);

// const fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
// const input_Fruit = prompt("Enter a fruit name: ");
// for (const fruit of fruits) {
//   // console.log(fruit);
//   // console.log(fruit.length);
// }

// const fruits = ["apple", "banana", "mango", "grapes", "kiwi"];
// const input_Fruit = prompt("Enter a fruit name: ");
// for (const fruit of fruits) {
//   // console.log(fruit);
//   // console.log(fruit.length);
//   if ( input_Fruit== fruit) {
//     console.log("Yes , " + input_Fruit + " is available in the list.");
//   }
//   else if (input_Fruit !== fruit) {
//     console.log("No , " + input_Fruit + " is not available in the list.");
//   }
// }

// break

// const students = ["zahid", "ali", "muneeb"];
// const input_student = prompt("enter your student name");
// for (const student of students) {
//   if (input_student === student) {
//     console.log("Yes :" + student + "  Is Present");
//     break;
//   }
// }

// continue

// for (let a = 0; a < 10; a++) {
//   if (a % 2 == 0) {
//     continue;
//   }
//   console.log(a);
// }

// Print Number

// for (let a = 1; a <= 10; a++) {
//   console.log(a);
// }

// Even Number

// for (let a = 1 ; a <= 50 ; a++)
// {
//     if (a % 2 == 0){
//         console.log(a)
//     }
// }

// Countdown

// for (let a = 10; a >= 1; a--) {
//   console.log("Happy New Year :", a);
// }

// Multiplication table

// let user = prompt("enter Number :");
// for (let i = 1; i <= 10; i++) {
//   console.log(i, "x", user, "=", i * user);
// }

// Number Guessing Game 🎯

let secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {
    guess = Number(prompt("Secret number guess karo:"));

    if (guess < secretNumber) {
        alert("Number chhota hai!");
    } 
    else if (guess > secretNumber) {
        alert("Number bara hai!");
    } 
    else {
        alert(" Correct! Tum jeet gaye!");
    }
}
