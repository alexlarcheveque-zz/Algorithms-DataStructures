// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//Solution: We have to make many for loops where you basically iterate the outside of the box
//and do it again with a smaller, inner box. We make sure to declare empty arrays at the beginning
//of the problem.
function matrix(n) {
  matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  currCol = 0;
  lastCol = n - 1;
  currRow = 0;
  lastRow = n - 1;
  counter = 1;

  while (currCol <= lastCol && currRow <= lastRow) {
    for (let i = currCol; i <= lastCol; i++) {
      matrix[currRow][i] = counter;
      counter++;
    }
    currRow++;
    for (let i = currRow; i <= lastRow; i++) {
      matrix[i][lastCol] = counter;
      counter++;
    }
    lastCol--;
    for (let i = lastCol; i >= currCol; i--) {
      matrix[lastRow][i] = counter;
      counter++;
    }
    lastRow--;
    for (let i = lastRow; i >= currRow; i--) {
      matrix[i][currCol] = counter;
      counter++;
    }
    currCol++;
  }
  return matrix;
}

module.exports = matrix;
