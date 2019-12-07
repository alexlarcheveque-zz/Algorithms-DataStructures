// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution: Map each String, reformat strings using regExpression (ignores whitespace + punct.)
//Iterate through the map using Object.keys.length() to make sure the maps have equal keys (not an anagram if this is false)
//Iterate through each key to check if key-pairs are equal
function anagrams(stringA, stringB) {
  strAMap = {};
  strBMap = {};
  strAMap = mapStrings(stringA.replace(/[^\w]/g, "").toLowerCase(), strAMap);
  strBMap = mapStrings(stringB.replace(/[^\w]/g, "").toLowerCase(), strBMap);

  if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
    return false;
  } else {
    for (let key in strAMap) {
      if (strAMap[key] !== strBMap[key]) {
        return false;
      }
    }
    return true;
  }
}

function mapStrings(string, map) {
  for (let character of string) {
    if (!map[character]) map[character] = 1;
    else map[character]++;
  }
  return map;
}

module.exports = anagrams;
