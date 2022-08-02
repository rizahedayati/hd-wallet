const StellarBase = require("stellar-base");
const edHd = require("ed25519-hd-key");

function getXLMAddress(seed) {
  const derivationPath = "m/44'/148'/0'";
  const result = edHd.derivePath(derivationPath, seed);
  const keyPair = StellarBase.Keypair.fromRawEd25519Seed(result.key);
  return keyPair.publicKey();
}

module.exports = getXLMAddress;
