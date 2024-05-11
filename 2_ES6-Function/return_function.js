function Hi() {
  let msg = "Hi, I'm JavaScript";
  console.log(msg);
  Hello();
}

function Hello() {
  return console.log("Hello, I'm ES6");
}

// Function Can be return another function.
function letsDoIt() {
  return Hi();
}
letsDoIt();
