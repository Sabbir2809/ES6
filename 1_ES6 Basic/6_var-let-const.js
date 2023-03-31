/* 
1. using var keyword:
  - var can be Re-Declared & Re-Assigned a value
*/
var favoriteColor = 'White';
favoriteColor = 'Black'; // Re-Assigned
var favoriteColor = 'PowderBlue'; // Re-Declared
console.log(favoriteColor);

/*
2. Using let keyword:
  - Block Scope
  - can be Re-Assigned a value
  - let can't be Re-Declared
*/
let id = 2808;
id = 2809; // Re-Assigned
console.log(id);

/* 
3. Using const keyword:
  - it is Block Scope
  - It can't be Re-Assigned & Re-Declared a value
*/
const varsityName = 'DIU';
console.log(varsityName);

// Global Scope
let department = 'CSE';
function globalScope() {
  console.log(department);
}
globalScope();

function localScope() {
  // Local Scope, functional scope
  let language = 'JS';
  console.log(language);
}
localScope();
