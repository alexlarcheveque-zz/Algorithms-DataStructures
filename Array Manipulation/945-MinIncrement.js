//Time --> O(n)
//Space --> O(n)

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let myMap = {};
  let counter = 0;

  for (let i = 0; i < A.length; i++) {
    //while the Map contains the index, increament index and counter
    while (myMap[A[i]]) {
      A[i]++;
      counter++;
    }

    //when the Map doesn't contain the index, we will set new key-value pair in Map
    myMap[A[i]] = 1;
  }

  console.log(myMap);

  return counter;
};
