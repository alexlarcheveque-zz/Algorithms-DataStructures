//Runtime --> O(n)
//Space --> O(1)
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    let num = n % 10;
    sum += num;
    product *= num;
    n = Math.floor(n / 10);
  }

  return product - sum;
};
