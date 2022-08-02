const MinaSDK = require("@o1labs/client-sdk");
// const bs58 = require("bs58");
function getMINAAddress(node) {
  // console.log(bs58.encode(node.privateKey), bs58.encode(node.publicKey));
  let keys = MinaSDK.genKeys();
  // console.log(keys);

  // let publicKey = MinaSDK.derivePublicKey(bs58.encode(node.privateKey));
  return keys.publicKey;
}

module.exports = getMINAAddress;
