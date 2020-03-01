/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;

  if (haystack.includes(needle)) {
    for (let i = 0; i < haystack.length; i++) {
      if (needle[0] === haystack[i]) {
        if (haystack.substring(i, needle.length + i) === needle) {
          return i;
        }
      }
    }
  }
  return -1;
};
