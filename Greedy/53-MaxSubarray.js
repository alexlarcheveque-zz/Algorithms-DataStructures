//Uses greedy algorithm (sees local max and global max)
//If sum + num[i] is less than num[i] itself, we then start a new subarray
//For the ans variable, we compare what global maxes we saw to the local max

//Runtime: O(n)
//Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let sum = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    ans = Math.max(ans, sum);
  }

  return ans;
};
