const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let currStr = String(str);

  if (options["addition"] !== undefined) {
    let addStr = String(options["addition"]);

    if (options["additionRepeatTimes"]) {
      for (let i = 1; i < options["additionRepeatTimes"]; i++) {
        if (options["additionSeparator"]) {
          addStr += options["additionSeparator"] + String(options["addition"]);
        } else {
          addStr += `|` + String(options["addition"]);
        }
      }
    }
    currStr += addStr;
  }

  if (options["repeatTimes"]) {
    let fullStr = String(currStr);
    //if (options['repeatTimes'] == 1) return fullStr + fullStr;
    for (let i = 1; i < options["repeatTimes"]; i++) {
      if (options["separator"]) {
        fullStr += options["separator"] + currStr;
      } else {
        fullStr += "+" + currStr;
      }
    }
    return fullStr;
  }

  return currStr;
}

module.exports = {
  repeater,
};
