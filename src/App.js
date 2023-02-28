import styled from "styled-components";

import ConnectWallet from "./screens/ConnectWallet";
import Home from "./screens/Home";
import TransactionDetails from "./screens/TransactionDetails";
import Account from "./screens/Account";

import React from "react";

import { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { opacity: 0.5 }
 30% {  opacity:0.7 }
 50% {  opacity:.85 }
 70% {  opacity: 0.7; }
 100% { opacity: 0.5; }
`;

const PageWrapper = styled.div`
  position: relative;
  width: 315px;

  height: 488px;
  /* border-radius: 24px; */
  overflow: hidden;
  display: flex;
  border: 2px solid rgba(15, 255, 236, 0.15);
  background: #000;

  .orb-1 {
    width: 455.16px;
    height: 140.75px;
    left: 0px;
    animation-name: ${breatheAnimation};
    animation-duration: 10s;
    animation-iteration-count: infinite;
    background: rgba(15, 255, 236, 0.45);
    filter: blur(108.5px);
    transform: rotate(-15.42deg);
    position: absolute;
  }
`;
function App() {
  const [currPage, setCurrPage] = React.useState("connect-wallet");
  const [walletAddress, setWalletAddress] = React.useState("");
  const [trxHash, setTrxHash] = React.useState("");

  const switchPage = (page) => {
    setCurrPage(page);
  };
  console.log(currPage, "currpage");

  return (
    <PageWrapper>
      <div className="orb-1" />
      {/* <div className="orb-2" /> */}

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
                <Home
                  switchPage={switchPage}
                  walletAddress={walletAddress}
                  setTrxHash={setTrxHash}
                />
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
                  trxHash={trxHash}
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
