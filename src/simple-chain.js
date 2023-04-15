const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  delete() {
    this.chain.length = 0
  },
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value)
    return this;
  },
  removeLink(position) {
    position = position - 1
    if (typeof position !== 'number' || !Number.isInteger(position) || !(0 <= position && position < this.chain.length)) {
      this.delete()
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    const value = this.chain.map(x => `( ${x} )`).join('~~')
    this.delete()
    return value
  }
};

module.exports = {
  chainMaker
};
