// JavaScript Functions

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// example 1
//function to find area of a reactangle

function area(length, width) {
  return length * width;
}
var area1 = area(10, 15);

console.log(area1);

//example 2

var accountBalance = 500;

function transaction(MRP) {
  if (MRP <= accountBalance) {
    accountBalance -= MRP;

    console.log("Purchase Complete. Account Balance:" + accountBalance);
  } else {
    console.log("insufficent Balance");
  }
}
var shoes = 1000;
var socks = 100;
transaction(shoes);
transaction(socks);
