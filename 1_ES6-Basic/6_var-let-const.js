/* 
1. using var keyword:
  - var can be Re-Declared & Re-Assigned a value
  - function scope
*/
var favoriteColor = "White";
favoriteColor = "Black"; // Re-Assigned
var favoriteColor = "PowderBlue"; // Re-Declared
console.log(favoriteColor);

/*
2. Using let keyword:
  - Block Scope
  - can be Re-Assigned a value
  - let can't be Re-Declared
*/
let address = "Singair";
address = "Nabinagar"; // Re-Assigned
console.log(address);

/* 
3. Using const keyword:
  - Block Scope
  - It can't be Re-Assigned & Re-Declared a value
*/
const varsityName = "DIU";
console.log(varsityName);

/**
 * Three Type of Scope:
 * 1. Global Scope
 * 2. Function Scope / Local Scope
 * 3. Block Scope
 */

// 1. Global Scope
const department = "CSE";
function globalScope() {
  console.log(department);
  localScope();
}
globalScope();

function localScope() {
  // Local Scope, functional scope
  let language = "JS";
  console.log(language);
}
