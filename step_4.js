/*
  - Using rest parameter, a function can be called with any number of arguments
  - rest parameter is prefixed with three dots for example(...)
*/

function sum(a, ...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  console.log(sum);

}

sum(20, 3, 4, 5);
