//Given Map1 = { a:1, b:2, c: 3, d: 1}, Map2 = { b:2, c:4, d: 5}, output the differences between each
//Output: [{c: 4, d: 5}, {a: 1, c:3, d:1}]

var MapDiff = function(map1, map2) {
  let myMap1 = {};
  let myMap2 = {};

  //iterate through key1 in map1
  for (let key1 in map1) {
    //if key's are the same, then check value number
    if (map2[key1]) {
      if (map1[key1] !== map2[key1]) {
        myMap1[key1] = map2[key1];
      }
      //if a key is missing, then we will store into OTHER map
    } else if (!map2[key1]) {
      myMap2[key1] = map1[key1];
    }
  }

  //Repeat for second map
  for (let key2 in map2) {
    if (map1[key2]) {
      if (map2[key2] !== map1[key2]) {
        myMap2[key2] = map1[key2];
      }
    } else if (!map1[key2]) {
      myMap1[key2] = map2[key2];
    }
  }
  console.log(myMap1);
  console.log(myMap2);
  return [myMap1, myMap2];
};

MapDiff({ a: 1, b: 2, c: 3, d: 1 }, { b: 2, c: 4, d: 5 });
