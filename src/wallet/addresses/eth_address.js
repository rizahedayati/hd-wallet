const ethUtil = require("ethereumjs-util");
const { bufferToHex } = require("eccrypto-js");

function getETHAddress(node) {
  var pubkeyBuffer = node.publicKey;
  var ethPubkey = ethUtil.importPublic(pubkeyBuffer);

  var addressBuffer = "0x" + ethUtil.publicToAddress(ethPubkey).toString("hex");
  var hexAddress = addressBuffer.toString("hex");
  var checksumAddress = ethUtil.toChecksumAddress(hexAddress);
  return bufferToHex(checksumAddress);
}

module.exports = getETHAddress;
