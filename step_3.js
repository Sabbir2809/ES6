
let cheleBondhu = ["Sabbir", "Komol", "Salkin", "Mizan", "Maruf"];
let meyeBondhu = ["Shafa", "Zafrin", "Sajia"];

// Spread Operator - Array কে প্রশস্ত করে নতুন ভেলু যোগ করে।
// three dots(...)
let newFriend = [...cheleBondhu, ...meyeBondhu, "Zarin", "Sohan", "Nusrat"];
console.log(newFriend);

let friendZone = [...cheleBondhu, ...meyeBondhu];
console.log(friendZone);

// push method
let fullStack = ["HTML", "CSS", "JavaScript", "React.Js"];
let MERN = ["MongoDB", "Express.Js", "React.Js", "Node.Js",];

fullStack.push(MERN);
console.log(fullStack);