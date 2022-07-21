// Map is a collection of Data.
let visitedDivision = new Map();

// keys & values pair.
visitedDivision.set("key1", "Dhaka");
visitedDivision.set("key2", "Sylhet");
visitedDivision.set("key3", "Rajshahi");
visitedDivision.set("key4", "Rongpur");
visitedDivision.set("key5", "Chittagong");
visitedDivision.set("key6", "Mymensingh");
visitedDivision.set("key7", "Khulna");

// simple array print
console.log(visitedDivision.values());
console.log(visitedDivision.keys());

// get() method
console.log(visitedDivision.get("key4"));
console.log();

// delete() Method
visitedDivision.delete("key4");

// loop use for values
for (let visitedValues of visitedDivision.values()) {
  console.log(visitedValues);
}

// has() method
if (visitedDivision.has("key4")) {
  console.log("\nI got at.");
} else {
  console.log("\nNo!");
}

// clear() method
visitedDivision.clear();

// loop use for keys
for (let visitedKeys of visitedDivision.keys()) {
  console.log(visitedKeys);
}
