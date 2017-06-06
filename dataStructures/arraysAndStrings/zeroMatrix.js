// given m by n matrix if find zero change everything in column and row to zero
const zeroMatrix = (matrix) => {
  const columns = {};
  const rows = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (rows[i] || columns[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(zeroMatrix([[5,4,1],[0,1,2],[3,4,8]]));