const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(n) {
  const arr = String(n).split("");
  const arrayForSort = [];

  for (let i = 0; i < arr.length; i++) {
    const second = String(n).split("");

    for (let j = 0; j < arr.length; j++) {
      second.splice(i, 1);
      arrayForSort.push(Number(second.join("")));
      break;
    }
  }

  arrayForSort.sort((a, b) => a - b);
  return arrayForSort[arrayForSort.length - 1];
}

module.exports = {
  deleteDigit,
};
