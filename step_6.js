/* 
using var:
  - let can be Re-Declared.
  - can be Re-Assigned a value.
*/
var favoriteColor = "White";
favoriteColor = "Black"; // Re-Assigned
var favoriteColor = "PowderBlue"; // Re-Declared
console.log(favoriteColor);

/*
Using let
  - let keyword is Assigned the Block Scope.
  - let can't be Re-Declared.
  - can be Re-Assigned a value.
*/
let id = 2808;
id = 2809; // Re-Assigned
// let id = "192-15-2809";
console.log(id);

/* 
Using const:
  - It can't be re-assigned a value.
  - it is block scoped.
  - a constant can't be re-declared.
*/
const varsityName = "DIU";
// varsityName = "DSC";
console.log(varsityName);



// Global Scope
var department = "CSE";
function globalScope() {
  console.log(department);
}
globalScope();


// Local Scope
function localScope() {
  var language = "JS";
  console.log(language);
}
localScope();
