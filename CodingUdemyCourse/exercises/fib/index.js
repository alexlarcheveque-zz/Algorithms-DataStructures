// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution 3: Solving Fibbonanci Recursively w/ Memoization
function memoizator(fn, memoMap = {}) {
  console.log("inside memoizator");
  return n => (memoMap[n] ? memoMap[n] : (memoMap[n] = fn(n)));
}

function slowFib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

const fib = memoizator(slowFib);

module.exports = fib;

// //Solution: Iterate through a for-loop, pre-determine the 0th and 1st numbers
// function fib(n) {
//   let fib = [];
//   fib[0] = 0;
//   fib[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib[n];
// }

// //Solution 2: Solving Fibbonanci Recursively
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }
