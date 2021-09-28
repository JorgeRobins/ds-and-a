// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number === 1 || number === 0) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
} // O(n)

function findFactorialIterative(number) {
  if (number < 0) {
    return "No negative factorials here";
  }
  if (number === 1 || number === 0) {
    return 1;
  }
  let answer = 1;
  for (i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
} // O(n)

console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(5));

console.log(findFactorialIterative(1));
console.log(findFactorialIterative(5));
