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
  margin-top: 14px;
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

// /* identical to box he
const TrxItem = ({ type, curr, amount, token, timestamp }) => {
  return (
    <TableRowWrapper>
      <FlexRowWrapper className="types-wrapper">
        {type === "Deposit" ? <DepositIcon /> : <WithdrawIcon />}
        <FlexColumnWrapper>
          <div className="t-type">{type}</div>
          <div className="t-curr">BIT</div>
        </FlexColumnWrapper>
      </FlexRowWrapper>
      <FlexColumnWrapper className="amount-timestamp-wrapper">
        <div className="t-amount">
          {amount > 0 ? ethers.utils.formatEther(amount) : 0} BIT
        </div>
        <div className="t-timestamp">
          {!timestamp
            ? "Processing"
            : new Date(+timestamp * 1000)
                .toUTCString()
                .split(" ")
                .slice(0, 4)
                .join(" ")}
        </div>
      </FlexColumnWrapper>
    </TableRowWrapper>
  );
};

export default TrxItem;
