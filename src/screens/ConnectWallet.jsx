import React from "react";
import { ReactComponent as EchoreLoader } from "../assets/echore-loader.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import styled from "styled-components";
import { toast } from "react-toastify";
import Blockies from "react-blockies";

const ConnectWalletWrapper = styled(FlexColumnWrapper)`
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  padding: 16px 0;
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
      #adff01 100%
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
    align-items: center;
    column-gap: 8px;

    .go-to-button {
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
      width: fit-content;
      font-size: 16px;
      padding: 8px;
      /* padding: 10px 20px 10px 20px; */
      /* text-decoration: none; */
    }
  }
  .css-input {
    background: rgba(255, 255, 255, 0.05);
    width: 70%;
    padding: 10px 24px;
    border: 2px solid #adff01;
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
    border: 1px solid #adff01;
    width: 60px;
  }
`;
const ConnectWallet = ({ switchPage, setWalletAddress, walletAddress }) => {
  const errNotify = () =>
    toast("Please add a valid address", { theme: "dark" });
  return (
    <ConnectWalletWrapper>
      <EchoreLoader className="echore-loader" />
      <div className="t-echore">ECHORE</div>
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
          Track Wallet
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
