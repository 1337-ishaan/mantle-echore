import React from "react";
import styled from "styled-components";
import FlexColumnWrapper from "../../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../../wrappers/FlexRowWrapper";

const TrxInfoWrapper = styled(FlexRowWrapper)`
  column-gap: 8px;
  .detail-info-wrapper {
    row-gap: 4px;
  }
  .support-icon {
    /* padding: 12px; */
    background: rgba(15, 255, 236, 0.2);
    mix-blend-mode: normal;

    margin: auto;
    border-radius: 50%;
    * {
      padding: 12px;
      width: 18px;
      height: 16px;
    }
  }

  .t-detail {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
  }
  .t-info {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    &.Status {
      background: rgba(15, 255, 236, 0.2);
      mix-blend-mode: normal;
      /* opacity: 0.2; */
      width: fit-content;
      height: fit-content;
      border-radius: 12px;
      padding: 4px 6px;
      color: rgba(15, 255, 236, 2);
    }
  }
`;

const TrxInfo = ({ iconComponent, detail, info }) => {
  return (
    <TrxInfoWrapper>
      <div className="support-icon">{iconComponent}</div>
      <FlexColumnWrapper className="detail-info-wrapper">
        <div className="t-detail">{detail}</div>{" "}
        <div className={`t-info ${detail}`}>{info}</div>
      </FlexColumnWrapper>
    </TrxInfoWrapper>
  );
};

export default TrxInfo;
