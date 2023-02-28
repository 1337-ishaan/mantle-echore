import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import EchoreLoader from "../assets/echore-loader.mp4";
import { ReactComponent as EchoreText } from "../assets/echore-text.svg";
import { ReactComponent as WalletIcon } from "../assets/wallet.svg";

import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";

const ConnectWalletWrapper = styled(FlexColumnWrapper)`
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  padding-bottom: 48px;

  .echore-loader {
    max-width: 300px;
    max-height: 300px;
    margin-top: 40px;
  }

  .t-echore {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;

    font-size: 24px;
    color: #ffffff;
    letter-spacing: 8px;
    background: #000000;
    background: repeating-radial-gradient(
      ellipse farthest-corner at top left,
      #000000 0%,
      #adff01 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .t-track {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    padding: 0 12px;
    text-align: center;
    margin-bottom: 12px;
    color: #c1c7cd;
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin-top: 8px;
    .go-to-button {
      display: flex;
      column-gap: 8px;
      align-items: center;
      /* background: #34d991;
      background-image: -webkit-linear-gradient(top, #34d991, #244032);
      background-image: -moz-linear-gradient(top, #34d991, #244032);
      background-image: -ms-linear-gradient(top, #34d991, #244032);
      background-image: -o-linear-gradient(top, #34d991, #244032);
      background-image: linear-gradient(to bottom, #34d991, #244032);
      -webkit-border-radius: 6;
      -moz-border-radius: 6;
      */
      border-radius: 28px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      cursor: pointer;
      backdrop-filter: blur(28.5px);
      font-family: "Poppins";
      color: #ffffff;
      height: 48px;
      font-size: 16px;
      padding: 8px 32px;
      transition: all 0.3s;

      &:hover {
        background: rgba(15, 255, 236, 0.5);
        transform: translateY(-3px);
        transition: all 0.3s;
      }
    }
  }
  .css-input {
    background: rgba(255, 255, 255, 0.05);
    width: 75%;
    padding: 10px 24px;
    height: 24px;
    border: 2px solid rgba(15, 255, 236, 0.5);
    border-radius: 12px;
    color: #ffffff;
  }
  .css-input:focus {
    outline: none;
  }
  .blockies {
    border-radius: 50%;
  }
  .divider {
    border: 1px solid rgba(15, 255, 236, 0.5);
    width: 60px;
  }
`;
const ConnectWallet = ({ switchPage, setWalletAddress, walletAddress }) => {
  const errNotify = () =>
    toast("Please add a valid address", { theme: "dark" });

  console.log(walletAddress, "wallet address");
  return (
    <ConnectWalletWrapper>
      <video autoPlay playbackSpeed={4} className="echore-loader" loop>
        <source src={EchoreLoader} className="echore-loader" type="video/mp4" />
      </video>
      {/* <video src={EchoreLoader} alt="echore-loader" className="echore-loader" /> */}
      {/* <div className="t-echore">ECHORE</div> */}
      <EchoreText className="t-echore" />
      <div className="divider" />
      <div className="t-track">
        Track all your transactions on mantle network.
      </div>
      <input
        type="text"
        class="css-input"
        placeholder="Wallet Address"
        onChange={(e) => setWalletAddress(e.target.value)}
      />

      <div className="button-wrapper">
        <button
          className="go-to-button"
          onClick={
            walletAddress.length === 42 ? () => switchPage("home") : errNotify
          }
        >
          Track Wallet <WalletIcon className="wallet-icon" />
        </button>
        {/* <button
          onClick={
            walletAddress.length === 42
              ? () => switchPage("account")
              : errNotify
          }
          className="go-to-button"
        >
          <Blockies
            seed={walletAddress}
            size={10}
            scale={3}
            color="#eee"
            bgColor="#000"
            spotColor="#abc"
            className="blockies"
          />
        </button> */}
      </div>

      {/* <ConnectButton accountStatus={"avatar"} chainStatus="icon" /> */}
    </ConnectWalletWrapper>
  );
};

export default ConnectWallet;
