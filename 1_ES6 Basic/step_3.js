// Spread Operator - Array কে Copy করে নতুন Value যোগ করে। (Efficient)
// three dots(...)

let cheleBondhu = ['Sabbir', 'Komol', 'Salkin', 'Mizan', 'Maruf'];
let meyeBondhu = ['Shafa', 'Zafrin', 'Sajia'];

let newFriend = [...cheleBondhu, ...meyeBondhu, 'Sohan', 'Nusrat'];
console.log(newFriend);

let friendZone = [...cheleBondhu, ...meyeBondhu];
console.log(friendZone);

// push method - Array এর মধ্যে আরেকটা Array যুক্ত হয়।
let fullStack = ['HTML', 'CSS', 'JavaScript', 'React.Js'];
let MERN = ['MongoDB', 'Express.Js', 'React.Js', 'Node.Js'];

fullStack.push(MERN);
console.log(fullStack);
