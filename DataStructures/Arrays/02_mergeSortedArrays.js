/*
 * Create a function that merges sorted Arrays
 * [0,3,4,31], [3,4,6,30] should merge to
 * [0,3,3,4,4,6,30,31]
 */

const firstArray = [0, 3, 4, 31];
const secondArray = [3, 4, 6, 30];

// 1: Using while loop
function mergeSortedArrays1(firstArray, secondArray) {
  // Check the input
  if (
    !firstArray ||
    !secondArray ||
    firstArray.isArray ||
    secondArray.isArray
  ) {
    return "Incorrect inputs";
  }
  if (firstArray.length === 0) {
    return secondArray;
  }
  if (secondArray.length === 0) {
    return firstArray;
  }
  const mergedArray = [];
  let firstArrayItem = firstArray[0];
  let secondArrayItem = secondArray[0];
  let i = 1;
  let j = 1;
  while (firstArrayItem || secondArrayItem) {
    //console.log(firstArrayItem, secondArrayItem);
    if (
      !firstArrayItem ||
      !secondArrayItem ||
      firstArrayItem < secondArrayItem
    ) {
      mergedArray.push(firstArrayItem);
      firstArrayItem = firstArray[i];
      i++;
    } else {
      mergedArray.push(secondArrayItem);
      secondArrayItem = secondArray[j];
      j++;
    }
  }
  return mergedArray;
}
console.log(mergeSortedArrays1(firstArray, secondArray));

// 2: ES6 Spread Operator and Sort Method
function mergeSortedArrays2(firstArray, secondArray) {
  // Check the input
  if (
    !firstArray ||
    !secondArray ||
    firstArray.isArray ||
    secondArray.isArray
  ) {
    return "Incorrect inputs";
  }
  if (firstArray.length === 0) {
    return secondArray;
  }
  if (secondArray.length === 0) {
    return firstArray;
  }
  return (mergedArray = [...firstArray, ...secondArray].sort((a, b) => a - b));
}
console.log(mergeSortedArrays2(firstArray, secondArray));
