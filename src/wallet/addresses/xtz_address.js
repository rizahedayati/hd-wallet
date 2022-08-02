const eztz = require("eztz-lib");

function getXTZAddress(mnemonic) {
  const passphrase = "xtz123";
  return eztz.crypto.generateKeys(mnemonic, passphrase).pkh;
}

module.exports = getXTZAddress;
