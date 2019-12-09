// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// //Solution: Lower case string, then add a counter if we see a vowel
// function vowels(str) {
//   let counter = 0;

//   for (let character of str.toLowerCase()) {
//     if (
//       character == "a" ||
//       character == "e" ||
//       character == "i" ||
//       character == "o" ||
//       character == "u"
//     ) {
//       counter++;
//     }
//   }
//   return counter;
// }

module.exports = vowels;

// //Solution 2: Lower case string, uses "include" helper method to check if string includes vowels
function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) counter++;
  }
  return counter;
}

// //Solution 3: Using RegExp
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi); //g: iterates through whole string, //i: case insensitive
//   return matches ? matches.length : 0;
// }
