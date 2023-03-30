import StockCard from "./StockCard";
import React from "react";
import './dashboard.css'
import TransactionCard from "./transactionCard";
import WatchlistCard from "./watchlistCard";
import {useNavigate} from "react-router-dom"
import {useEffect, useContext, useState} from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
// import Graph from "../Graph/graph";

const Dashboard = () => {
    let {userInfo, authTokens, setAuthTokens} = useContext(AuthContext);
    const [stockList, setStockList] = useState([])
    const [transactionList, setTransactionList] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        if (userInfo){
            axios.get("http://localhost:8000/get-watchlist/", {
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
            axios.get("http://localhost:8000/get-users-stock/", {
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
            axios.get("http://localhost:8000/get-transactions/", {
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
            <div className="pt-12 flex justify-center bg-[#000000] w-full dashboard-main">
                <div className="watchlist flex flex-col overflow-auto p-6">
                    <div className="my-stocks-heading text-2xl text-white m-5">MY WATCHLIST</div>
                    {watchlist.map((data) => {
                        return <WatchlistCard title={data.code_name} desc={data.full_name} />
                    })}
                </div>
                {/* <Graph/> */}
                <div className="cur-stocks-outer flex flex-col h-70 p-5">
                    <div className="cur-stocks-inner overflow-y-auto">
                        <div className="my-stocks-heading text-6xl text-white m-5">MY STOCKS</div>
                        <div className="current-stocks flex justify-center items-center flex-wrap mb-10">
                            {stockList.map((data) => {
                                return <StockCard title={data.stock_name} quantity={data.quantity} />
                            })}
                        </div>
                        <div className="transactions flex flex-col">
                            <div className="text-6xl text-white m-5">TRANSACTIONS</div>
                            <div className="current-stocks flex justify-center items-center flex-wrap mb-10">
                            {transactionList.map((data) => {
                                return <TransactionCard title={data.stock_name} price={data.price} quantity={data.quantity} operation={data.operation} />
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="profile-outer my-4 mx-3 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                    
                    <div class="mt-6 w-fit mx-auto">
                        <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" class="rounded-full w-28 " alt="profile picture" srcset="" />
                    </div>

                    <div class="mt-8 ">
                        <h2 class="text-white font-bold text-3xl tracking-wide">Jonathan Smith</h2>
                    </div>
                    
                    <div className="my-5">
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">BALANCE:</span>
                            <span className="ml-4">{userInfo.curamount}</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">INVESTED:</span>
                            <span className="ml-4">15000</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">GAIN:</span>
                            <span className="ml-4">{userInfo.gain}</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">LOSS:</span>
                            <span className="ml-4">{userInfo.loss}</span>
                        </div>
                    </div>
                    <div class="mt-3 text-white text-2xl">
                        <span class="text-gray-400 font-semibold">Account Opened On:</span>
                        <br/>
                        <span className="ml-2">{userInfo.acc_date}</span>
                    </div>
                    <div class="mt-3 text-white text-2xl">
                        <span class="text-gray-400 font-semibold">Total Earnings Till Now:</span>
                        <br/>
                        <span className="ml-2">{userInfo.total_earnings}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;