//BRUTE FORCE METHOD
//Time: O(N^2)
//Space: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (height[i] > height[j]) {
        area = height[j] * (j - i);
      } else {
        area = height[i] * (j - i);
      }

      if (area > max) {
        max = area;
      }
    }
  }
  return max;
};

//TWO-POINTER METHOD
//Time: O(N)
//Space: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let begPoint = 0;
  let endPoint = height.length - 1;
  let area = 0;

  while (begPoint < endPoint) {
    if (height[begPoint] > height[endPoint]) {
      if (height[endPoint] * (endPoint - begPoint) > area) {
        area = height[endPoint] * (endPoint - begPoint);
      }
      endPoint--;
    } else {
      if (height[begPoint] * (endPoint - begPoint) > area) {
        area = height[begPoint] * (endPoint - begPoint);
      }
      begPoint++;
    }
  }

  return area;
};
