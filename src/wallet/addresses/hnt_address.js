const { Keypair } = require("@helium/crypto");

async function getHNTAddress(mnemonics) {
  const bob = await Keypair.fromWords(mnemonics.split(" "));
  return bob.address.b58;
}

module.exports = getHNTAddress;
