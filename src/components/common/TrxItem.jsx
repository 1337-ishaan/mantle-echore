import { format } from "date-fns";
import { ethers } from "ethers";
import React from "react";
import styled from "styled-components";
import { ReactComponent as DepositIcon } from "../../assets/arrow-deposit.svg";
import { ReactComponent as WithdrawIcon } from "../../assets/arrow-withdraw.svg";
import FlexColumnWrapper from "../../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../../wrappers/FlexRowWrapper";

const TableRowWrapper = styled(FlexRowWrapper)`
  align-items: center;
  padding: 2px;
  margin-top: 8px;
  color: #fff;

  .types-wrapper {
    align-items: center;
    column-gap: 8px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
  }
  .amount-timestamp-wrapper {
    font-family: "Poppins";

    .t-amount {
      font-weight: 600;
      font-size: 12px;
    }
    .t-timestamp {
      font-weight: 500;
      font-size: 12px;
      white-space: nowrap;
      color: orange;
    }
  }
`;

function convertEpochToSpecificTimezone(timeEpoch, offset) {
  var d = new Date(timeEpoch);
  var utc = d.getTime() + d.getTimezoneOffset() * 60000; //This converts to UTC 00:00
  var nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
}

// /* identical to box he
const TrxItem = ({ type, curr, amount, token, timestamp }) => {
  return (
    <TableRowWrapper>
      <FlexRowWrapper className="types-wrapper">
        {type === "Deposit" ? <DepositIcon /> : <WithdrawIcon />}
        <FlexColumnWrapper>
          <div className="t-type">{type}</div>
          {/* <div className="t-curr">ETH</div> */}
        </FlexColumnWrapper>
      </FlexRowWrapper>
      <FlexColumnWrapper className="amount-timestamp-wrapper">
        <div className="t-amount">
          {amount > 0 ? ethers.utils.formatEther(amount) : 0} BIT
        </div>
        <div className="t-timestamp">
          {!timestamp
            ? "Processing"
            : new Date(+timestamp * 1000).toGMTString()}
        </div>
      </FlexColumnWrapper>
    </TableRowWrapper>
  );
};

export default TrxItem;
