// Set is a collection of data. set is almost like array but it does not contain any Duplicates value.
let colors = new Set();

colors.add("White");
colors.add("Black");
colors.add("Green");
colors.add("Green");
colors.add("Red");
colors.add("Yellow");
colors.add("Blue");

// delete() method
colors.delete("Green");

// values() method
console.log(colors.values());


// size() method
console.log(colors.size);

// Print Use Loop
for (let color of colors) {
  console.log(color);
}

// has() method
if(colors.has("Green")){
  console.log("\nYes");
}else{
  console.log("\nNo");
}

// clear() method
colors.clear();

// Print Use Loop
for (let color in colors) {
  console.log(color);
}

console.log(colors);
