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
    let {userInfo, authTokens} = useContext(AuthContext);
    const [stockList, setStockList] = useState([])
    const [transactionList, setTransactionList] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    const navigate = useNavigate();

    // const stockList = [
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     },
    //     {
    //         title: "Card Title",
    //         desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    //     }
    // ]

    useEffect(()=>{
        if (userInfo){
            console.log(userInfo);
            setWatchlist(userInfo.watchlist);
            console.log(watchlist);
            axios.get("http://localhost:8000/get-users-stock/", {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            }).then((res)=>{
                console.log(res);
                setStockList(res.data);
            }).catch((err)=>{
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
                console.log(err);
            })
        }
    }, [userInfo])

    return (
        <>
            <div className="flex justify-center bg-[#000000] h-[90%] w-full dashboard-main">
                <div className="watchlist flex flex-col overflow-auto p-6">
                    <div className="my-stocks-heading text-2xl text-white m-5">MY WATCHLIST</div>
                    {stockList.map((data) => {
                        return <WatchlistCard title={data.title} desc={"hello my name is anant jain"} />
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
                            <span className="ml-4">1000000</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">INVESTED:</span>
                            <span className="ml-4">15000</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">GAIN:</span>
                            <span className="ml-4">3000</span>
                        </div>
                        <div class="mt-3 text-white text-2xl">
                            <span class="text-gray-400 font-semibold">LOSS:</span>
                            <span className="ml-4">1000</span>
                        </div>
                    </div>
                    <div class="mt-3 text-white text-2xl">
                        <span class="text-gray-400 font-semibold">Account Opened On:</span>
                        <br/>
                        <span className="ml-2">10th March, 2023</span>
                    </div>
                    <div class="mt-3 text-white text-2xl">
                        <span class="text-gray-400 font-semibold">Total Earnings Till Now:</span>
                        <br/>
                        <span className="ml-2">10000</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;