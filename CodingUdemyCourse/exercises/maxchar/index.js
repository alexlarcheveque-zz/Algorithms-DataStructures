// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//Solution: Create Object (map), then add key-value pairs for new and existing characters
//Then, iterate through the object (map), and return the key-value pair with the max value
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (!charMap[char]) charMap[char] = 1;
    else charMap[char]++;
  }
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;
