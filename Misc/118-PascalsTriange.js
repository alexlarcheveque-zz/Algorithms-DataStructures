//Runtime --> O(n^2)
//Space --> O(1)

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let prevArr = [];
  let arr = [];

  for (let i = 0; i < numRows; i++) {
    let currArr = [];

    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        currArr[j] = 1;
      } else {
        currArr[j] = prevArr[j] + prevArr[j - 1];
      }
    }

    arr.push(currArr);
    prevArr = currArr;
  }

  return arr;
};
