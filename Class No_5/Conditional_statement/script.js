// Condition Statement Of Js

/*

If :
else:
else if:

Ternary Operator:
condition ? "Fullfilled" : "Failed"

Switch Statement:
Switch (condition) {
case 1 :
    log 
    case 2 :
    log
    default:
    message 

}
*/

// let age = 10;

// syntax:
// if (condition) {
//     conole.log("message");
// }

// if (age >= 18) {
//   document.write("You are eligible for vote");
// } else {
//   document.write("You are not eligible for vote");
// }

// let age = Number(prompt("Enter your age: ", 18));
// let gender = prompt("Enter your gender: ", "male");

// alternative of : if and else

// let result =
//   age >= 18 ? "You are eligible for vote" : "You are not eligible for vote";

// document.write(result);

// if (age >= 18 && gender == "male") {
//   document.write("You are eligible for vote");
// } else if (age >= 18 && gender == "female") {
//   document.write("Please visit the Female voting section");
// } else {
//   document.write("Please enter the correct age and gender");
// }

// PRACTICE AND TASK GIVEN BY CHATGPT

// output will show on console

// let Marks = prompt("Enter your Marks", 100);

// if (Marks >= 80) {
//   console.log("Excellent");
// } else if (Marks >= 60) {
//     console.log("Good");
//   } else if (Marks >= 40) {
//       console.log("pass");
//     } else {
//         console.log("fail");
//       }

// Output will show on Brower page

// let Marks = prompt("Enter your Marks", 100);

// if (Marks >= 80) {
//   document.write("Excellent");
// } else if (Marks >= 60) {
//     document.write("Good");
//   } else if (Marks >= 40) {
//       document.write("pass");
// } else {
//     document.write("fail");
//   }

//   let username = prompt("PLease Enter Your Username", "username123");
//   let password = prompt("Please Enter Your Password", "password123");

//   if (username == "admin" && password == "example123") {
//       document.write("Login Succsecfuly");
//     } else if (username == "admin" && password == "123467") {
//         document.write("please Enter correct Password");
//       } else if (username == "khan" && password == "example123") {
//           document.write("invaled Email");
//         } else {
//             document.write("Inavlid Email or Password");
//           }

let Marks = prompt("Enter your Marks", "60");
let attendence = prompt("Enter your Attendence", "50");

if (Marks >= "75" && attendence >= "40") {
  document.write("Your are Pass");
} else if (Marks >= "75" && attendence <= "30") {
  document.write("Your Failled Due to Attendence");
} else if (Marks <= "50" && attendence >= "40") {
  document.write("Your are failled Due to Marks");
} else {
  alert("Your are failled Due to Marks and attendence");
}

// let amount = prompt("Enter Your shopping amout");
// let member = prompt("Are you member ? yes/no");

// if (amount >= 5000 && member == "yes") {
//   document.write("50% Discount");
// } else if (amount >= 5000 && member == "no") {
//   document.write("30% Discount");
// } else if (amount >= 3000 && member == "yes") {
//   document.write("30% Discount");
// }
// else {
//   alert("NO Discount For You")
// }

// let traficlight = prompt("Enter the trafic Color name");

// if (traficlight == "red") {
//   document.write("wait");
// } else if (traficlight == "yellow") {
//   document.write("Go!");
// } else {
//   document.write("Stop");
// }
