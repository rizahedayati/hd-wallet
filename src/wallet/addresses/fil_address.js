const { keyPairFromSeed } = require("@nodefactory/filecoin-address");

function getFILAddress(seed) {
  const generatedKeypair = keyPairFromSeed(seed, "f");
  return generatedKeypair.address;
}

module.exports = getFILAddress;
