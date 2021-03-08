const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {

  if (arguments.length === 0 || matrix.length === 0) {
    return [];
  }

  return matrix.reduce(function (prev, curr) {
   return prev.concat(curr)}, []).filter(function(item) {
     return item === '^^';
  }).length;


  }






