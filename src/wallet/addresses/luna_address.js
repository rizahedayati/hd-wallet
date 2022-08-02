let { bech32 } = require("bech32");
const createHash = require("create-hash");

function getLUNAAddress(node) {
  const hrp = "terra";
  const pubBuf = node.publicKey;
  const sha256_ed = createHash("sha256").update(pubBuf, "hex").digest("hex");
  const ripemd160_ed = createHash("ripemd160")
    .update(sha256_ed, "hex")
    .digest("hex");
  const bech32Words = bech32.toWords(Buffer.from(ripemd160_ed, "hex"));
  const words = new Uint8Array([0, ...bech32Words]);
  return bech32.encode(hrp, words);
}

module.exports = getLUNAAddress;
