const basex = require("base-x");

function getXRPAddress(address) {
  return basex(
    "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"
  ).encode(
    basex("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz").decode(
      address
    )
  );
}
module.exports = getXRPAddress;
