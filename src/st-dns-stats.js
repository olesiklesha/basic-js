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
  const obj = {};
  let domain = '';
  let addres = '';
  let indexDot = 0;

  domains.forEach((item) => {
    addres = item;
    domain = '';

    while (addres) {
      indexDot = addres.lastIndexOf('.');
      if (indexDot !== -1) {
        domain += addres.slice(indexDot);
        addres = addres.slice(0, indexDot);
      } else {
        domain += `.${addres}`;
        addres = '';
      }

      if (obj[domain]) {
        obj[domain] += 1;
      } else {
        obj[domain] = 1;
      }
    }
  });

  return obj;
}
