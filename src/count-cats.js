module.exports = function countCats(matrix) {
  return matrix.flat().reduce((acc, val) => acc + (val === '^^' ? 1 : 0), 0);
};
