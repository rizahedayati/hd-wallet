const Decred = require("decredjs-lib");

function getDCRAddress(node) {
  var privateKey = new Decred.PrivateKey(node.toWIF().b58);
  var address = privateKey.toAddress().toString();
  return address;
}

module.exports = getDCRAddress;
