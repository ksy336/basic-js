const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  //const date = new Date();
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date) || date.hasOwnProperty('toString')) {
    throw new Error();
  }
  let months = date.getMonth();
  if (months === 11 || months <= 1) {
    return 'winter';
  } else if (months <= 4 && months > 1) {
    return 'spring';
  } else if (months <= 7  && months > 4) {
    return 'summer';
  } else if (months <= 10  && months > 7) {
    return 'autumn';
  }

};
