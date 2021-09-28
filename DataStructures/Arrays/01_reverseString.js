/*
 * Create a function that reverses a String
 * 'Hi my name is Jorge' should be
 * 'egroJ si eman ym iH'
 */

const sentence = "Hi my name is Jorge";

// 1: Using for loop
function reverse1(str) {
  // Check the input
  if (!str || str.length < 2 || typeof str != "string") {
    return "Incorrect inputs";
  }
  const reverseStr = [];
  const totalChars = str.length - 1;
  for (let i = totalChars; i >= 0; i--) {
    reverseStr.push(str[i]);
  }
  return reverseStr.join("");
}
console.log(reverse1(sentence));

// 2: Using inbuilt functions
function reverse2(str) {
  // Check the input
  if (!str || str.length < 2 || typeof str != "string") {
    return "Incorrect inputs";
  }
  return str.split("").reverse().join("");
}
console.log(reverse2(sentence));

// 3: ES6 Arrow Function
// An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.
const reverse3 = (str) => {
  if (!str || str.length < 2 || typeof str != "string") {
    return "Incorrect inputs";
  }
  return str.split("").reverse().join("");
};
console.log(reverse3(sentence));

// 4: ES6 Spread Operator
// Spread syntax can be used when all elements from an object or array
// need to be included in a list of some kind.
const reverse4 = (str) => {
  if (!str || str.length < 2 || typeof str != "string") {
    return "Incorrect inputs";
  }
  return [...str].reverse().join("");
};
console.log(reverse4(sentence));

// 5: Nested Function with Array
function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}
console.log(reverseString("yoyo master"));

// TODO:
// func should push first array item?
// func should push second?
