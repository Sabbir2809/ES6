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

// without static - object এর মাধ্যমে কল করতে হবে
obj.FrontEnd();
// with static - class এর মাধ্যমে কল করতে হবে
FullStack.BackEnd();
