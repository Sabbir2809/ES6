/*
  - Using rest parameter, a function can be called with any number of arguments
  - rest parameter is prefixed with three dots(...rest)
*/

function sum(a, ...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  console.log(a, sum);
}

sum(20, 1, 2, 3);
