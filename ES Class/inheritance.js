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
    console.log("There are Seven members in my family.");
  }
}

// Child Class
class Child extends Parent {
  // override method (Child Power)
  personalInfo() {
    let name = "Abdus Samad Khan";
    let address = "Kanainagar, Sahrail";
    let phoneNumber = "01715993056";
    let age = 65;

    console.log(name);
    console.log(address);
    console.log(phoneNumber);
    console.log(age);
  }
  // super keyword
  Details(){
    super.profession();   
    super.familyInfo();
  }
}

// Child Class object
let childObject = new Child();

childObject.personalInfo();

childObject.Details();
