const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTry;
  let time;
  minTry = Math.pow(2, disksNumber) - 1;
  time = minTry / (turnsSpeed / 3600);
  time = Math.floor(time);
  let result = {
    turns: minTry,
    seconds: time
  };

  return result;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
