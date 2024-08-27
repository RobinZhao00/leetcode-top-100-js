/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length
  const columns = matrix[0].length
  const result = []
  const rowEnd = Math.floor(rows / 2)
  const columnEnd = Math.floor(columns / 2)
  let columnCount = 0
  let rowCount = 0
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {

    }
  }
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))


var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const midIdx = Math.floor((left + right) / 2)
    const mid = nums[midIdx]
    if (mid === target) {
      return midIdx
    } else if (mid > target) {
      right = midIdx
    } else {
      left = midIdx + 1
    }
  }
  return left
};
