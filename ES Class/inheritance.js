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
  // 
}

// Child Class object
let childObject = new Child();
childObject.info();
childObject.profession();
