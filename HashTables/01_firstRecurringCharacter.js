/*
 * Google Question
 *
 * Given an array = [2,5,1,2,3,5,1,2,4]:
 * It should return 2
 * Given an array = [2,1,1,2,3,5,1,2,4]:
 * It should return 1
 * Given an array = [2,3,4,5]:
 * It should return undefined
 * Given an array = [2,5,5,2,3,5,1,2,4]:
 * It should return 5 because the pairs are before 2,2
 */

// 1: Naive solution, nested for loop
// Time Complexity: O(n^2)
function firstRecurringCharacter1(input) {
  // Check the input
  if (!input || input.isArray) {
    return "Incorrect inputs";
  }

  for (let i = 1; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (input[i] === input[j]) return input[i];
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter1([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringCharacter1([2, 3, 4, 5])); // undefined
console.log(firstRecurringCharacter1([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5

// 2: Array hash table implementation
// Time Complexity: O(n)
function firstRecurringCharacter2(input) {
  // Check the input
  if (!input || input.isArray) {
    return "Incorrect inputs";
  }

  const characters = new Array(input.length);
  for (i = 0; i < input.length; i++) {
    if (characters.includes(input[i])) {
      return input[i];
    } else {
      characters.push(input[i]);
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringCharacter2([2, 3, 4, 5])); // undefined
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5

// 3: Object hash table implementation
// Time Complexity: O(n)
function firstRecurringCharacter3(input) {
  // Check the input
  if (!input || input.isArray) {
    return "Incorrect inputs";
  }

  const map = {};
  for (i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
    //console.log(map);
  }
  return undefined;
}

console.log(firstRecurringCharacter3([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter3([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringCharacter3([2, 3, 4, 5])); // undefined
console.log(firstRecurringCharacter3([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5

// 4: Set implementation
// Time Complexity: O(n)
function firstRecurringCharacter4(input) {
  // Check the input
  if (!input || input.isArray) {
    return "Incorrect inputs";
  }

  const set = new Set();
  for (i = 0; i < input.length; i++) {
    if (set.has(input[i])) {
      return input[i];
    } else {
      set.add(input[i]);
    }
    //console.log(set);
  }
  return undefined;
}

console.log(firstRecurringCharacter4([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter4([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringCharacter4([2, 3, 4, 5])); // undefined
console.log(firstRecurringCharacter4([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5
