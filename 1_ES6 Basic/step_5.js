// Dynamic Function: Function by using the function constructor

// 1. void dynamic function
let inFo = function () {
  let name = 'Sabbir Hossain';
  let ID = '192-15-2809';
  console.log(name, ID);
};
inFo();

// 2. parameterized dynamic function
let developer = function (nameValue) {
  return nameValue;
};
console.log(developer("I'm a Web Developer!"));
