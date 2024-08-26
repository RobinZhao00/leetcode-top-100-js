/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  const rows = matrix.length
  const columns = matrix[0].length
  let columnWithZeros = []
  for (let i = 0; i < rows; i++) {
    const currentRow = matrix[i]
    const currentColumnWithZeros = currentRow.reduce((prev, curr, idx) => curr === 0 ? [...prev, idx] : prev,
      [])
    if (currentColumnWithZeros.length > 0) {
      matrix[i] = Array.from({ length: columns }).fill(0)
      columnWithZeros.push(...currentColumnWithZeros)
    }
  }
  columnWithZeros = [...new Set(columnWithZeros)].sort((a, b) => a - b)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columnWithZeros.length; j++) {
      matrix[i][columnWithZeros[j]] = 0
    }
  }
  console.log(matrix)
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]])
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])


const setZeroesV2 = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix)
};

setZeroesV2([[1,1,1],[1,0,1],[1,1,1]])
setZeroesV2([[0,1,2,0],[3,4,5,2],[1,3,1,5]])