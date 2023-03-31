import StockCard from "./StockCard";
import React from "react";
import "./dashboard.css";
import TransactionCard from "./transactionCard";
import WatchlistCard from "./watchlistCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import avatar from "./avatar.png";
// import Graph from "../Graph/graph";

const Dashboard = () => {
  let { userInfo, authTokens, setAuthTokens } = useContext(AuthContext);
  const [stockList, setStockList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const navigate = useNavigate();
  const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL;

  useEffect(() => {
    if (userInfo) {
      axios
        .get(`${BACKEND_URL}get-watchlist/`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
        .then((res) => {
          console.log(res);
          setWatchlist(res.data);
        })
        .catch((err) => {
          setAuthTokens(null);
          console.log(err);
        });
      axios
        .get(`${BACKEND_URL}get-users-stock/`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
        .then((res) => {
          console.log(res);
          setStockList(res.data);
        })
        .catch((err) => {
          setAuthTokens(null);
          console.log(err);
        });
      axios
        .get(`${BACKEND_URL}get-transactions/`, {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
        .then((res) => {
          console.log(res);
          setTransactionList(res.data);
        })
        .catch((err) => {
          setAuthTokens(null);
          console.log(err);
        });
    }
  }, [userInfo]);

  return (
    <>
      <div className="pt-12 flex justify-center bg-[#000000] w-[100vw] dashboard-main">
        <div className="watchlist flex flex-col overflow-auto p-6">
          <div
            className="my-stocks-heading text-2xl xl:mt-10 pb-4 text-center  funcs m-5"
            style={{
              color: "#fff2b5",
              backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
            }}
          >
            WATCHLIST
          </div>
          {watchlist.map((data) => {
            return (
              <WatchlistCard
                title={data.code_name}
                desc={data.full_name}
                image={data.image}
              />
            );
          })}
        </div>
        {/* <Graph/> */}
        <div className="cur-stocks-outer flex flex-col h-70 p-5">
          <div className="cur-stocks-inner overflow-y-auto">
            <div
              className="my-stocks-heading text-5xl pt-8 pl-4 pb-4 text-center  m-5"
              style={{
                color: "#fff2b5",
                backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              MY STOCKS
            </div>
            <div className="current-stocks flex justify-center items-center flex-wrap mb-10">
              {stockList.map((data) => {
                return (
                  <StockCard
                    id={data.id1}
                    sym={data.symbol.toUpperCase()}
                    name={data.stock_name}
                    quantity={data.quantity}
                    avgprice={data.avg_price}
                  />
                );
              })}
            </div>
            <div className="transactions flex flex-col">
              <div
                className="text-5xl mb-8 text-center m-5"
                style={{
                  color: "#fff2b5",
                  backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
              >
                TRANSACTIONS
              </div>
              <div className="current-stocks flex justify-center items-center flex-wrap mb-10">
                {transactionList.map((data) => {
                  return (
                    <TransactionCard
                      id={data.id1}
                      sym={data.symbol.toUpperCase()}
                      name={data.stock_name}
                      quantity={data.quantity}
                      operation={data.operation}
                      price={data.price}
                      date={data.date.toString().slice(0, 10)}
                      time={data.date.toString().slice(11, 19)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div class="profile-outer my-4 mx-3 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div class="mt-6 w-fit mx-auto">
            <img
              src={avatar}
              class="rounded-full w-28 "
              alt="profile picture"
              srcset=""
            />
          </div>

          <div class="mt-8 ">
            <h2
              class="funcs font-bold text-3xl tracking-wide"
              style={{
                color: "#fff2b5",
                backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              {userInfo != null && userInfo.username}
            </h2>
          </div>

          <div className="my-5">
            <div class="mt-3 text-white text-3xl">
              <span class="text-gray-400 funcs font-semibold">Balance:</span>
              <span className="ml-4 funcs text-2xl text-blue-500">
                {userInfo != null && userInfo.curamount}
              </span>
            </div>
            {/* <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">INVESTED:</span>
                            <span className="ml-4">15000</span>
                        </div> */}
            <div class="mt-3 text-white text-2xl">
              <span class="text-gray-400 funcs font-semibold">
                Realised Gain:
              </span>
              <span className="ml-4 funcs text-green-600">
                {userInfo != null && userInfo.gain}
              </span>
            </div>
            <div class="mt-3 text-white text-2xl">
              <span class="text-gray-400 funcs font-semibold">
                Realised Loss:
              </span>
              <span className="ml-4 funcs text-red-700">
                {userInfo != null && userInfo.loss}
              </span>
            </div>
          </div>
          <div class="mt-3 text-white text-2xl">
            <span class="text-gray-400 funcs font-semibold">
              Account Opened On
            </span>
            <br />
            <span className="ml-2 funcs text-blue-500">
              {userInfo != null && userInfo.acc_date}
            </span>
          </div>
          <div class="mt-3 text-white text-2xl">
            <span class="text-gray-400 funcs font-semibold">
              Total Earnings:
            </span>
            <span
              className="ml-2 funcs text-green-600"
              style={
                userInfo != null && userInfo.total_earnings > 0
                  ? { color: "rgb(22,163,74)" }
                  : { color: "red" }
              }
            >
              {userInfo != null && userInfo.total_earnings}
            </span>
          </div>
        </div>
      </div>
      {
        <div className="mobile flex flex-col w-[100%] justify-center items-center">
          <div class="flex flex-col profile-outer w-[100%] bg-[#20354b] rounded-xl p-5 shadow-lg">
            <div className="flex items-center mb-4">
              <div class="flex">
                <img
                  src={avatar}
                  class="rounded-full w-[40%] "
                  alt="profile picture"
                  srcset=""
                />
              </div>

              <div class="flex ml-3">
                <h2
                  class="funcs font-bold text-2xl tracking-wide"
                  style={{
                    color: "#fff2b5",
                    backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                  }}
                >
                  {userInfo != null && userInfo.username}
                </h2>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col justify-between">
                <div class="mt-2 text-white text-lg">
                  <span class="text-gray-400 funcs font-semibold">
                    Balance:
                  </span>
                  <span className="ml-2 funcs text-blue-500">
                    {userInfo != null && userInfo.curamount}
                  </span>
                </div>
                {/* <div class="mt-1 text-white text-lg">
                                    <span class="text-gray-400 font-semibold">INVESTED:</span>
                                    <span className="ml-2">15000</span>
                                </div> */}
                <div class="mt-1 text-white text-lg">
                  <span class="text-gray-400 funcs font-semibold">
                    Realised Gain:
                  </span>
                  <span className="ml-2 funcs text-green-400" >
                    {userInfo != null && userInfo.gain}
                  </span>
                </div>
                <div class="mt-1 text-white text-lg">
                  <span class="text-gray-400 funcs font-semibold">
                    Realised Loss:
                  </span>
                  <span className="ml-2 funcs text-red-500">
                    {userInfo != null && userInfo.loss}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div class="mt-1 text-white text-lg">
                  <span class="text-gray-400 funcs font-semibold">
                    Registered on
                  </span>
                </div>
                <div class="mt-1 text-blue-500 text-lg">
                  <span className="ml-2 funcs">
                    {userInfo != null && userInfo.acc_date}
                  </span>
                </div>
                <div class="mt-1 text-white text-lg">
                  <span class="text-gray-400 funcs font-semibold">
                    Total Earnings
                  </span>
                </div>
                <div class="mt-1 text-white text-lg" style={
                userInfo != null && userInfo.total_earnings > 0
                  ? { color: "rgb(22,163,74)" }
                  : { color: "red" }
              }>
                  <span className="ml-2">
                    {userInfo != null && userInfo.total_earnings}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="watchlist flex flex-col overflow-auto p-6">
            <div className="text-2xl text-white m-5">MY WATCHLIST</div>
            <div className="flex flex-wrap justify-between h-[25vh] overflow-y-auto">
              {watchlist.map((data) => {
                return (
                  <WatchlistCard
                    title={data.code_name}
                    desc={data.full_name}
                    image={data.image}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col overflow-auto p-3">
            <div className="text-2xl text-white m-5">MY STOCKS</div>
            <div className="current-stocks flex justify-center items-center h-[50vh] mx-4 overflow-x-auto flex-wrap mb-10">
              {stockList.map((data) => {
                return (
                  <StockCard
                    id={data.id1}
                    sym={data.symbol.toUpperCase()}
                    name={data.stock_name}
                    quantity={data.quantity}
                    avgprice={data.avg_price}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl funcs text-center self-center items-center text-white m-5">
              TRANSACTIONS
            </div>
            <div className="current-stocks flex justify-center items-center h-[50vh] flex-wrap overflow-y-auto mb-10">
              {transactionList.map((data) => {
                return (
                  <TransactionCard
                    id={data.id1}
                    sym={data.symbol.toUpperCase()}
                    name={data.stock_name}
                    quantity={data.quantity}
                    operation={data.operation}
                    price={data.price}
                    date={data.date.toString().slice(0, 10)}
                    time={data.date.toString().slice(11, 19)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Dashboard;
