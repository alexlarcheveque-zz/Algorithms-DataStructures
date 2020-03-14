/*
Example:
["cat", "dog", "dog"]
["a", "b", "b"]
returns True

["hat", "mat", "kick"]
["a", "b", "a"]
returns False
*/

//Runtime --> O(N)
//Space --> O(N)

const Question1 = (arr1, arr2) => {
  let arrMap = new Map();
  let arrMap2 = new Map();

  for (let i = 0; i < arr1.length; i++) {
    if (arrMap.has(arr[i])) {
      arrMap.set(arr[i], arrMap.get(arr[i])++);
    } else {
      arrMap.set(arr[i], 1);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arrMap2.has(arr2[i])) {
      arrMap2.set(arr2[i], arrMap2.get(arr2[i])++);
    } else {
      arrMap2.set(arr2[i], 1);
    }
  }

  if (arrMap.length == arrMap2.length) {
    return true;
  }

  return false;
};
