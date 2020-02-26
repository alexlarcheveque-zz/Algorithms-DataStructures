function anagramDiff(a, b) {
  let ansArr = [];

  for (let i = 0; i < a.length; i++) {
    let myMapA = {};
    let myMapB = {};

    if (a[i].length !== b[i].length) {
      ansArr.push(-1);
      continue;
    }

    for (let letter of a[i]) {
      if (myMapA[letter]) {
        myMapA[letter]++;
      } else {
        myMapA[letter] = 1;
      }
    }

    for (let letter of b[i]) {
      if (myMapB[letter]) {
        myMapB[letter]++;
      } else {
        myMapB[letter] = 1;
      }
    }

    ansArr.push(checkDiff(myMapA, myMapB));
  }
  console.log(ansArr);
}

function checkDiff(myMapA, myMapB) {
  let diff = 0;

  for (let key in myMapA) {
    if (!myMapB[key]) {
      diff += 1;
    } else {
      diff = myMapA[key] - myMapB[key];
    }
  }

  return diff;
}

anagramDiff(["tea", "tea", "act"], ["ate", "toe", "acts"]);
