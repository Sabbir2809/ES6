// Condition: Use to Decision Making

const sabbirObject = {
  fullName: "Sabbir Hossain",
  age: 24,
  email: "sabbirto13@gmail.com",
  phone: "01829723692",
  bloodGroup: "A+",
  favoriteColor: "Black",
  address: "Singair, Manikganj",

  versityInfo: {
    name: "DIU",
    department: "CSE",
    semester: 12,
    id: "192-15-2809",
    batch: 53,
  },
};

if (sabbirObject["versityInfo"]["semester"] <= 3) {
  console.log("First Year");
} else if (sabbirObject["versityInfo"]["semester"] <= 6) {
  console.log("Second Year");
} else if (sabbirObject["versityInfo"]["semester"] <= 9) {
  console.log("Third Year");
} else {
  console.log("Final Year and Graduate(Alumni)");
}
