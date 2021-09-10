import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const sn = String(n);
  return Math.max(0, ...sn.split``.map((x, i) => Number(`${sn.slice(0, i)}${sn.slice(i + 1)}`)));
}
