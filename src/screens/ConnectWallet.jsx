import React from "react";
import { ReactComponent as EchoreLoader } from "../assets/echore-loader.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import styled from "styled-components";
import { toast } from "react-toastify";
const ConnectWalletWrapper = styled(FlexColumnWrapper)`
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  .echore-loader {
    max-width: 300px;
    max-height: 300px;
  }

  .t-echore {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #ffffff;
    letter-spacing: 8px;
    background: #000000;
    background: repeating-radial-gradient(
      ellipse farthest-corner at top left,
      #000000 0%,
      #2eff51 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .t-track {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #c1c7cd;
  }

  .button-wrapper {
    display: flex;
    column-gap: 8px;

    .go-to-button {
      background: #34d991;
      background-image: -webkit-linear-gradient(top, #34d991, #244032);
      background-image: -moz-linear-gradient(top, #34d991, #244032);
      background-image: -ms-linear-gradient(top, #34d991, #244032);
      background-image: -o-linear-gradient(top, #34d991, #244032);
      background-image: linear-gradient(to bottom, #34d991, #244032);
      -webkit-border-radius: 6;
      -moz-border-radius: 6;
      border-radius: 6px;
      border: none;
      font-family: "Poppins";
      color: #ffffff;
      font-size: 16px;
      padding: 10px 20px 10px 20px;
      text-decoration: none;
    }
  }
  .css-input {
    padding: 12px;
    width: 80%;
    font-size: 12px;
    font-family: "Poppins";
    border-width: 1px;
    border-color: #072315;
    background-color: #d0e8d7;
    color: #000000;
    border-style: solid;
    border-radius: 10px;
    cursor: pointer !important;
    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  }
  .css-input:focus {
    outline: none;
  }
`;
const ConnectWallet = ({ switchPage, setWalletAddress, walletAddress }) => {
  const errNotify = () =>
    toast("Please add a valid address", { theme: "dark" });
  return (
    <ConnectWalletWrapper>
      <EchoreLoader className="echore-loader" />
      <div className="t-echore">ECHORE</div>

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
          Transactions
        </button>
        <button
          className="go-to-button"
          onClick={
            walletAddress.length === 42
              ? () => switchPage("account")
              : errNotify
          }
        >
          Account
        </button>
      </div>

      {/* <ConnectButton accountStatus={"avatar"} chainStatus="icon" /> */}
    </ConnectWalletWrapper>
  );
};

export default ConnectWallet;
