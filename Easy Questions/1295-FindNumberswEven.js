//Runtime --> O(n)
//Space --> O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let counter = 0;

  for (let num of nums) {
    if (num.toString().split("").length % 2 == 0) counter++;
  }
  return counter;
};
