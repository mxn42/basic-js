import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const normalize = x => `.${x.split('.').map(x => x).reverse().join('.')}`;
  const stat = {};
  for (let domain of domains)
    while (domain) {
      const key = normalize(domain);
      stat[key] = (stat[key] || 0) + 1;
      domain = domain.includes('.') ? domain.substr(domain.indexOf('.') + 1) : '';
    }
  return stat;
}
