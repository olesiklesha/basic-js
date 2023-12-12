const { NotImplementedError } = require("../extensions/index.js");

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
function getDNSStats(domains) {
  const obj = {};
  let domain = "";
  let address = "";
  let indexDot = 0;

  domains.forEach((item) => {
    address = item;
    domain = "";

    while (address) {
      indexDot = address.lastIndexOf(".");
      if (indexDot !== -1) {
        domain += address.slice(indexDot);
        address = address.slice(0, indexDot);
      } else {
        domain += `.${address}`;
        address = "";
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

module.exports = {
  getDNSStats,
};
