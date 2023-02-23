import React from "react";
import styled from "styled-components";
import FlexRowWrapper from "../../wrappers/FlexRowWrapper";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

const ScreenHeaderWrapper = styled(FlexRowWrapper)`
  background: rgba(255, 255, 255, 0.1);

  align-items: center;
  column-gap: 14px;

  overflow: hidden;

  .arrow-left {
    width: 8px;
    cursor: pointer;
  }
  .t-title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #c1c7cd;
  }
`;
const ScreenHeader = ({ switchPage, title = "Transaction Details" }) => {
  return (
    <ScreenHeaderWrapper>
      <div onClick={() => switchPage("connect-wallet")}>
        <ArrowLeft className="arrow-left" />
      </div>
      <div className="t-title">{title}</div>
    </ScreenHeaderWrapper>
  );
};

export default ScreenHeader;
