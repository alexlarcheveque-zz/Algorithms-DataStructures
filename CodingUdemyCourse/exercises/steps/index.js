// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (n === 0) return;
  let row = "";
  for (let i = n; i >= 0; i--) {
    if (i >= n) row += "#";
    else row += " ";
  }
  console.log(row);
  steps(n - 1);
}

module.exports = steps;

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       if (i >= j) {
//         row += "#";
//       } else {
//         row += " ";
//       }
//     }
//     console.log(row);
//   }
// }
