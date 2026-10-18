// // addition function
// function add(a, b) {
//   let result = a + b;
//   console.log(`${a} +${b} = ${result}`);
// }
// add(12, 34);

// function info(age, name, city) {
//   console.log("my age is " + age);
//   console.log("my name is " + name);
//   console.log("my city  is " + city);
// }
// info(17, "zahid", "pes");
// // defult perameter
// function login(email, password, role = "buyer") {
//   console.log("email " + email + "password " + password + "role " + role);
// }
// login(
//   "test@gmail.com ",
//   "test123 ",
//   // , "seller "
// );

// function multy(a, b) {
//   //   return a + b;
//   return a * b;
// }

function addnum(a, b) {
  return a + b;
}
// let result = addnum(12, 12) + multy(4, 5);
console.log(addnum(3, 5));
// console.log(result);

// default perameter

// function great(name = "muneeb") {
//   console.log("hello " + name);
// }
// great();

// console.log Vs return

// function with condiitional statment

// function findResult(percent) {
//   if (percent >= 50 && percent <= 100) {
//     console.log("pass");
//   } else if (percent < 50 && percent > 0) {
//     console.log("fail");
//   } else {
//     ("invalid prompt");
//   }
// }
// let studentpercet = Number(prompt("Enter Num :"))
// console.log(findResult(studentpercet))



// const userdeatils = {
// emails: "admin@gmail.com",
// password: "sdmin123",
// role: "admin"

// }
// function CArole(email,password,role){
//     if(role== userdeatils.role)
//         console.log("you are allowed")
//   else{
//     console.log("you are not allowed")
//   }
// }
// let adminrole = prompt("Enter your role :")
// CArole("Test123@gmail.com", "test123", adminrole )
