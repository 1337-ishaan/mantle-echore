import React from "react";
import ScreenHeader from "../components/common/ScreenHeader";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../wrappers/FlexRowWrapper";

import { ReactComponent as DepositIcon } from "../assets/arrow-deposit.svg";
import { ReactComponent as WithdrawIcon } from "../assets/arrow-withdraw.svg";
import { ReactComponent as CoinsIcon } from "../assets/coins.svg";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import { ReactComponent as TimeIcon } from "../assets/time.svg";
import { ReactComponent as WalletIcon } from "../assets/wallet.svg";
import { ReactComponent as ChequeIcon } from "../assets/cheque.svg";
// import { ReactComponent as WithdrawIcon } from "../assets/arrow-withdraw.svg";

import styled from "styled-components";
import TrxItem from "../components/common/TrxItem";
import TrxInfo from "../components/common/TrxInfo";
import { ethers } from "ethers";
import truncateEthAddress from "truncate-eth-address";

const TransactionDetailsWrapper = styled.div`
  width: 315px;

  overflow: hidden;
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
    font-size: 24px;
    line-height: 48px;
    letter-spacing: -1px;
    color: #ffffff;
  }
  .t-token {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    /* line-height: 20px; */
    text-align: center;
    color: #000000;
    background: rgba(15, 255, 236, 0.6);

    border-radius: 16px;
    height: fit-content;
    padding: 3px 6px;
  }
  .row-transactions {
    align-items: center;
    column-gap: 8px;
    padding: 12px;
  }
  .card-wrapper {
    /* width: fit-content; */
    display: flex;
    width: 80%;
    height: 132px;
    margin: 24px auto;
    left: 1px;
    top: 0px;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: -3px 0px 0px rgba(15, 255, 236, 0.5);
    border-radius: 20px;
  }

  .details-wrapper {
    gap: 8px;
    padding: 0 12px 24px;
    overflow-y: scroll;
    max-height: 230px;
  }
  .t-explorer-link {
    color: rgba(15, 255, 236, 1);
  }
`;
const TransactionDetails = ({
  switchPage,
  walletAddress,
  type,
  value,
  trxHash,
}) => {
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    if (!trxHash) {
      return;
    }
    const fetchTransaction = async () => {
      fetch(
        `https://explorer.testnet.mantle.xyz/api?module=transaction&action=gettxinfo&txhash=` +
          trxHash
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "OK") {
            setInfo(data.result);
          }
        });
    };
    fetchTransaction();
  }, [trxHash]);

  console.log(info, trxHash, "info");

  return (
    <TransactionDetailsWrapper>
      <ScreenHeader
        switchPage={switchPage}
        switchPageTo="home"
        title="Transaction Details"
      />

      <FlexColumnWrapper className="card-wrapper">
        <FlexRowWrapper className="row-transactions">
          {walletAddress === info.from ? <WithdrawIcon /> : <DepositIcon />}
          <div className="t-type">
            {walletAddress === info.from ? "Withdraw" : "Deposit"}
          </div>
        </FlexRowWrapper>
        <FlexRowWrapper className="row-transactions">
          <div className="t-value">
            {info.value ? ethers.utils.formatEther(info.value) : 0}
          </div>
          <div className="t-token">BIT</div>
        </FlexRowWrapper>
      </FlexColumnWrapper>

      <FlexColumnWrapper className="details-wrapper">
        <TrxInfo
          iconComponent={<CheckIcon />}
          detail="Status"
          info={info.success ? "Confirmed" : "Pending"}
        />
        <TrxInfo
          iconComponent={<TimeIcon />}
          detail="Timestamp"
          info={
            info.timeStamp &&
            new Date(+info.timeStamp * 1000)
              .toUTCString()
              .split(" ")
              .slice(0, 5)
              .join(" ")
          }
        />{" "}
        <TrxInfo
          iconComponent={<CoinsIcon />}
          detail="Amount"
          info={
            (info.value ? ethers.utils.formatEther(info.value) : 0) + " BIT"
          }
        />{" "}
        <TrxInfo
          iconComponent={<WalletIcon />}
          detail="From Address"
          info={info.from && truncateEthAddress(info.from)}
        />
        <TrxInfo
          iconComponent={<WalletIcon />}
          detail="To Address"
          info={info.to && truncateEthAddress(info.to)}
        />
        <TrxInfo
          iconComponent={<ChequeIcon />}
          detail="Transaction ID"
          info={
            info.hash && (
              <a
                className="t-explorer-link"
                href={`https://explorer.testnet.mantle.xyz/tx/${
                  info.hash && info.hash
                }`}
                alt="explorer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {truncateEthAddress(info.hash)}
              </a>
            )
          }
        />
      </FlexColumnWrapper>
    </TransactionDetailsWrapper>
  );
};

export default TransactionDetails;
