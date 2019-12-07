// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution 3: Using for loop and using the current index to check reversed array
function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
}

module.exports = palindrome;

// //Solution 1: Reversing a String and Iterating through that
// function palindrome(str) {
//   const reversed = str
//     .split("")
//     .reverse()
//     .join("");

//   return str === reversed;
// }

// //Solution 2: Use "every" array helper
// function palindrome(str) {
//   return str.split("").every((char, index) => {
//     return char == str[str.length - 1 - index];
//   });
// }
