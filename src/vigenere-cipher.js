const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let str = message.toUpperCase();
    let alf = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let keyWord = key.toUpperCase();

    while (keyWord.length < str.length) {
      keyWord += keyWord;
    }

    let wordEnc = [];
    let j = 0;

    for (let i = 0; i < str.length; i++) {
      if (alf.includes(str[i])) {
        let letterInd = (alf.indexOf(str[i]) + alf.indexOf(keyWord[j])) % 26;
        wordEnc.push(alf[letterInd]);
        j++;
      } else {
        wordEnc.push(str[i]);
      }
    }

    if (this.type === false) return wordEnc.reverse().join("");

    return wordEnc.join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    let wordEnc = message.toUpperCase();
    let alf = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let keyWord = key.toUpperCase();

    while (keyWord.length < wordEnc.length) {
      keyWord += keyWord;
    }

    let decWord = [];
    let j = 0;

    for (let i = 0; i < wordEnc.length; i++) {
      if (alf.includes(wordEnc[i])) {
        let par = (alf.indexOf(wordEnc[i]) - alf.indexOf(keyWord[j])) % 26;

        if (par >= 0) {
          decWord.push(alf[par]);
          j++;
        } else {
          let newPar = 26 + par;
          decWord.push(alf[newPar]);
          j++;
        }
      } else {
        decWord.push(wordEnc[i]);
      }
    }

    if (this.type === false) return decWord.reverse().join("");

    return decWord.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
