const { bytes } = require("@zilliqa-js/util");
const { Zilliqa } = require("@zilliqa-js/zilliqa");

function getZILAddress(mnemonic) {
  // mainNet:	https://api.zilliqa.com/
  const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");
  // mainChinID: 1
  const chainId = 333; // chainId of the developer testnet
  const msgVersion = 1; // current msgVersion
  const VERSION = bytes.pack(chainId, msgVersion);

  const address = zilliqa.wallet.addByMnemonic(mnemonic, 0);
  return address;
}

module.exports = getZILAddress;
