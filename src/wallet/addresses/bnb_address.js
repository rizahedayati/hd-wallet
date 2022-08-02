const bCrypto = require("@binance-chain/javascript-sdk/lib/crypto");

function getBNBAddress(node) {
  return bCrypto.getAddressFromPrivateKey(
    node.privateKey.toString("hex"),
    "bnb"
  );
}

module.exports = getBNBAddress;
