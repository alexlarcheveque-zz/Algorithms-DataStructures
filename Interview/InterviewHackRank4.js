function minUniqArr(arr) {
  let myMap = {};
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    while (myMap[arr[i]]) {
      arr[i]++;
    }
    myMap[arr[i]] = 1;
    sum += arr[i];
  }
  return sum;
}

minUniqArr([3, 2, 1, 2, 7]);
