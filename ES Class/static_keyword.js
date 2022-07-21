class FullStack {
  // constructor
  constructor() {}
  // method
  FrontEnd() {
    console.log("React.Js");
  }
  // method
  static BackEnd() {
    console.log("Node.Js, Express.Js, MongoDB");
  }
}

// Object Create
let obj = new FullStack();

// without static - object
obj.FrontEnd();

// with static - class
FullStack.BackEnd();
