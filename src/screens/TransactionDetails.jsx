import React from "react";
import ScreenHeader from "../components/common/ScreenHeader";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../wrappers/FlexRowWrapper";

import { ReactComponent as DepositIcon } from "../assets/arrow-deposit.svg";
import { ReactComponent as WithdrawIcon } from "../assets/arrow-withdraw.svg";

import styled from "styled-components";

const TransactionDetailsWrapper = styled.div`
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
    width: fit-content;
    height: 132px;
    margin: 24px auto;
    left: 1px;
    top: 0px;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: -3px 0px 0px #adff01;
    border-radius: 20px;
  }
`;
const TransactionDetails = ({ switchPage, walletAddress, type, value }) => {
  return (
    <TransactionDetailsWrapper>
      <ScreenHeader switchPage={switchPage} title="Transaction Details" />
      <FlexColumnWrapper className="card-wrapper">
        <FlexRowWrapper>
          <DepositIcon />
          <div className="t-type">{type}</div>
        </FlexRowWrapper>
        <FlexRowWrapper>
          <div className="t-value">{value}</div>
          <div className="t-token">BIT</div>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </TransactionDetailsWrapper>
  );
};

export default TransactionDetails;
