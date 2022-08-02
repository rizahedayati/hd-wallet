const { Keyring } = require("@polkadot/keyring");

function getDOTAddress(mnemonic) {
  const keyring = new Keyring();
  const pair = keyring.createFromUri(mnemonic);
  keyring.setSS58Format(0);
  return keyring.encodeAddress(pair.publicKey, 0);
}

module.exports = getDOTAddress;
