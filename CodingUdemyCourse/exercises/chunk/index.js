// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//NEED TO WORK ON THIS!
//Solution 1: Use the array slice helper and use a while loop to iterate through the entire array
function chunk(array, size) {
  const chunkArray = [];
  let currIndex = 0;

  while (currIndex < array.length) {
    chunkArray.push(array.slice(currIndex, currIndex + size));
    currIndex = currIndex + size;
  }
  return chunkArray;
  //   return chunkArray;
}

module.exports = chunk;
