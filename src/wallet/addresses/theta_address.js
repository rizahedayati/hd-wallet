const thetajs = require("@thetalabs/theta-js");

function getTHETAddress(mnemonic) {
  const Wallet = thetajs.Wallet;
  const wallet3 = Wallet.fromMnemonic(mnemonic);
  return wallet3.address;
}

module.exports = getTHETAddress;
