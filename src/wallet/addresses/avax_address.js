const { Avalanche, BinTools, Buffer, BN } = require("avalanche");

function getAVAXAddress(node) {
  const myNetworkID = 12345; //default is 1, we want to override that for our local network
  const avalanche = new Avalanche("localhost", 9650, "http", myNetworkID);
  const bintools = BinTools.getInstance();
  const pv = bintools.cb58Encode(node.privateKey);

  const xchain = avalanche.XChain(); //returns a reference to the X-Chain used by AvalancheJS
  const addresses = xchain.keyChain().importKey(bintools.cb58Decode(pv));
  const keys = addresses.getAddressString();

  return keys;
}

module.exports = getAVAXAddress;
