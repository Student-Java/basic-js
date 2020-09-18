const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return 1 + (arr.length && Math.max(...(arr.map(el => Array.isArray(el) && this.calculateDepth(el)))));
  }
};
