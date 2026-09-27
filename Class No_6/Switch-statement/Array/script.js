// let student = "ali";
// let student1 = "M ali";
// let student2 = "H ali";
// let student3 = "wali";
// let student4 = "M wali";

// let students = "ali ", "waqas" , "saqib " not acceptable like this

let students = ["ali ", "M ali", "H ali", "Wali", "M wali"];
// console.log(students[3]); this is for one only

// console.log(students.length);
// console.log(students[2]);
// console.log(students[3])
// console.log(students[4])
// console.log(students[students.length - 1]);

// when we want to add a value in the last of array
//before adding a value
// console.log(students);
// students.push("hello");
// after adding a value
// console.log(students);

// when we want to remove from last
// students.pop();
// console.log(students);

// when we want to add varaible in the first of Array
// students.unshift("arshid");
// console.log(students);
// when we want to remove a varaible from the first of Array
// students.shift()
// console.log(students)

// console.log(students);

// array_name.slice(start_index , ending_index)
// starting_index : included
// ending_index : excluded
// let top_10_students = students.slice(0,3)

// console.log(students.slice(0,3));

// for replace a varable with another
// students[2]= "Muneeb"
// console.log(students);

// students.splice (starting_index | delet_count | add_element |replace_element)
console.log(students);
// students.splice(3, 1);
// students.splice(3, 1, "hello");
students.splice(1, 0, "Muneeb");
// console.log(students);
console.log(students);


// for finding a value in the array means if the value is present it will return in bollen value (true or false)
console.log(students.includes("Muneeb"));


// for finding the index of a value in the array means if the value is present it will return the index of that value
console.log(students.indexOf("H ali"));



