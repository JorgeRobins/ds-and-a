// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let previous = 1;
  let current = 1;
  for (i = 3; i <= n; i++) {
    latest = previous + current;
    previous = current;
    current = latest;
  }
  return current;
} // O(n)

function fibonacciRecursive(n) {
  //code here;
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
} // O(2^n) - BAD!

console.log(fibonacciIterative(1));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(8));

console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(8));
