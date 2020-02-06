//Time --> O(n)
//Space --> O(1)

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s, left = 0, right = s.length - 1) {
  if (left >= right) {
    return s;
  }

  //perform swap
  let temp = s[left];
  s[left] = s[right];
  s[right] = temp;

  return reverseString(s, left + 1, right - 1);
};
