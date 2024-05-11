// Dynamic/Named Function: Function by using the function constructor

// 1. void dynamic function
const inFo = function () {
  const name = "Sabbir Hossain";
  const ID = "192-15-2809";
  console.log(name, ID);
};
inFo();

// 2. parameterized and return dynamic function
const developer = function (nameValue) {
  return nameValue;
};
console.log(developer("I'm a Web Developer!"));
