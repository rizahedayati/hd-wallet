const constant = require("./constant");

const purpose = constant.PURPOSE.BIP44;

function coinInfo(coin) {
  let COINS = {
    BTC: {
      name: "bitcoin",
      symbol: "BTC",
      coinId: 0,
      derivationPath: `m/${purpose}'/0'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x18Bitcoin Signed Message:\n",
        bech32: "bc",
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
      },
    },
    BTC_SEGWIT: {
      name: "bitcoin",
      symbol: "BTC_SEGWIT",
      coinId: 0,
      derivationPath: `m/${purpose}'/0'/0'/0/0`,
    },
    ETH: {
      name: "ethereum",
      symbol: "ETH",
      coinId: 60,
      derivationPath: `m/${purpose}'/60'/0'/0/0`,
    },
    MATIC: {
      name: "polygan",
      symbol: "MATIC",
      coinId: 966,
      derivationPath: `m/${purpose}'/966'/0'/0/0`,
    },
    EOS: {
      name: "eosio",
      symbol: "EOS",
      coinId: 194,
      derivationPath: `m/${purpose}'/194'/0'/0/0`,
    },
    BNB: {
      name: "binance",
      symbol: "BNB",
      coinId: 714,
      derivationPath: `m/${purpose}'/714'/0'/0/0`,
    },
    BSC: {
      name: "binance smart chain",
      symbol: "BSC",
      coinId: 60,
      derivationPath: `m/${purpose}'/60'/0'/0/0`,
    },
    TRX: {
      name: "tron",
      symbol: "TRX",
      coinId: 195,
      derivationPath: `m/${purpose}'/195'/0'/0/0`,
    },
    SOL: {
      name: "solana",
      symbol: "SOL",
      coinId: 501,
      derivationPath: `m/${purpose}'/501'/0'/0/0`,
    },
    BCH: {
      name: "bitcoin cash",
      symbol: "BCH",
      coinId: 145,
      derivationPath: `m/${purpose}'/145'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x19Bitcoin Cash Signed Message:\n",
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
      },
    },

    LTC: {
      name: "litecoin",
      symbol: "LTC",
      coinId: 2,
      derivationPath: `m/${purpose}'/2'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x19Litecoin Signed Message:\n",
        bech32: "ltc",
        bip32: {
          public: 0x019da462,
          private: 0x019d9cfe,
        },
        pubKeyHash: 0x30,
        scriptHash: 0x32,
        wif: 0xb0,
      },
    },
    DOGE: {
      name: "dogecoin",
      symbol: "DOGE",
      coinId: 3,
      derivationPath: `m/${purpose}'/3'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x19Dogecoin Signed Message:\n",
        bip32: {
          public: 0x02facafd,
          private: 0x02fac398,
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0xf1,
      },
    },
    DASH: {
      name: "dash",
      symbol: "DASH",
      coinId: 5,
      derivationPath: `m/${purpose}'/5'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x19Dash Signed Message:\n",
        bip32: {
          public: 0x488b21e,
          private: 0x488ade4,
        },
        pubKeyHash: 0x4c,
        scriptHash: 0x10,
        wif: 0xcc,
      },
    },
    QTUM: {
      name: "qtum",
      symbol: "QTUM",
      coinId: 2301,
      derivationPath: `m/${purpose}'/2301'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x18Qtum Signed Message:\n",
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 0x3a,
        scriptHash: 0x32,
        wif: 0x80,
      },
    },
    BTG: {
      name: "bicoin gold",
      symbol: "BTG",
      coinId: 160,
      derivationPath: `m/${purpose}'/156'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x1DBitcoin Gold Signed Message:\n",
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 38,
        scriptHash: 23,
        wif: 128,
      },
    },

    BTX: {
      name: "bicoin core",
      symbol: "BTX",
      coinId: 156,
      derivationPath: `m/${purpose}'/156'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x18Bitcore Signed Message:\n",
        bip32: {
          public: 0x488b21e,
          private: 0x488ade4,
        },
        pubKeyHash: 0x3,
        scriptHash: 0x7d,
        wif: 0x80,
      },
    },
    NEOS: {
      name: "neos coin",
      symbol: "NEOS",
      coinId: 0,
      derivationPath: `m/${purpose}'/0'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x18NeosCoin Signed Message:\n",
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 0x35,
        scriptHash: 0x05,
        wif: 0xb1,
      },
    },
    RVN: {
      name: "raven",
      symbol: "RVN",
      coinId: 175,
      derivationPath: `m/${purpose}'/175'/0'/0/0`,
      networkInfo: {
        messagePrefix: "\x16Raven Signed Message:\n",
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 0x3c,
        scriptHash: 0x7a,
        wif: 0x80,
      },
    },
    XRP: {
      name: "xriple",
      symbol: "XRP",
      coinId: 144,
      derivationPath: `m/${purpose}'/144'/0'/0/0`,
    },
    THETA: {
      name: "Theta",
      symbol: "THETA",
      coinId: 500,
      derivationPath: `m/${purpose}'/500'/0'/0/0`,
    },
    XEC: {
      name: "eCash",
      symbol: "XEC",
      coinId: 899,
      derivationPath: `m/${purpose}'/899'/0'/0/0`,
    },
    DCR: {
      name: "decred",
      symbol: "DCR",
      coinId: 42,
      derivationPath: `m/${purpose}'/42'/0'/0/0`,
    },
    LUNA: {
      name: "terra",
      symbol: "LUNA",
      coinId: 330,
      derivationPath: `m/${purpose}'/330'/0'/0/0`,
    },
    XEM: {
      name: "nem",
      symbol: "XEM",
      coinId: 43,
      derivationPath: `m/${purpose}'/43'/0'/0/0`,
    },
    XLM: {
      name: "stellar",
      symbol: "XLM",
      coinId: 148,
      derivationPath: `m/${purpose}'/148'/0'/0/0`,
    },

    DOT: {
      name: "polkadot",
      symbol: "DOT",
      coinId: 354,
      derivationPath: `m/${purpose}'/354'/0'/0/0`,
    },
    KSM: {
      name: "kusama",
      symbol: "KSM",
      coinId: 434,
      derivationPath: `m/${purpose}'/434'/0'/0/0`,
    },
    XTZ: {
      name: "tezos",
      symbol: "XTZ",
      coinId: 1729,
      derivationPath: `m/${purpose}'/1729'/0'/0/0`,
    },

    MINA: {
      name: "mina",
      symbol: "MINA",
      coinId: 12586,
      derivationPath: `m/${purpose}'/12586'/0'/0/0`,
    },
    ICX: {
      name: "icon",
      symbol: "ICX",
      coinId: 74,
      derivationPath: `m/${purpose}'/74'/0'/0/0`,
    },
    ZEC: {
      name: "zcash",
      symbol: "ZEC",
      coinId: 133,
      derivationPath: `m/${purpose}'/133'/0'/0/0`,
    },
    IOST: {
      name: "iost",
      symbol: "IOST",
      coinId: 291,
      derivationPath: `m/${purpose}'/291'/0'/0/0`,
    },
    NEO: {
      name: "neon",
      symbol: "NEO",
      coinId: 888,
      derivationPath: `m/${purpose}'/888'/0'/0/0`,
    },
    ZIL: {
      name: "zilliqa",
      symbol: "ZIL",
      coinId: 313,
      derivationPath: `m/${purpose}'/313'/0'/0/0`,
    },
    KLAY: {
      name: "klay",
      symbol: "KLAY",
      coinId: 8217,
      derivationPath: `m/${purpose}'/8217'/0'/0/0`,
    },
    VET: {
      name: "vechain",
      symbol: "VET",
      coinId: 818,
      derivationPath: `m/${purpose}'/818'/0'/0/0`,
    },
    WAVES: {
      name: "waves",
      symbol: "WAVES",
      coinId: 5741564,
      derivationPath: `m/${purpose}'/5741564'/0'/0/0`,
    },

    AVAX: {
      name: "avalanche",
      symbol: "AVAX",
      coinId: 9000,
      derivationPath: `m/${purpose}'/9000'/0'/0/0`,
    },
    AVAXC: {
      name: "avalanche-c",
      symbol: "AVAXC",
      coinId: 9005,
      derivationPath: `m/${purpose}'/9005'/0'/0/0`,
    },
    FTM: {
      name: "fantom",
      symbol: "FTM",
      coinId: 1007,
      derivationPath: `m/${purpose}'/1007'/0'/0/0`,
    },

    CELO: {
      name: "celo",
      symbol: "CELO",
      coinId: 52752,
      derivationPath: `m/${purpose}'/52752'/0'/0/0`,
    },

    FLOW: {
      name: "flow",
      symbol: "FLOW",
      coinId: 539,
      derivationPath: `m/${purpose}'/539'/0'/0/0`,
    },

    STX: {
      name: "stack",
      symbol: "STX",
      coinId: 160,
      derivationPath: `m/${purpose}'/160'/0'/0/0`,
    },

    HNT: {
      name: "helium",
      symbol: "HNT",
      coinId: 904,
      derivationPath: `m/${purpose}'/904'/0'/0/0`,
    },

    XHB: {
      name: "hedera hbar",
      symbol: "XHB",
      coinId: 3030,
      derivationPath: `m/${purpose}'/3030'/0'/0/0`,
    },
    XMR: {
      name: "monero",
      symbol: "XMR",
      coinId: 128,
      derivationPath: `m/${purpose}'/128'/0'/0/0`,
    },
    FIL: {
      name: "filecoin",
      symbol: "FIL",
      coinId: 461,
      derivationPath: `m/${purpose}'/461'/0'/0/0`,
    },
  };

  return COINS[coin];
}

module.exports = coinInfo;
