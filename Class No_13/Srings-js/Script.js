// String is a sequence of characters used to represent text in JavaScript.
//  there are three way to define string : '' , "" , ``
// let fname = "Muneeb";
// let lname = "Khan";
// let full_Name = `My name is ${fname} ${lname}`;
// console.log(full_Name);
// console.log(fname);
// console.log(lname);

// let deatail_ = "My name is Muneeb Khan. I am a web 'developer'";
// let deatail_1 = 'My name is Muneeb Khan. I am a web "developer"';
// let deatail_2 = `My name is Muneeb Khan. I am a web 'developer' and "designer"`;
// console.log(deatail_);
// console.log(deatail_1);
// console.log(deatail_2);

// Stinge length
// console.log(deatail_.length);
// console.log(fname[4]);

// Slice method
// console.log(deatail_1.slice(2, 7));
// console.log(deatail_1.slice(-3));

// Substring and substr
// console.log(deatail_2.substring(2, 7)); as same as slice
// console.log(deatail_2.substr(-3)); also same as slice but it is deprecated

// lower and upper case
// console.log(lname.toUpperCase());
// console.log(deatail_2.toLocaleLowerCase());

// trim() method removes whitespace from both ends of a string
// let str = "   Hello World!   ";
// console.log(str.trim());

// let str = prompt("Enter a string:").trim();

// if (str === "Hello") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Include Method in strings
// let email = prompt("Enter your email:");
// if (email.includes("@")) {
//   console.log("Correct Email");
// } else {
//   console.log("Incorrect Email");
// }

// startwith and endswith method
// let str = "http://www.google.com";
// if (str.startsWith("https://")) {
//   console.log("This is a secure website.");
// } else {
//   console.log("This is not a secure website.");
// }

// end method
// if (str.endsWith(".com")) {
//   console.log("This is a commercial website.");
// }   
// else {
//   console.log("This is not a commercial website.");
// }

// indexOf and lastIndexOf method

// let str = "Hello World! Welcome to the World of JavaScript.";
// console.log(str.indexOf("World"));
// console.log(str.lastIndexOf("World")); 

// Replace method
    // let newStr = str.replace("World", "Universe");
    // console.log(newStr);

// replaceAll method
// let newStrAll = str.replaceAll("World", "Universe");
// console.log(newStrAll);

