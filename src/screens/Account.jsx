import axios from "axios";
import { ethers } from "ethers";
import React from "react";
import styled from "styled-components";
import ScreenHeader from "../components/common/ScreenHeader";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../wrappers/FlexRowWrapper";

const AccountWrapper = styled.div`
  padding: 0 24px;
  .t-type {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }
  .t-value {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* line-height: 48px; */
    letter-spacing: -1px;
    color: #ffffff;
  }
  .t-token {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #000000;
    background: #adff01;
    border-radius: 16px;
    height: fit-content;
    width: fit-content;
    padding: 2px;
  }
  ${FlexRowWrapper} {
    align-items: center;
    column-gap: 8px;
    padding: 12px;
  }
  .card-wrapper {
    width: 240px;
    /* height: 132px; */
    margin: 24px auto;
    top: 0px;

    background: rgba(255, 255, 255, 0.1);

    box-shadow: -3px 0px 0px #adff01;
    border-radius: 20px;
  }
`;

const Account = ({ switchPage, walletAddress }) => {
  const [balance, setBalance] = React.useState(0);
  React.useEffect(() => {
    axios
      .get(
        `https://explorer.testnet.mantle.xyz/api?module=account&action=balance&address=${walletAddress}`
      )
      .then(({ data }) => setBalance(data.result))
      .catch(console.log);
  }, []);

  console.log(balance);
  return (
    <AccountWrapper>
      <ScreenHeader switchPage={switchPage} title="Account Details" />

      <FlexColumnWrapper className="card-wrapper">
        <FlexRowWrapper>
          <div className="t-type">Total Balance</div>
        </FlexRowWrapper>
        <FlexRowWrapper>
          <div className="t-value">{ethers.utils.formatEther(balance)}</div>
          <div className="t-token">BIT</div>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </AccountWrapper>
    // 0x7b08407619f4a0e4135b822caa21237f37e8552c
    // 0x88a0c9d6a78ee080a6abe92b6dc85ca9c0b4f766
  );
};

export default Account;
