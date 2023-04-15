const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  return arr
    .filter((_, i) => arr[i - 1] !== '--discard-next')
    .map((x, i) => x === '--double-next' && i + 1 < arr.length ? arr[i + 1] : x)
    .filter((_, i) => arr[i + 1] !== '--discard-prev')
    .map((x, i) => x === '--double-prev' && 0 < i ? arr[i - 1] : x)
    .filter(x => !['--discard-prev', '--discard-next', '--double-prev', '--double-next'].includes(x))
}

module.exports = {
  transform
};
