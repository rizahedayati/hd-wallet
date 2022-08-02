const monerojs = require("monero-javascript");

async function getXMRAddress(mnemonic) {
  let wallet = await monerojs.createWalletKeys({
    password: "moneroXMR",
    networkType: "stagenet",
    mnemonic,
  });

  console.log(wallet.getAddress(1, 0));
  return wallet.getAddress(1, 0);
}

module.exports = getXMRAddress;
