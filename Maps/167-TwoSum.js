/*
Input: Sorted Array numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

//Solution: Start with two pointers (one at the beginning and one at the end)
//If sum is smaller than target, then incremenet beginning pointer
//If sum is large thna target, the decrement end pointer
var twoSum = function(numbers, target) {
  let index1 = 0;
  let index2 = numbers.length - 1;

  while (index1 < numbers.length) {
    let sum = numbers[index1] + numbers[index2];
    if (sum === target) {
      return [index1 + 1, index2 + 1];
    } else if (sum < target) {
      index1++;
    } else {
      index2--;
    }
  }
};

twoSum([2, 7, 11, 15], 9);

//Using Single Array, and Finding if Array includes the Target - Num[i]
//Time: O(n^2) because .includes() is O(n)
//Space: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.includes(target - nums[i]) &&
      nums.indexOf(target - nums[i]) !== i
    ) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
};

//Time: O(n) --> Map search is constant time, O(1)
//Space: O(n) --> Hash map increases with n
//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let myMap = {};

  for (let i = 0; i < nums.length; i++) {
    myMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (myMap[target - nums[i]] && myMap[target - nums[i]] !== i) {
      return [i, myMap[target - nums[i]]];
    }
  }
};
