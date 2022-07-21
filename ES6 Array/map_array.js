// Map is a collection of Data.
let visitedDivision = new Map();

// keys & values pair.
visitedDivision.set("key1", "Dhaka");
visitedDivision.set("key2", "Sylhet");
visitedDivision.set("key3", "Rajshahi");
visitedDivision.set("key4", "Rongpur");
visitedDivision.set("key5", "Chittagong");
visitedDivision.set("key6", "Mymensingh");

// simple array print
console.log(visitedDivision.values());
console.log(visitedDivision.keys());

// loop use for values
for(let visitedValues of visitedDivision.values()){
  console.log(visitedValues);
}

// loop use for keys
for(let visitedKeys of visitedDivision.keys()){
  console.log(visitedKeys);
}