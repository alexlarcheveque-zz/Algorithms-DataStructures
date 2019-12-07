// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 1: Turns string into array, calls reverse() method, turns array back into string
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

//Solution 2: Iterates through an array, a prints each letter before the empty String
function reverse(str) {
  let revStr = "";

  for (let characters of str) {
    revStr = characters + revStr;
  }

  return revStr;
}

//Solution 3: Using Reduce array helper (more advanced!)
// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

module.exports = reverse;
