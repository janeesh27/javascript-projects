// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// for loop

var total = 10;
for (var x = 0; x < total; x++) {
  console.log(x);
}
// this for loop will print values from 0-9

// for loop with array

var students = ['vasu', 'ayush', 'sanat', 'rahul', 'shubam'];

for (var index = 0; index < students.length; index++) {
  console.log(students[index]);
}
