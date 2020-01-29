//Runtime --> O(n) (I believe)
//Space --> O(1)

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
  return S.replace(/[a,e,i,o,u]/gi, "");
};
