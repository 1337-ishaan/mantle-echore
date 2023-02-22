import axios from "axios";
import React from "react";
import styled from "styled-components";
import ScreenHeader from "../components/common/ScreenHeader";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../wrappers/FlexRowWrapper";

const AccountWrapper = styled.div`
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
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1px;
    color: #ffffff;
  }
  .t-token {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    background: #adff01;
    border-radius: 16px;
    height: fit-content;
    padding: 4px;
  }
  ${FlexRowWrapper} {
    align-items: center;
    column-gap: 8px;
    padding: 12px;
  }
  .card-wrapper {
    width: 200px;
    height: 132px;
    margin: 24px auto;
    /* left: 1px; */
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
          <div className="t-value">{balance}</div>
          <div className="t-token">BIT</div>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </AccountWrapper>
  );
};

export default Account;
