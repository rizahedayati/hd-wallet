const ecc = require("eosjs-ecc");

function getEOSAddress(node) {
  return ecc.privateToPublic(node.toWIF());
}

module.exports = getEOSAddress;
