/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  //Use trim to remove white spaces
  let arr = s.trim().split(" ");

  if (!arr[arr.length - 1]) return 0;

  return arr[arr.length - 1].length;
};
