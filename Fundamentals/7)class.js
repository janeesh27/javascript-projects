// JavaScript Classes

// JavaScript Classes are templlates for JavaScript Objects.

// class ClassName {
//  constructor() { ... }
//
//    }

// example from https://www.w3schools.com/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

var date = new Date();
var year = date.getFullYear();

var myCar = new Car("Ford", 2014);

console.log('my car is '+ myCar.age(year)+ ' years old')
