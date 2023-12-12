const { NotImplementedError } = require("../extensions/index.js");

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
  let sort = [];

  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        sort.push(undefined);
        i++;
        break;
      case "--discard-prev":
        sort.pop();
        break;
      case "--double-next":
        if (arr.length > i + 1) sort.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (sort.length != 0) sort.push(sort[sort.length - 1]);
        break;
      default:
        sort.push(arr[i]);
        break;
    }
  }

  let newSort = sort.filter((item) => item != undefined);

  return newSort;
}

module.exports = {
  transform,
};
