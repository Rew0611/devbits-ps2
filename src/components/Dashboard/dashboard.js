import StockCard from "./StockCard";
import React from "react";
import './dashboard.css'
import TransactionCard from "./transactionCard";
import WatchlistCard from "./watchlistCard";
import {useNavigate} from "react-router-dom"
import {useEffect, useContext, useState} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import avatar from "./avatar.png";
// import Graph from "../Graph/graph";

const Dashboard = () => {
    let {userInfo, authTokens, setAuthTokens} = useContext(AuthContext);
    const [stockList, setStockList] = useState([])
    const [transactionList, setTransactionList] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    const navigate = useNavigate();
    const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL;

    useEffect(()=>{
        if (userInfo){
            axios.get(`${BACKEND_URL}get-watchlist/`, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            }).then((res)=>{
                console.log(res);
                setWatchlist(res.data);
            }).catch((err)=>{
                setAuthTokens(null);
                console.log(err);
            })
            axios.get(`${BACKEND_URL}get-users-stock/`, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            }).then((res)=>{
                console.log(res);
                setStockList(res.data);
            }).catch((err)=>{
                setAuthTokens(null);
                console.log(err);
            })
            axios.get(`${BACKEND_URL}get-transactions/`, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            }).then((res)=>{
                console.log(res);
                setTransactionList(res.data);
            }).catch((err)=>{
                setAuthTokens(null);
                console.log(err);
            })
        }
    }, [userInfo])

    return (
        <>
            <div className="pt-12 flex justify-center bg-[#000000] w-[100vw] dashboard-main">
                <div className="watchlist flex flex-col overflow-auto p-6">
                    <div className="my-stocks-heading text-2xl text-white m-5">MY WATCHLIST</div>
                    {watchlist.map((data) => {
                        return <WatchlistCard id={data.id1} title={data.code_name} desc={data.full_name} image={data.image} />
                    })}
                </div>
                {/* <Graph/> */}
                <div className="cur-stocks-outer flex flex-col h-70 p-5">
                    <div className="cur-stocks-inner overflow-y-auto">
                        <div className="my-stocks-heading text-6xl text-white m-5">MY STOCKS</div>
                        <div className="current-stocks flex justify-center items-center flex-wrap mb-10">
                            {stockList.map((data) => {
                                return <StockCard id={data.id1} sym={data.symbol.toUpperCase()} name={data.stock_name} quantity={data.quantity} avgprice={data.avg_price} />
                            })}
                        </div>
                        <div className="transactions flex flex-col">
                            <div className="text-6xl text-white m-5">TRANSACTIONS</div>
                            <div className="current-stocks flex justify-center items-center flex-wrap mb-10">
                            {transactionList.map((data) => {
                                return <TransactionCard id={data.id1} sym={data.symbol.toUpperCase()} name={data.stock_name} quantity={data.quantity} operation={data.operation} price={data.price} date={data.date.toString().slice(0,10)} time={data.date.toString().slice(11, 19)} />
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="profile-outer my-4 mx-3 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                    
                    <div class="mt-6 w-fit mx-auto">
                        <img src={avatar} class="rounded-full w-28 " alt="profile picture" srcset="" />
                    </div>

                    <div class="mt-8 ">
                        <h2 class="text-white font-bold text-3xl tracking-wide">{(userInfo!=null) && userInfo.username}</h2>
                    </div>
                    
                    <div className="my-5">
                        <div class="mt-3 text-white text-3xl">
                            <span class="text-gray-400 font-semibold">BALANCE:</span>
                            <span className="ml-4">{(userInfo!=null) && userInfo.curamount}</span>
                        </div>
                        {/* <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">INVESTED:</span>
                            <span className="ml-4">15000</span>
                        </div> */}
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">GAIN:</span>
                            <span className="ml-4">{(userInfo!=null) && userInfo.gain}</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">LOSS:</span>
                            <span className="ml-4">{(userInfo!=null) && userInfo.loss}</span>
                        </div>
                    </div>
                    <div class="mt-3 text-white text-2xl">
                        <span class="text-gray-400 font-semibold">Account Opened On:</span>
                        <br/>
                        <span className="ml-2">{(userInfo!=null) && userInfo.acc_date}</span>
                    </div>
                    <div class="mt-3 text-white text-2xl">
                        <span class="text-gray-400 font-semibold">Total Earnings Till Now:</span>
                        <br/>
                        <span className="ml-2">{(userInfo!=null) && userInfo.total_earnings}</span>
                    </div>
                </div>
            </div>
            {
                <div className="mobile flex flex-col w-[100%] justify-center items-center">
                    <div class="flex flex-col profile-outer w-[100%] bg-[#20354b] rounded-xl p-5 shadow-lg">
                        
                        <div className="flex items-center mb-4">
                            <div class="flex">
                                <img src={avatar} class="rounded-full w-[40%] " alt="profile picture" srcset="" />
                            </div>

                            <div class="flex ml-3">
                                <h2 class="text-white font-bold text-3xl tracking-wide">{(userInfo!=null) && userInfo.username}</h2>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-between">
                                <div class="mt-1 text-white text-xl">
                                    <span class="text-gray-400 font-semibold">BALANCE:</span>
                                    <span className="ml-2">{(userInfo!=null) && userInfo.curamount}</span>
                                </div>
                                {/* <div class="mt-1 text-white text-lg">
                                    <span class="text-gray-400 font-semibold">INVESTED:</span>
                                    <span className="ml-2">15000</span>
                                </div> */}
                                <div class="mt-1 text-white text-lg">
                                    <span class="text-gray-400 font-semibold">GAIN:</span>
                                    <span className="ml-2">{(userInfo!=null) && userInfo.gain}</span>
                                </div>
                                <div class="mt-1 text-white text-lg">
                                    <span class="text-gray-400 font-semibold">LOSS:</span>
                                    <span className="ml-2">{(userInfo!=null) && userInfo.loss}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div class="mt-1 text-white text-lg">
                                    <span class="text-gray-400 font-semibold">ACC. OPENED ON:</span>
                                </div>
                                <div class="mt-1 text-white text-lg">
                                    <span className="ml-2">{(userInfo!=null) && userInfo.acc_date}</span>
                                </div>
                                <div class="mt-1 text-white text-lg">
                                    <span class="text-gray-400 font-semibold">TOTAL EARNINGS:</span>
                                </div>
                                <div class="mt-1 text-white text-lg">
                                    <span className="ml-2">{(userInfo!=null) && userInfo.total_earnings}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="watchlist flex flex-col overflow-auto p-6">
                        <div className="text-2xl text-white m-5">MY WATCHLIST</div>
                        <div className="flex flex-wrap justify-between h-[25vh] overflow-y-auto">
                            {watchlist.map((data) => {
                                return <WatchlistCard title={data.code_name} desc={data.full_name} image={data.image} />
                            })}
                        </div>                        
                    </div>
                    <div className="flex flex-col overflow-auto p-3">
                        <div className="text-2xl text-white m-5">MY STOCKS</div>
                        <div className="current-stocks flex justify-center items-center h-[50vh] mx-4 overflow-x-auto flex-wrap mb-10">
                            {stockList.map((data) => {
                                return <StockCard id={data.id1} sym={data.symbol.toUpperCase()} name={data.stock_name} quantity={data.quantity} avgprice={data.avg_price} />
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl text-white m-5">TRANSACTIONS</div>
                        <div className="current-stocks flex justify-center items-center h-[50vh] flex-wrap overflow-y-auto mb-10">
                        {transactionList.map((data) => {
                            return <TransactionCard id={data.id1} sym={data.symbol.toUpperCase()} name={data.stock_name} quantity={data.quantity} operation={data.operation} price={data.price} date={data.date.toString().slice(0,10)} time={data.date.toString().slice(11, 19)} />
                        })}
                        </div>
                    </div>
                    
                </div>
            }
        </>
    )
}

export default Dashboard;