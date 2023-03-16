// ES6: 2. Spread Operator

let friendZone = ['Sakin', 'Mizan', 'Komol', 'Maruf', 'Shafa', 'Sajia', 'Zafrin'];

function getName(friendOne, friendTwo, friendThree) {
  console.log(friendOne, friendTwo, friendThree);
}
getName(...friendZone);

// Object
let students = {
  name: 'Sabbir Hossain',
  age: 24,
  hobbies: ['Web Developemt', 'MERN'],
};

let newStudent = {
  ...students,
  age: 23,
};
console.log(newStudent);
