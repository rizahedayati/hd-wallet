const { Keyring } = require("@polkadot/keyring");

function getKSMAddress(mnemonic) {
  const keyring = new Keyring();
  const pair = keyring.createFromUri(mnemonic);
  keyring.setSS58Format(2);
  return keyring.encodeAddress(pair.address, 2);
}

module.exports = getKSMAddress;
