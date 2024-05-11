// Parent Class
class Parent {
  personalInfo() {
    let name = "Abdus Samad Khan";
    console.log(name);
  }
  profession() {
    console.log("Deed Writer");
  }
  familyInfo() {
    console.log("There are Six members in my family.");
  }
}

// Child Class
class Child extends Parent {
  // override method (Child Power)
  personalInfo() {
    let name = "Abdus Samad Khan";
    let address = "Kanainagar";
    let phoneNumber = "01715993056";
    let age = 65;

    console.log(`${name}, ${address}, ${phoneNumber}, ${age}`);
  }
  // super keyword (parent method inheritance)
  Details() {
    super.profession();
    super.familyInfo();
  }
}

// Child Class object
let childObject = new Child();

childObject.personalInfo();
childObject.Details();
