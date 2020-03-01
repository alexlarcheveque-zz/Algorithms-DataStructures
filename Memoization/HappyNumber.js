//Runtime --> O(1)
//Space --> O(log n)

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n, prevNum = {}) {
  let sum = 0;

  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    sum += rem * rem;
  }

  if (prevNum[sum]) {
    return false;
  } else {
    prevNum[sum] = 1;
  }

  if (sum === 1) {
    return true;
  } else {
    return isHappy(sum, prevNum);
  }
};
