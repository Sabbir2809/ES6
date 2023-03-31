/*
  - A function without a name
  - It can be declared dynamically at runtime.
  - an anonymous function can be within a variable.
*/

let mul = function (x, y) {
  return x * y;
};
console.log(mul(5, 7));


let numbers = function (...n) {
  return n;
};
console.log(numbers(1, 2, 3, 4, 5, 6));
