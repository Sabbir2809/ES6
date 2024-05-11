/*
  Arrow Function:
    - To write smaller function syntax and Arrow functions make your code more readable and structured.
    - Arrow functions are anonymous functions and Can declare without the function keyword.
*/

const message = (msg) => console.log(msg);
message("I'm a Arrow Function.");

const numbers = (...n) => console.log(n);
numbers(1, 9, 2, 1, 5, 2, 8, 0, 9);

const arrowReturnFunction = () => {
  return "Hello, Arrow Function.";
};
console.log(arrowReturnFunction());
