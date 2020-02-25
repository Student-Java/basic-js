class VigenereCipheringMachine {

  constructor(directMachine) {
    this.reverseMachine = (directMachine === false);
    this.isLetter = /[a-z]/i;
    this.mod = 26;
    this.shift = 65;
  }

  encrypt(message, key) {
    this.validateParameters(message, key);

    return this.cryptoFunction(message, key, key => key.codePointAt(0));
  }

  decrypt(message, key) {
    this.validateParameters(message, key);

    return this.cryptoFunction(message, key, key => this.mod - key.codePointAt(0));
  }

  validateParameters(message, key) {
    if (!(message || key)) {
      throw Error();
    }
  }

  getCypherString(length, key) {
    return new Array(Math.ceil(length / key.length)).fill(key).join('');
  }

  cryptoFunction(message, key, cryptoAlgorithm) {
    let result = [];

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      let sym = message[i];
      if (this.isLetter.test(sym)) {
        let symCode = (sym.codePointAt(0) + cryptoAlgorithm(key[j++ % key.length])) % this.mod;
        result.push(String.fromCharCode(symCode + this.shift));
      } else {
        result.push(sym);
      }
    }

    return (this.reverseMachine ? result.reverse() : result).join('');
  }
}

module.exports = VigenereCipheringMachine;
