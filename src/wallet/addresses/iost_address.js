const IOST = require("iost");

function getIOSTAddress(node) {
  let kp = new IOST.KeyPair(node.privateKey);
  return kp.B58PubKey();
}
module.exports = getIOSTAddress;
