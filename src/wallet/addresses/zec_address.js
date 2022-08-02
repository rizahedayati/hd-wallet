var bs58check = require("bs58check"); // https://github.com/bitcoinjs/bs58check

function getZECAddress(address) {
  var baddr = bs58check.decode(address).slice(1); // discard type byte
  var taddr = new Uint8Array(22);
  taddr.set(baddr, 2);
  taddr.set([0x1c, 0xb8], 0); // set zcash type bytes
  return bs58check.encode(Buffer.from(taddr));
}

module.exports = getZECAddress;
