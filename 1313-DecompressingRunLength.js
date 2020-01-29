//RunTime --> Still O(n^2), even though we are running n/2 for first loop
//Space --> O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let ansArr = [];
  let freq = 0;
  let val = 0;

  for (let i = 0; i < nums.length; i = i + 2) {
    let freq = nums[i];
    let val = nums[i + 1];

    for (let i = 0; i < freq; i++) {
      ansArr.push(val);
    }
  }
  return ansArr;
};
