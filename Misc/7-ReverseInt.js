/**
 * @param {number} x
 * @return {number}
 */

//Only works for 32 int number
//To find out quickly, we can just set max = pow(2, 31)
var reverse = function(x) {
  let revNum =
    parseInt(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(x);

  return revNum >= -2147483648 && revNum <= 2147483648 ? revNum : 0;
};

reverse(-123);
