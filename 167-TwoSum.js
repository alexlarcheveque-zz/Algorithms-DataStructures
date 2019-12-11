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
