const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(directMachine = true) {
    this.directMachine = directMachine;
    this.isLetter = /[a-z]/i;
    this.mod = 26;
    this.shift = 65;
  }

  encrypt(message, key) {
    this.validateParameters(message, key);

    return this.cryptoFunction(message, key, key => key);
  }

  decrypt(message, key) {
    this.validateParameters(message, key);

    return this.cryptoFunction(message, key, key => this.mod - key);
  }

  validateParameters(message, key) {
    if (!(message || key)) {
      throw Error();
    }
  }

  cryptoFunction(message, key, cryptoAlgorithm) {
    let result = [];

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      let sym = message[i];
      if (this.isLetter.test(sym)) {
        let symCode = (sym.codePointAt(0) + cryptoAlgorithm(key[j++ % key.length].codePointAt(0))) % this.mod;
        result.push(String.fromCharCode(symCode + this.shift));
      } else {
        result.push(sym);
      }
    }

    return (this.directMachine ? result : result.reverse()).join('');
  }
}

module.exports = VigenereCipheringMachine;
