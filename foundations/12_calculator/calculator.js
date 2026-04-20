// Variables
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {

  let totalSum = 0;

	for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  return totalSum;
};

const multiply = function(arr) {

  let totalProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    totalProduct *= arr[i];
  }

  return totalProduct;

};

const power = function(base, exponent) {
	
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
};

const factorial = function(n) {
  
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
