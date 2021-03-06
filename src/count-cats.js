const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {

  if (arguments.length === 0 || matrix.length === 0) {
    return [];
  }
  let cat = '^^';
  let numberOfCats = 0;
  for (let j = 0; j < matrix.length; j++) {
    for (let n = 0; n < matrix[j].length; j++) {
      if (matrix[j][n] === cat) {
        return numberOfCats++;
      }

    }

  }

  return numberOfCats;
};



