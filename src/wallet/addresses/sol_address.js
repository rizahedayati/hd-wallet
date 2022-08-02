const solanaWeb3 = require("@solana/web3.js");

function fromHexString(seed) {
  return new Uint8Array(seed.toJSON().data.slice(0, 32));
}

function getSOLAddress(seed) {
  const keyPair = solanaWeb3.Keypair.fromSeed(fromHexString(seed));
  return keyPair.publicKey.toBase58();
}
module.exports = getSOLAddress;
