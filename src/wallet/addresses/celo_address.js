const { CeloProvider, CeloWallet } = require("@celo-tools/celo-ethers-wrapper");

async function getCELOAddress(node) {
  const provider = new CeloProvider("https://forno.celo.org");
  await provider.ready;
  const wallet = new CeloWallet(node.privateKey, provider);
  return wallet.address;
}

module.exports = getCELOAddress;
