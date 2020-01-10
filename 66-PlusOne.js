//Prompt --> Add a number to the last array as if it was a number

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  //For edge cases, where ex: 99999, and you would need to add a 1 to the beginning
  return [1, ...digits];
};
