// Write your solution in this file!
// Declare a variable in global scope called `customerName`
var customerName = 'bob';

// Write a function that accesses the global `customerName` variable and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that, when called, declares a variable `bestCustomer` in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a new function called `overwriteBestCustomer()` that changes the `bestCustomer` variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called `leastFavoriteCustomer` and assign it some initial value
const leastFavoriteCustomer = 'someone';

// Write a function called `changeLeastFavoriteCustomer()` that attempts to change the constant
function changeLeastFavoriteCustomer() {
  // This line will throw an error because you cannot reassign a value to a constant
  leastFavoriteCustomer = 'someone else';
}

// Exporting the functions for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer
};

