const { Mnemonic } = require("@hashgraph/sdk");

async function getXHBAddress(mnemonic) {
  const recoveredMnemonic = await Mnemonic.fromString(mnemonic.toString());
  const recoveredRootKey = await recoveredMnemonic.toPrivateKey();

  const key = await recoveredRootKey.derive(0);

  return key.publicKey.toString();
}

module.exports = getXHBAddress;
