let chain = [];

let isValidPosition = position => Number.isInteger(position) || position < 0 || position > this.getLength() - 1;

let extractValue = value => {
  value = typeof value !== "undefined" ? value : '';
  return value === null ? 'null' : value
};

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(extractValue(value));
    return this;
  },
  removeLink(position) {
    if (!isValidPosition(position)) {
      throw Error();
    }
    chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    let chainView = `( ${chain.join(' )~~( ')} )`;
    chain = [];
    return chainView;
  }
};

module.exports = chainMaker;
