
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  let arr = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  /*for (let i = 0; i < rows; i++) {
  *  for (let j = 0; j < cols; j++) {
  *    if (i % 2 === 0) {
  *      arr.push(matrix[i][j]);
  *    } else {
  *      arr.push(matrix[i][cols-j-1]);
  *    }
  *  }
  }*/
  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      arr.push(matrix[i].slice());
    } else {
      arr.push(matrix[i].reverse().slice());
    }
  }
  return arr.flat();
}
