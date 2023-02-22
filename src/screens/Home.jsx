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

const StyledNav = styled(FlexRowWrapper)`
  column-gap: 12px;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px;
  width: 280px;

  .th-echore {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
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
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }
  table {
    padding: 8px;
    width: 100%;
    th {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 20px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 24px;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: #141918;
      border-radius: 20px;
    }
    .scroll-wrapper {
      max-height: 200px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
`;
const Home = ({ switchPage, walletAddress }) => {
  const { baseUrl, accountEvents, pendingAccountEvents } = mantleNetwork;

  //React state initializers
  const [events, setEvents] = React.useState([]);
  const [pendingEvents, setPendingEvents] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [offset, setOffset] = React.useState(5);

  // https://explorer.testnet.mantle.xyz/api?module=account&action=pendingtxlist&address=coolMode

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
        <ArrowLeft onClick={() => switchPage("connect-wallet")} />
        <Blockies
          seed={walletAddress}
          size={10}
          scale={3}
          color="#eee"
          bgColor="#000"
          spotColor="#abc"
          className="blockies"
        />
        <div className="th-echore">ECHORE</div>
      </StyledNav>

      <FlexColumnWrapper>
        <div className="t-transaction">Processing Transactions</div>
        {/* {pendingEvents.length > 0 && pendingEvents.map((e) => (
          <TrxItem
            amount={e.value}
            type={
              e.from === "0x7b08407619f4a0e4135b822caa21237f37e8552c"
                ? "Withdraw"
                : "Deposit"
            }
            timestamp={false}
          />
        ))} */}
      </FlexColumnWrapper>
      {/* if "from"  === connected wallet -->  withdraw else deposit*/}
      <FlexColumnWrapper>
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
                {events.length > 0 &&
                  events.map((e) => (
                    <TrxItem
                      amount={e.value}
                      type={
                        e.from === "0x7b08407619f4a0e4135b822caa21237f37e8552c"
                          ? "Withdraw"
                          : "Deposit"
                      }
                      timestamp={e.timeStamp}
                    />
                  ))}
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
