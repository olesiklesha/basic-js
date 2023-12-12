const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  if (!Array.isArray(arguments[0])) return false;
  let members = arguments[0].filter((item) => typeof item == "string");
  let UpperMembers = members.map((item) => item.toUpperCase().trim());
  let str = "";

  for (let item of UpperMembers) str += item[0];

  return str.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
