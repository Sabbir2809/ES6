function Hi() {
  let msg = "Hi, I'm JavaScript";
  return msg;
}


function Hello() {
  return "Hello, I'm ES6";
}
console.log(Hello());


// Function Can be return another function.
function letsDoIt() {
  return Hi();
}
console.log(Hi());
