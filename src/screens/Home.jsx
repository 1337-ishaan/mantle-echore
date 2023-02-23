import React from "react";
import Blockies from "react-blockies";
import styled from "styled-components";
import TrxItem from "../components/common/TrxItem";
import FlexColumnWrapper from "../wrappers/FlexColumnWrapper";
import FlexRowWrapper from "../wrappers/FlexRowWrapper";
import { mantleNetwork } from "../constants/api";
import axios from "axios";
import { ethers } from "ethers";

import InfiniteScroll from "react-infinite-scroller";
import { fromHex } from "alchemy-sdk";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as EchoreText } from "../assets/echore-text.svg";

const StyledNav = styled(FlexRowWrapper)`
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 290px;

  background: rgba(255, 255, 255, 0.1);
  padding: 12px;

  overflow: hidden;

  .th-echore {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    transform: scale(0.6);
    line-height: 29px;
    letter-spacing: 4px;
    color: #ffffff;
  }
  .blockies {
    border-radius: 50%;
  }
`;

const HomeWrapper = styled.div`
  .t-transaction {
    font-family: "Poppins";
    font-style: normal;
    padding: 12px;
    margin-top: 12px;
    font-weight: 600;
    width: 280px;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }
  .scroll-wrapper-1 {
    max-height: 100px;
    padding: 0 12px;
    /* padding: 0 20px; */
    overflow-y: scroll;
    width: 100%;
    overflow-x: hidden;
  }
  table {
    padding: 0 8px;
    width: 100%;
    th {
      color: #fff;
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      padding: 8px 12px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      gap: 100px;
      line-height: 24px;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: #141918;
      border-radius: 20px;
    }
    .scroll-wrapper {
      height: 160px;
      /* padding: 0 20px; */
      overflow-y: scroll;
      width: 100%;
      overflow-x: hidden;
    }
  }
  .no-transactions {
    border-radius: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.9px;
    width: fit-content;
    height: fit-content;
    margin: 4px auto;
    padding: 12px;
    text-transform: uppercase;
    color: #adff01;
    background: #141918;
    opacity: 0.5;
  }
  .transactions-wrapper {
    /* padding: 0 20px; */
    /* width: 100%; */
  }
  .divider {
    border: 1px solid #2c2c2e;
    width: 50%;
    margin: 8px auto;
  }
  .arrow-left {
    transform: scale(0.6);
    cursor: pointer;
  }
`;
const Home = ({ switchPage, walletAddress }) => {
  const { baseUrl, accountEvents, pendingAccountEvents } = mantleNetwork;

  //React state initializers
  const [events, setEvents] = React.useState([]);
  const [pendingEvents, setPendingEvents] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(5);

  React.useEffect(() => {
    axios
      .get(
        baseUrl +
          accountEvents +
          `&address=${walletAddress}&page=${page}&offset=${offset}`
      )
      .then(({ data }) => setEvents(data.result))
      .catch(console.log);
    axios
      .get(
        baseUrl +
          pendingAccountEvents +
          `&address=${walletAddress}&page=${page}&offset=${offset}`
      )
      .then(({ data }) => setPendingEvents(data.result))
      .catch(console.log);
  }, [page]);

  // const loadMore = () => {
  //   setPage(page + 1);
  // };
  console.log(pendingEvents, "events");
  return (
    <HomeWrapper>
      <StyledNav>
        <div>
          <ArrowLeft
            className="arrow-left"
            onClick={() => switchPage("connect-wallet")}
          />
        </div>

        <EchoreText className="th-echore" />
        <div
          className="blockies"
          onClick={
            walletAddress.length === 42
              ? () => switchPage("account")
              : console.log
            //     : errNotify
          }
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
        </div>
      </StyledNav>

      <FlexColumnWrapper className="transactions-wrapper">
        <div className="t-transaction">Processing Transactions</div>

        <div className="scroll-wrapper-1">
          {pendingEvents.length > 0 ? (
            pendingEvents.map((e) => (
              <TrxItem
                amount={e.value}
                type={e.from === walletAddress ? "Withdraw" : "Deposit"}
                timestamp={false}
              />
            ))
          ) : (
            <div className="no-transactions">NO PROCESSING TRANSACTIONS</div>
          )}
        </div>
      </FlexColumnWrapper>
      {/* if "from"  === connected wallet -->  withdraw else deposit*/}
      <div className="divider" />
      <FlexColumnWrapper className="transactions-wrapper">
        <div className="t-transaction">Completed Transactions</div>
        <div>
          <table>
            <tbody>
              <th>
                <td>Type</td>
                <td>Amount / Date</td>
              </th>
              {/* <InfiniteScroll
                pageStart={1}
                // hasMore={true}
                className="scroll-wrapper"
                loadMore={() => loadMore()}
                loader={<>loading</>}
              > */}
              <div className="scroll-wrapper">
                {events.length > 0 ? (
                  events.map((e) => (
                    <TrxItem
                      amount={e.value}
                      type={e.from === walletAddress ? "Withdraw" : "Deposit"}
                      timestamp={e.timeStamp}
                    />
                  ))
                ) : (
                  <div className="no-transactions">NO TRANSACTIONS</div>
                )}
              </div>
              {/* </InfiniteScroll> */}
            </tbody>
          </table>
        </div>
      </FlexColumnWrapper>
    </HomeWrapper>
  );
};

export default Home;
