class DIU {
  CSE() {
    console.log("CSE, Function inside class.");
  }
  SWE(p) {
    console.log(p + ", Function inside class.");
  }
  EEE() {
    console.log("EEE, Function inside class.");
  }
}

// Object Create
let diuObject = new DIU();

// Function Call
diuObject.CSE();
diuObject.SWE("SWE");
diuObject.EEE();
