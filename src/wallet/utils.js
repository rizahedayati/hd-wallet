const bip39 = require("bip39");
const constants = require("bip44-constants");

let utils = {};

utils.findCoinType = (coinSymbol) => {
  return constants.findIndex((arr) => arr.includes(coinSymbol));
};

utils.generateMnemonic = (language = "english", entropyLength = 256) => {
  const rng = null; // Let module randombytes create this for us.
  const wordList = eval("bip39.wordlists." + language);
  const mnemonic = bip39.generateMnemonic(entropyLength, rng, wordList);
  return mnemonic;
};

module.exports = utils;
