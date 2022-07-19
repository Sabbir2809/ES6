/* 
using var keyword:
  - var can be Re-Declared & Re-Assigned a value.
*/
var favoriteColor = "White";
favoriteColor = "Black"; // Re-Assigned
var favoriteColor = "PowderBlue"; // Re-Declared
console.log(favoriteColor);

/*
Using let keyword:
  - Block Scope.
  - can be Re-Assigned a value.
  - let can't be Re-Declared.
*/
let id = 2808;
id = 2809; // Re-Assigned
// let id = "192-15-2809";
console.log(id);

/* 
Using const keyword:
  - it is Block Scope.
  - It can't be Re-Assigned and Re-Declared a value.
*/
const varsityName = "DIU";
// varsityName = "DSC";
console.log(varsityName);



// Global Scope
let department = "CSE";
function globalScope() {
  console.log(department);
}
globalScope();


// Local Scope
function localScope() {
  let language = "JS";
  console.log(language);
}
localScope();
