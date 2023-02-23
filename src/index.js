import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { WagmiConfig, createClient, configureChains } from "wagmi";
import { localhost, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { mantleTestnetConfig } from "./constants/mantleTestnetConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { chains, provider } = configureChains(
  [mantleTestnetConfig, goerli, localhost],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Echore",
  chains,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});
root.render(
  <React.StrictMode>
    {/* <WagmiConfig client={client}>
      <RainbowKitProvider
        chains={chains}
        showRecentTransactions={true}
        theme={darkTheme()}
        coolMode
      > */}
    <ToastContainer />

    <App />
    {/* </RainbowKitProvider>
    </WagmiConfig> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
