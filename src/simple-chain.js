const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    let sortChein = this.chain.filter((item) => item !== undefined);
    this.chain = sortChein;

    if (
      position < 1 ||
      !Number.isInteger(position) ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain[position - 1] = undefined;

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let sortChain = this.chain.filter((item) => item !== undefined);

    let str = "";

    sortChain.forEach(function (item) {
      str += `( ${item} )~~`;
    });

    this.chain = [];

    return str.slice(0, -2);
  },
};

module.exports = {
  chainMaker,
};
