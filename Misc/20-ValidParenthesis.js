/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];

  for (let char of s) {
    console.log(char);
    console.log(stack);
    if (char === "(") stack.push(")");
    else if (char === "{") stack.push("}");
    else if (char === "[") stack.push("]");
    else if (stack.length === 0 || stack.pop() !== char) return false;
  }
  return true;
};

isValid("[()]");
