var MultiplyByGroup = function(arr, groupSize) {
  let answer = [];
  let counter = 0;
  let product = 1;

  if (arr.length % groupSize !== 0) return answer;

  for (let i = 0; i < arr.length; i++) {
    //checks if counter is equal to groupSize, then resets counter and product variables
    if (counter === groupSize) {
      answer.push(product);
      counter = 0;
      product = 1;
    }
    product *= arr[i];
    counter++;
  }
  answer.push(product);
  return answer;
};

MultiplyByGroup([10, 2, -8, 3], 2);
