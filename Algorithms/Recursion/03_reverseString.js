//Implement a function that reverses a string using iteration...and then recursion!
//should return: 'yretsam oyoy'

let reversedString = [];
function reverseStringRecursive1(str) {
  let length = str.length;
  if (length === 0) {
    return reversedString.join("");
  }
  //console.log(str[length - 1]);
  reversedString.push(str[length - 1]);
  //console.log(reversedString);
  return reverseStringRecursive1(str.substring(0, length - 1));
}

console.log(reverseStringRecursive1("yoyo mastery"));

function reverseStringRecursive2(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive2(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive2("yoyo mastery"));
