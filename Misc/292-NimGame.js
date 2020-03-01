//Time --> O(1)
//Space --> O(1)

var canWinNim = function(n) {
  if (n === 0) return 0;
  if (n % 4 === 0) return false;
  return true;
};
