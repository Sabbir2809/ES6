// Object
let person = {
  name: "Sabbir Hossain",
  age: 24,

  varsityInfo: {
    id: "192-15-2809",
    department: "CSE",
    versityName: "DIU",
    sectionName: "PC-A",
    semester: 11,
  },
  
  phone: "01829723692",

  webSkills: {
    fontEnd: ["HTML", "CSS", "JavaScript", "React.JS"],
    mernStact: ["MongoDB", "Express.JS", "React.JS", "Node.JS"],
  },
};

console.log(person["varsityInfo"]["id"]);
console.log(person.webSkills.mernStact);

// for...in - Loop
for (let props in person) {
  console.log(props);
  // console.log(person[props]);
  console.log(props+ "= "+person[props]);
}
