/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    temp = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] === temp) {
        continue;
      } else {
        return prefix;
      }
    }
    prefix += temp;
  }
  return strs[0];
};
