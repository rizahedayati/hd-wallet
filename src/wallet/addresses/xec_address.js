const ecashaddr = require("ecashaddrjs");

function getXECAddress(bitcoincashAddress) {
  const { prefix, type, hash } = ecashaddr.decode(bitcoincashAddress);
  const ecashAddress = ecashaddr.encode("ecash", type, hash);
  return ecashAddress;
}
module.exports = getXECAddress;
