const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const n = matrix[0].length; 
  const mask = Array(n).fill(1);
  let total = 0;
  for (const row of matrix)
    for (let i = 0; i < n; ++i) {
      total += mask[i] * row[i];
      mask[i] &= !!row[i];
    }
  return total;
}

module.exports = {
  getMatrixElementsSum
};
