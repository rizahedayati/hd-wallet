const bchaddr = require("bchaddrjs");

function getBCHAddress(address) {
  return bchaddr.toCashAddress(address);
}

module.exports = getBCHAddress;
