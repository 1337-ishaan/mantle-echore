export const mantleTestnetConfig = {
  id: 5001,
  name: "Mantle Network",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "BIT",
    symbol: "BIT",
  },
  rpcUrls: {
    public: { http: ["https://explorer.testnet.mantle.xyz/api/eth-rpc"] },
    default: { http: ["https://explorer.testnet.mantle.xyz/api"] },
  },
  blockExplorers: {
    default: {
      name: "Mantle Explorer",
      url: "https://explorer.testnet.mantle.xyz/",
    },
  },
};
