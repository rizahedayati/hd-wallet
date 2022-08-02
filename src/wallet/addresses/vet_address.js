const veCahin = require("thor-devkit");

function getVETAddress(node) {
  const pubKey = veCahin.secp256k1.derivePublicKey(node.privateKey);
  const addr = veCahin.address.fromPublicKey(pubKey);
  return addr;
}

module.exports = getVETAddress;
