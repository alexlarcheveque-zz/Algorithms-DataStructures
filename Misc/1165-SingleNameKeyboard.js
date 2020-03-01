//Runtime --> O(n)
//Space --> O(n)

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let myMap = {};
  let myWordArr = word.toString().split("");
  let add = 0;

  for (let i = 0; i < keyboard.length; i++) {
    if (!myMap[i]) {
      myMap[keyboard[i]] = i;
    }
  }

  let prev = 0;

  for (let alpha of myWordArr) {
    add += Math.abs(myMap[alpha] - prev);
    prev = myMap[alpha];
  }
  return add;
};
