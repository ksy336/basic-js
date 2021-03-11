const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, options) {
  let repeatTimes = options.repeatTimes === undefined ? '1' : options.repeatTimes;
  let separator = options.separator === undefined ? '+' : options.separator;
  let addition = options.addition === undefined ? '' : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes === undefined ? '1' : options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator === undefined ? '|' :  options.additionSeparator;

  let newString = addition === '' ? '' : `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  return `${string}${newString}${separator}`.repeat(repeatTimes).slice(0, -separator.length);

};