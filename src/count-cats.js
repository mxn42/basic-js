import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  // 1 method [65ms] 
  // return matrix.flat().filter(x => x === '^^').length;

  // 2 method [53ms]
  // return matrix.reduce((total, row) => (total + row.reduce((line, cell) => line + (cell === '^^'), 0)), 0);

  // 3 method [46ms]
  // let total = 0;
  // for (const row of matrix)
  //   for (const cell of row)
  //     total += cell === '^^';
  // return total;

  // 4 method [39ms]
  let total = 0;
  for (let i = 0, row, n = matrix.length; i < n; ++i) {
    row = matrix[i];
    for (let j = 0, m = row.length; j < m; ++j)
      total += row[j] === '^^';
  }
  return total;
}
