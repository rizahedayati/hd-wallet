const { wallet } = require("@cityofzion/neon-js");

function getNEOAddress(node) {
  const account = new wallet.Account(node.privateKey.b58);
  return account._address;
}

module.exports = getNEOAddress;
