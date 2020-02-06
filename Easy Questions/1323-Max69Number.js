//Time --> O(n)
//Space-->O(n)

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  let numArr = num.toString().split("");

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== "9") {
      numArr[i] = "9";
      return numArr.join("");
    }
  }
  return num;
};

//Time --> O(n), but a lot less than the above item. Replace finds the first instance.
//Space --> O(1)

var maximum69Number = function(num) {
  return String(num).replace(6, 9);
};
