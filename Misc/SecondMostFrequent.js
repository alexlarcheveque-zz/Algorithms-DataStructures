var secondMostFrequent = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    let most = null;
    let mostFreq = null;
    let secondMost = null;
    let secondMostFreq = null;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] === arr[i] && arr[j] !== secondMost && arr[j] !== most) {
        counter++;
      }
    }

    if (counter > most) {
      //push the most down to second most
      secondMost = most;
      secondMostFreq = mostFreq;
      //change the most to current i
      most = arr[i];
      mostFreq = counter;
    } else if (counter > secondMost) {
      secondMost = arr[i];
      secondMostFreq = counter;
    }
  }
  console.log(secondMost);
  return secondMost;
};

secondMostFrequent = [1, 3, 3, 3, 2, 1];
