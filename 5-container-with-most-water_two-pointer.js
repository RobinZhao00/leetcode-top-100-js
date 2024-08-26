const maxArea = function (heights) {
  const { length } = heights
  let left = 0
  let right = length - 1
  let max = 0
  while (left <= right) {
    const currentArea = (right - left) * Math.min(heights[left], heights[right]);
    max = Math.max(max, currentArea);
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max
};