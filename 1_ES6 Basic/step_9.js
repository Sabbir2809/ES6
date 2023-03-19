// Object
let person = {
  name: 'Sabbir Hossain',
  age: 24,

  varsityInfo: {
    id: '192-15-2809',
    department: 'CSE',
    varsityName: 'DIU',
    sectionName: 'PC-A',
    semester: 11,
  },

  phone: '01829723692',

  webSkills: {
    fontEnd: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
    mernStack: ['MongoDB', 'Express.JS', 'React.JS', 'Node.JS'],
  },
};

console.log(person['varsityInfo']['id']);
console.log(person.webSkills.mernStack);

// for...in - Object এর ক্ষেত্রে এই Loop টি ব্যবহার করা হয়।
for (let props in person) {
  // console.log(props);
  // console.log(person[props]);
  console.log(props + ' = ' + person[props]);
}
