module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return 1 + (arr.length > 0 ? Math.max(...(arr.map(el => Array.isArray(el) ? this.calculateDepth(el) : 0))) : 0);
  }
};
