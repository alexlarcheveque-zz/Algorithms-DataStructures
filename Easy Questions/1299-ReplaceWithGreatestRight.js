//Runtime --> O(n^2)
//Space --> O(1)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let ansArr = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    ansArr.push(max);
  }

  ansArr[ansArr.length - 1] = -1;
  return ansArr;
};
