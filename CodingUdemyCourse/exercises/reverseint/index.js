// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// // Solution 1: Turn number into a String, then use reverse() array helper function to reverse
// function reverseInt(n) {
//   const revNum = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   if (n < 0) return parseInt(revNum) * -1;
//   else return parseInt(revNum);
// }

module.exports = reverseInt;

//Solution 2: Using Math and Remainders to Reverse Number
function reverseInt(n) {
  let abs = Math.abs(n);
  let revNum = 0;

  while (abs != 0) {
    revNum = 10 * revNum + (abs % 10);
    abs = Math.floor(abs / 10);
  }
  return Math.sign(n) * revNum; //Math.sign returns 1 if positive, -1 if negative
}
