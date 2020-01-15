//Using Greedy Algorithm to find the least number of coins (25, 10, 5, 1) to reach input

let coins = [25, 10, 5, 1];
let count = 0;

var Coins = function(input) {
  for (let i = 0; i < coins.length; i++) {
    while (coins[i] <= input) {
      input -= coins[i];
      count++;
    }
  }

  console.log(count);
  return count;
};

Coins(50);
