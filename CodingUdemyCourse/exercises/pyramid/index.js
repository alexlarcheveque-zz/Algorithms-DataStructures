// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Solution: Nested for-loop that finds middle index, then expands affected "#" area after iteration of each row
function pyramid(n) {
  const maxRow = n - 1;
  const maxCol = 2 * (n - 1);
  const middleIndex = Math.floor(maxCol / 2);

  for (let i = 0; i <= maxRow; i++) {
    let str = "";
    for (let j = 0; j <= maxCol; j++) {
      if (i <= maxRow && j >= middleIndex - i && j <= middleIndex + i) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

module.exports = pyramid;
