const CaverExtKAS = require("caver-js-ext-kas");

function getKLAYAdress(node) {
  const caver = new CaverExtKAS();
  const keyringContainer = new caver.keyringContainer();
  const keyring = keyringContainer.keyring.createFromPrivateKey(
    node.privateKey.toString("hex")
  );

  return keyring.address;
}
module.exports = getKLAYAdress;
