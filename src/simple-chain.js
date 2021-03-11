const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    value === undefined ? value =('()'): value = (`( ${value} )`);
      this.chain.push(value)
      return this;

  },
  removeLink(position) {
  if (position === undefined || position < 1 || position > this.chain.length ||typeof position === (!'number')) {
          this.chain = [];
          throw new Error();

  } else {
    this.chain.splice(position - 1, 1);
    return this;
  }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {

    let res = this.chain.join("~~");
    this.chain = [];
    return res;

  },

};

module.exports = chainMaker;
