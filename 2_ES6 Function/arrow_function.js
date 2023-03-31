/*
  Arrow Function:
    - To write smaller function syntax.
    - Arrow functions make your code more readable and structured.
    - Arrow functions are anonymous functions.
    - Can declare without the function keyword.
*/

let message = (msg) => {
  console.log(msg);
};
message("I'm a Arrow Function.");


let numbers = (...n) =>{
  console.log(n);
};
numbers(1, 9, 2, 1, 5, 2, 8, 0, 9);


let arrowReturnFunction = () => {
  return "Hello, Arrow Function."
};
console.log(arrowReturnFunction());

