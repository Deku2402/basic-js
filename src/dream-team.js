const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null) return false;
  let arr = [];
  let name;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string' && members[i] != 'undefined' && members[i] != 'null') {
      name = members[i].split("");
      for (let k = 0; k < name.length; k++) {
        if (name[k] != ' ') {
          name[k] = name[k].toUpperCase();
          arr.push(name[k]);
          break;
        }
      }
    }
  }
  arr = arr.sort();
  arr = arr.join("");
  return arr;

  throw new CustomError('Not implemented');
};
