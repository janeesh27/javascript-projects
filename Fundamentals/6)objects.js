//JavaScript Objects
//You have already learned that JavaScript variables are containers for data values.

//Objects are variables too. But objects can contain many values.

// syntax: var ObjectName = {
//                 property1: value1,
//                 property2: value2,
//                 property3: value3,
//                 property4: value4
//                    };

// example1

var student1 = {
  firstName: "ayush",
  lastName: "gupta",
  age: 22,
};

console.log(student1.firstName);
console.log(student1.age);

//example2 other ways to create a abject

var student2 = new Object();
student2.firstName = "vasu"; // way 2
student2.lastName = "sharma";
student2.age = 21;

var student3 = {};
student3.firstName = "janeesh"; // way3
student3.lastName = "singh";
student3.age = 23;

// now to push this 3 students to an empty array

var students = [];
students.push(student1, student2, student3);

console.log(students);

// javascript objects with functions

var employees = [];

function Employee(first, last, age, salary) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.salary = salary;
}

employees.push(new Employee('janeesh', 'singh', 22, 600000));
employees.push(new Employee('vasu', 'sharma', 23, 700000));
employees.push(new Employee('ayush', 'gupta', 24, 900000));

console.log(employees);
