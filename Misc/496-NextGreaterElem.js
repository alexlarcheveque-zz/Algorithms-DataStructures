/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    let bool = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        bool = true;
      }

      if (nums1[i] < nums2[j] && bool) {
        arr.push(nums2[j]);
        break;
      } else if (j === nums2.length - 1) {
        arr.push(-1);
      }
    }
  }

  return arr;
};
