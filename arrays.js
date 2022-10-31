//  An array is a special variable, which can hold more than one value:
//  Creating an Array
//

//  Syntax:

//  var array_name = [item1, item2, ...];

var students = ["vasu", "janeesh", "ayush"];
var lowGrades = [];

lowGrades.push(students[0]); //pushing data in empty arrays

console.log("total students:" + students);
console.log("students with low grades:" + lowGrades);

// access data out of an array

var students = ["vasu", "janeesh", "ayush"];
var lowGrades = [];

lowGrades.push(students[0]); //pushing data in empty arrays

var index = lowGrades.indexOf("vasu");

console.log(lowGrades);

if (index > -1) {
  lowGrades.splice(index, 1);  ////removing data from the array
}

console.log("total students:" + students);
console.log("students with low grades:" + lowGrades);
