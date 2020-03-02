//Time --> O(n)
//Space --> O(n)

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {
  let strArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      strArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      strArr.push("Buzz");
    } else if (i % 3 === 0) {
      strArr.push("Fizz");
    } else {
      strArr.push(i.toString());
    }
  }

  return strArr;
};
