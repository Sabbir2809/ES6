// Parent Class
class Parent {
  info() {
    let name = "Abdus Samad Khan";
    console.log(name);
  }
  profession() {
    console.log("Deed Writer");
  }
}

// Child Class
class Child extends Parent {
  // override method (Child Power)
  info() {
    let name = "Abdus Samad Khan";
    let address = "Kanainagar, Sahrail";
    let phoneNumber = "01715993056";
    let age = 65;

    console.log(name);
    console.log(address);
    console.log(phoneNumber);
    console.log(age);
  }
}

// Child Class object
let childObject = new Child();

childObject.info();
childObject.profession();
