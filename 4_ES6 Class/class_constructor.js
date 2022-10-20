/* 
  class constructor:
    - Constructor হচ্ছে class নিজেস্ব Method/Function
    - class object তৈরি হলেই, constructor অটো কল হয়
    - অন্য function এর মতোই constructor কাজ করে।
    - কিন্তু constructor return করতে পারে না।
*/

class Department {
  // parameterized constructor - not return
  constructor(v, d) {
    this.varsityName = v;
    this.departmentName = d;
    console.log(this.varsityName + " B.Sc in " + this.departmentName);
  }
  // method - return
  Print() {
    console.log("Daffodil International University");
  }
}

let obj = new Department("DIU", "CSE");
obj.Print();
