const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let a = true;

    const flatten = arr.reduce((s, e) => {
      if (Array.isArray(e)) {
        s.push(...e);
        a = false;
      } else {
        s.push(e);
      }
      return s;
    }, []);

    return a ? 1 : this.calculateDepth(flatten) + 1;
  }
};