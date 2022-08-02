const nem = require("nem-sdk").default;

function getXEMAddress(mnemonic) {
  // Set a wallet name
  var walletName = "QuantumMechanicsBrain";

  // Create Brain wallet
  var key = nem.model.wallet.createBrain(
    walletName,
    mnemonic,
    nem.model.network.data.mainnet.id
  );

  return key.accounts["0"].address;
}

module.exports = getXEMAddress;
