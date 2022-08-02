const { address } = require("@waves/ts-lib-crypto");

function getWAVESAddress(seed) {
  return address(seed);
}

module.exports = getWAVESAddress;
