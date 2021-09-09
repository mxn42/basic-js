import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const count = (x, char) => x.split(char).length - 1;
  const min = c => Math.min(count(s1, c), count(s2, c));
  return [...new Set(s1)].reduce((k, c) => k + min(c), 0);
}
