const IconService = require("icon-sdk-js").default;

function getICXAddress(node) {
  const wallet = IconService.IconWallet.loadPrivateKey(
    node.privateKey.toString("hex")
  );
  return wallet.getAddress();
}

module.exports = getICXAddress;
