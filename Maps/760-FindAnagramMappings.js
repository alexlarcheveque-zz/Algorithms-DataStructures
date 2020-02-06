//Time --> O(n)
//Space --> O(n)

var anagramMappings = function(A, B) {
  let myMap = {};
  let ans = [];

  //map B
  for (let i = 0; i < A.length; i++) {
    myMap[B[i]] = i;
  }

  for (let num of A) {
    ans.push(myMap[num]);
  }

  return ans;
};

//Time --> O(n), but less than the above function
//Space --> O(1)

var anagramMappings = function(A, B) {
  return A.map(num => {
    return B.indexOf(num);
  });
};
