function getNetworkInfo(network) {
  let networks = {
    BTC: {
      coin: "Bitcoin",
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

    RVN: {
      messagePrefix: "\x16Raven Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x7a,
      wif: 0x80,
    },

    DOGE: {
      coin: "Dogecoin",
      messagePrefix: "\x19Dogecoin Signed Message:\n",
      bip32: {
        public: 0x02facafd,
        private: 0x02fac398,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x16,
      wif: 0xf1,
    },

    LTC: {
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

    ETH: {
      messagePrefix: "\x19Etheruem Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
    },

    DASH: {
      coin: "Dash",
      messagePrefix: "\x19Dash Signed Message:\n",
      bip32: {
        public: 0x488b21e,
        private: 0x488ade4,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc,
    },

    TRX: {
      coin: "Dash",
      messagePrefix: "\x19Dash Signed Message:\n",
      bip32: {
        public: 0x488b21e,
        private: 0x488ade4,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc,
    },

    BCH: {
      coin: "Bitcoin Cash",
      messagePrefix: "\x19Bitcoin Cash Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
    },

    BTG: {
      messagePrefix: "\x1DBitcoin Gold Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 38,
      scriptHash: 23,
      wif: 128,
    },

    ATOM: {
      messagePrefix: "\x18Bitcoin Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x0a,
      wif: 0x80,
    },

    NEOS: {
      messagePrefix: "\x18NeosCoin Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x35,
      scriptHash: 0x05,
      wif: 0xb1,
    },

    QTUM: {
      messagePrefix: "\x18Qtum Signed Message:\n",
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x3a,
      scriptHash: 0x32,
      wif: 0x80,
    },

    ZEC: {
      messagePrefix: "\x18Zcash Signed Message:\n",
      bip32: {
        public: 0x488b21e,
        private: 0x488ade4,
      },
      pubKeyHash: 0x1cb8,
      scriptHash: 0x1cbd,
      wif: 0x80,
    },

    BTX: {
      messagePrefix: "\x18Bitcore Signed Message:\n",
      bip32: {
        public: 0x488b21e,
        private: 0x488ade4,
      },
      pubKeyHash: 0x3,
      scriptHash: 0x7d,
      wif: 0x80,
    },
    DCR: {
      messagePrefix: "\x17Decred Signed Message:\n",
      bip32: {
        public: 0x02fda926,
        private: 0x02fda4e8,
      },
      pubKeyHash: 0x073f,
      scriptHash: 0x071a,
      wif: 0x22de,
    },
  };

  return networks[network];
}

module.exports = getNetworkInfo;
