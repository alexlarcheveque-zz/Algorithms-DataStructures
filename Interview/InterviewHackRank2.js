function simpleMaxDiff(arr) {
  let minPrice = arr[0];
  let maxProfit = -1;

  for (let i = 0; i < arr.length; i++) {
    if (minPrice > arr[i]) {
      minPrice = arr[i];
    } else if (arr[i] - minPrice > 0 && arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }
  }
  return maxProfit;
}

simpleMaxDiff([7, 1, 2, 5]);
