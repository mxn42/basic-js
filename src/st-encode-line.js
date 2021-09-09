import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let res = '';
  let prev = '', count = 1;
  for (const c of str)
    if (prev === c)
      count += 1;
    else {
      res += `${count !== 1 ? count : ''}${prev}`;
      prev = c, count = 1;
    }
  res += `${count !== 1 ? count : ''}${prev}`;
  return res;
}
