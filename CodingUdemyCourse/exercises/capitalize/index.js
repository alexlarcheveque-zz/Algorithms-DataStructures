// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //Solution 1: Can check when element is white space, and triggers boolean var
// //If the boolean is marked true, then the next character will be capitalized
// //O(N) runtime
// function capitalize(str) {
//   const capString = "";
//   let boolSpace = true;

//   for (let element of str) {
//     if (boolSpace) {
//       capString += element.toUpperCase();
//       boolSpace = false;
//     } else {
//       capString += element;
//     }

//     if (element === " ") {
//       boolSpace = true;
//     }
//   }
//   return capString;
// }

module.exports = capitalize;

//Solution 2: Split the string into array on the spaces, and use UpperCase and slice methods to
//get proper capitalization. Then push into new array, and join.
function capitalize(str) {
  capWords = [];

  for (let word of str.split(" ")) {
    capWords.push(word[0].toUpperCase() + word.slice(1));
  }

  return capWords.join(" ");
}
