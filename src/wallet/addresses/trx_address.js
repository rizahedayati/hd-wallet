const tronWeb = require("tronweb");

function getTRXAddress(node) {
  const privateKey = node.privateKey.toString("hex");
  return tronWeb.address.fromPrivateKey(privateKey);
}

module.exports = getTRXAddress;
