/* 
  class constructor:
    - Constructor হচ্ছে class এর নিজেস্ব Method/Function
    - class থেকে object তৈরি হলেই, constructor অটো কল হয়
    - অনান্য function এর মতোই constructor কাজ কর কিন্তু constructor return করতে পারে না।
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
    return "Daffodil International University";
  }
}

let obj = new Department("DIU", "CSE");
console.log(obj.Print());
