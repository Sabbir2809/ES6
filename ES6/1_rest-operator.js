// ES6: 1. Rest Operator

function addNumbers(a, b, ...others) {
  let total = 0;
  for (let num of others) {
    total = total + num;
  }
  console.log(total);
  return a + b;
}
const result = addNumbers(10, 20, 3, 4, 5, 6, 7, 8, 9);
console.log(result);

// Object
let students = {
  name: 'Sabbir Hossain',
  age: 24,
  hobbies: ['Web Developemt', 'MERN'],
};
// const age = students.age;
const { name, ...rest } = students;
console.log(name, rest);
