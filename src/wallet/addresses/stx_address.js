const { generateWallet, getStxAddress } = require("@stacks/wallet-sdk");
const { TransactionVersion } = require("@stacks/transactions");

async function getSTXAddress(secretKey) {
  const wallet = await generateWallet({
    secretKey,
    password: "stackWalletPass123@",
  });

  const account = wallet.accounts[0];
  const mainnetAddress = getStxAddress({
    account,
    transactionVersion: TransactionVersion.Mainnet,
  });

  // console.log(mainnetAddress);
  return mainnetAddress;
}

module.exports = getSTXAddress;
