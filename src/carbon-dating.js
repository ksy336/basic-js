const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== 'string' || arguments.length === 0 || sampleActivity  >= 15 || sampleActivity <= 0) {
    return false;
  }
  if (isNaN(sampleActivity)) {
    return false;
  }
 let floatNumber = parseFloat(sampleActivity);
  const time = Math.ceil ( Math.log(MODERN_ACTIVITY / floatNumber) / (0.693 / HALF_LIFE_PERIOD));
  return time;
};
