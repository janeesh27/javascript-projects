//   == equal to
//   <= less than or equal to
//   >= greatrer than or equal to

var mybalance = 300;
var nikeshoes = 79.99;

if (nikeshoes <= mybalance) {
  mybalance -= nikeshoes;
  console.log("you bought new shoes");
  console.log("Account Balance: " + mybalance);
}

// if the price of the shoes exceed the acc balance

var mybalance = 300;
var nikepremiumshoes = 799.99;

if (nikepremiumshoes <= mybalance) {
  mybalance -= nikeshoes;
  console.log("you bought new shoes");
  console.log("Account Balance: " + mybalance);
} else {
  console.log("insufficent balance");
  console.log("Account Balance:" + mybalance);
}

// adding a another var of coupon

var mybalance = 300;
var nikepremiumshoes = 799.99;
var coupon = 500;

if (nikepremiumshoes <= mybalance) {
  mybalance -= nikepremiumshoes;
  console.log("you bought new shoes");
  console.log("Account Balance: " + mybalance);
} else if (nikepremiumshoes <= coupon + mybalance) {
  mybalance -= nikepremiumshoes - coupon;
  console.log("you bought shoes with your coupon");
  console.log("Account Balance:" + mybalance);
} else {
  console.log("insufficent balance");
  console.log("Account Balance:" + mybalance);
}

// === and == difference


// ## ==
var value1 = 22;
var value2 = "22";

if (value1 == value2) {
  console.log("same values");
} else {
  console.log("not same values");
}

//## ===

var value1 = 22;
var value2 = "22";

if (value1 === value2) {
  console.log("same values");
} else {
  console.log("not same values");
}
