const bitcoin = require("bitcoinjs-lib");
const getETHAddress = require("./eth_address");
const getEOSAddress = require("./eos_address");
const getBNBAddress = require("./bnb_address");
const getTRXAddress = require("./trx_address");
const getSOLAddress = require("./sol_address");
const getBCHAddress = require("./bch_address");
const getXRPAddress = require("./xrp_address");
const getTHETAddress = require("./theta_address");
const getXECAddress = require("./xec_address");
const getLUNAAddress = require("./luna_address");
const getXEMAddress = require("./xem_address");
const getXLMAddress = require("./xlm_address");
const getDOTAddress = require("./dot_address");
const getKSMAddress = require("./ksm_address");
const getXTZAddress = require("./xtz_address");
const getMINAAddress = require("./mina_address");
const getICXAddress = require("./icx_address");
const getZECAddress = require("./zec_address");
const getIOSTAddress = require("./iost_address");
const getNEOAddress = require("./neo_address");
const getZILAddress = require("./zil_address");
const getKLAYAdress = require("./klay_address");
const getVETAddress = require("./vet_address");
const getWAVESAddress = require("./waves_address");
const getAVAXAddress = require("./avax_address");
const getSTXAddress = require("./stx_address");
const getHNTAddress = require("./hnt_address");
const getXHBAddress = require("./xhb_address");
const getXMRAddress = require("./xmr_address");
const getFILAddress = require("./fil_address");
const getCELOAddress = require("./celo_address");

function p2pkhAddress(node, network) {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;
}

function p2wpkhAddress(node) {
  return bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
  }).address;
}

async function getAddress(symbol, node, seed, mnemonic, networkInfo) {
  let address;
  switch (symbol) {
    case "BTC":
    case "BTX":
    case "BTG":
    case "NEOS":
    case "RVN":
    case "DOGE":
    case "DASH":
    case "QTUM":
    case "LTC":
      address = p2pkhAddress(node, networkInfo);
      break;
    case "BTC_SEGWIT":
      address = p2wpkhAddress(node);
      break;
    case "ETH":
    case "BSC":
    case "MATIC":
    case "FLOW":
    case "FTM":
      address = getETHAddress(node);
      break;
    case "EOS":
      address = getEOSAddress(node);
      break;
    case "CELO":
      address = getCELOAddress(node);
      break;
    case "BNB":
      address = getBNBAddress(node);
      break;
    case "TRX":
      address = getTRXAddress(node);
      break;
    case "SOL":
      address = getSOLAddress(seed);
      break;
    case "XEC":
      address = getXECAddress(getBCHAddress(p2pkhAddress(node)));
      break;
    case "BCH":
      address = getBCHAddress(p2pkhAddress(node));
      break;

    case "XRP":
      address = getXRPAddress(p2pkhAddress(node));
      break;
    case "THETA":
      address = getTHETAddress(mnemonic);
      break;
    case "DCR":
      address = p2pkhAddress(node, networkInfo);
      break;

    case "LUNA":
      address = getLUNAAddress(node);
      break;
    case "XLM":
      address = getXLMAddress(seed);
      break;
    case "DOT":
      address = getDOTAddress(mnemonic);
      break;
    case "KSM":
      address = getKSMAddress(mnemonic);
      break;
    case "XTZ":
      address = getXTZAddress(mnemonic);
      break;

    case "MINA":
      address = getMINAAddress(node);
      break;
    case "ICX":
      address = getICXAddress(node);
      break;
    case "ZEC":
      address = getZECAddress(p2pkhAddress(node));
      break;
    case "IOST":
      address = getIOSTAddress(node);
      break;

    case "NEO":
      address = getNEOAddress(node);
      break;
    case "ZIL":
      address = getZILAddress(mnemonic);
      break;
    case "KLAY":
      address = getKLAYAdress(node);
      break;
    case "VET":
      address = getVETAddress(node);
      break;

    case "WAVES":
      address = getWAVESAddress(seed);
      break;
    case "AVAX":
    case "AVAXC":
      address = getAVAXAddress(node);
      break;
    case "HNT":
      address = await getHNTAddress(mnemonic);
      break;
    case "STX":
      address = await getSTXAddress(mnemonic);
      break;
    case "XHB":
      address = await getXHBAddress(mnemonic);
      break;
    case "XEM":
      address = getXEMAddress(mnemonic);
      break;
    case "FIL":
      address = getFILAddress(seed);

    // case "XMR":
    //   address = await getXMRAddress(mnemonic);
    //   break;
    // case "FIL":
    // address = await getFILAddress(mnemonic);
    // break;
  }
  return address;
}

module.exports = getAddress;
