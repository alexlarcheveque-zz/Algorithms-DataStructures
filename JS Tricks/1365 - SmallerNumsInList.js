//Time --> O(n)
//Space --> O(n)
const smallerNumbersThanCurrent = function(nums) {
  const sorted = nums.slice().sort((a, b) => a - b);

  const counter = [];

  nums.forEach(num => {
    counter.push(sorted.indexOf(num));
  });

  return counter;
};

//Brute Force
//Time --> O(n^2)
//Space --> O(1)
var smallerNumbersThanCurrent = function(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && i !== j) {
        count++;
      }
    }
    arr.push(count);
  }

  return arr;
};
