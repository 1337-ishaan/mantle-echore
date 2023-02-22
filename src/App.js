import "./App.css";
import styled from "styled-components";

import ConnectWallet from "./screens/ConnectWallet";
import Home from "./screens/Home";
import TransactionDetails from "./screens/TransactionDetails";
import Account from "./screens/Account";

import { ethers } from "ethers";
import React from "react";

const PageWrapper = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  /* border: 2px solid red; */
  justify-content: center;
  margin: 10% auto;
  background: #000;
  padding: 20px;

  /* padding: 20px; */

  /* background: #000; */
  /* linear-gradient(
    rgba(172, 247, 206, 1) 22%,
    rgba(100, 99, 92, 1) 87%
  ); */
  /* background: #2c2c2e; */
`;
function App() {
  const [currPage, setCurrPage] = React.useState("connect-wallet");
  const [walletAddress, setWalletAddress] = React.useState("");
  const switchPage = (page) => {
    setCurrPage(page);
  };
  console.log(currPage, "currpage");

  return (
    <PageWrapper>
      <div>
        {(() => {
          switch (currPage) {
            case "connect-wallet":
              return (
                <ConnectWallet
                  switchPage={switchPage}
                  setWalletAddress={setWalletAddress}
                  walletAddress={walletAddress}
                />
              );
            case "home":
              return (
                <Home switchPage={switchPage} walletAddress={walletAddress} />
              );
            case "account":
              return (
                <Account
                  switchPage={switchPage}
                  walletAddress={walletAddress}
                />
              );
            case "transactions":
              return (
                <TransactionDetails
                  switchPage={switchPage}
                  walletAddress={walletAddress}
                />
              );
            default:
              console.log(`Sorry, we are out of ${currPage}.`);
          }
        })()}
        {/* <ConnectWallet /> */}
        {/* <Home /> */}
        {/* <TransactionDetails /> */}
        {/* <Account /> */}
      </div>
    </PageWrapper>
  );
}

export default App;
