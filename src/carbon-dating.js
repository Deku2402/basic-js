const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== "string" || sampleActivity > 15 || sampleActivity <= 0 || arguments.length == 0 || isNaN(sampleActivity)) {
    return false;
  }

  return Math.ceil(((Math.log(MODERN_ACTIVITY / sampleActivity)) / (Math.log(2)) * HALF_LIFE_PERIOD));
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
