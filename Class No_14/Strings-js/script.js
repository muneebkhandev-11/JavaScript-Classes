// 25
//  Split Method in strings-js
// split method convert a string into an array

// what kind of symobole we can use to split a string into an array. we can use any symbol like comma, pipe, @, etc.

// let skill_1 = "JavaScript , HTML , CSS , React , Node.js";
// let skill_2 = "JavaScript | HTML | CSS | React | Node.js";
// let skill_3 = "JavaScript @ HTML @ CSS @ React @ Node.js";
// let skillArray = skill_3.split(" @ ");
// console.log(skillArray);

// 26
// Join Method in strings-js
// join method convert an array into a string
// let skillArray = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
// let skillString = skillArray.join(" | ");
// console.log(skillString);

// interview question: what is the difference between split and join method in strings-js?

// let word = prompt("Enter a word:");
// let convert_into_string = word.split("").reverse().join("");
// these three same line of upper code can be written in one line of code
// let convert_into_array = word.split("");
// let reverse_array = convert_into_array.reverse();
// let convert_into_string = reverse_array.join("");

// if (word === convert_into_string) {
//     console.log(`${word} is a palindrome`);
// }
// else {
//     console.log(`${word} is not a palindrome`);
// }

// Practice
// Q : 1
// const fullname = `Muneeb Khan`;
// console.log(fullname);
// console.log(fullname.charAt(fullname)); //finding first character
// console.log(fullname.at(-1)); //finding last character
// console.log(fullname.length);  // finding length

// Q : 2
// const text = `JavaScript is Power full`
// console.log(text.toUpperCase());  // upper Case letter
// console.log(text.toLowerCase()); // lower Case letter

// Q : 3
// Cleaning Code
// const name = `       Muneeb         `
// console.log(name.trim()); // Remove Spaces

// Q : 4
// Searching Value

const search = `I like JavaScript`;
// // const searchagain = `JavaScript`;
// // console.log(search.toUpperCase().includes(searchagain.toLowerCase));
console.log(search.includes("Java"));

// Q : 5

// Extract Value
const email = "muneebkhan13@.example.com";
console.log(email.slice(6, 10));

// Q : 6
// Converting Veriable into array

// let namess = "Muneeb ,Khan, Afridi, Janan, Jani, Nice ,Person";
// let names = "Muneeb |Khan| Afridi| Janan| Jani| Nice |Person";
// console.log(names.split("|"));
// console.log(namess.split(","));

// Mini Project

function FormatUserProfiles(name, City, Role) {
  return `Name : ${name}\nCity :${City}\nRole : ${Role}`;
}
console.log(FormatUserProfiles("muneeb", " Peshawar", "dev"));
