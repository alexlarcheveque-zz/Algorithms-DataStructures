let counter = 0;

var recursiveReverseUpToN = function(s, n) {
  if (counter === n) {
    return s;
  }

  counter++;
  console.log(
    counter,
    s
      .substring(0, counter)
      .split("")
      .reverse()
      .join("") + s.substring(counter)
  );
  return recursiveReverseUpToN(
    s
      .substring(0, counter)
      .split("")
      .reverse()
      .join("") + s.substring(counter),
    n
  );
};

recursiveReverseUpToN("klmnasd", 4);
