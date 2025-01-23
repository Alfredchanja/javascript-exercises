const add = function(num1, num2) {
	const sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	const difference = num1 - num2;
  return difference;
};

const sum = function(num) {
	let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
};

const multiply = function(num) {
  let product = 1;
  for (let i = 0; i < num.length; i++) {
    product *= num[i];
  }
  return product;
};

const power = function(num1, num2) {
	let power = Math.pow(num1, num2);
  return power;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
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
