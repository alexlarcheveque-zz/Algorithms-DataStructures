/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0 || nums.length === 0) return 0;

  let myMap = new Map();
  let count = 0;

  for (let num of nums) {
    if (myMap.has(num)) {
      myMap.set(num, myMap.get(num) + 1);
    } else {
      myMap.set(num, 1);
    }
  }

  console.log(myMap);

  myMap.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (myMap.has(key + k)) count++;
    }
  });

  return count;
};
