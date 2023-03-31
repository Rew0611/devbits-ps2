import "./dashboard.css"
import defImg from "../News/default.png"
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { SingleCoin } from "../../config/api";

const StockCard = (props) => {
    const [selling, setSelling] = useState(false);
    const [sellData, setSellData] = useState(0);
    const [price, setPrice] = useState(0);
    const [loss, setLoss] = useState(((props.avgprice-price)/props.avgprice)*100);
    const [gain, setGain] = useState(((price-props.avgprice)/props.avgprice)*100);
    let {authTokens} = useContext(AuthContext);

    const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL;

    const coindetail = () => {
        axios.get(SingleCoin(props.id)).then((res)=>{
            console.log(res.data)
            let p = res.data.market_data.current_price.inr
            setPrice(p);
            setGain(((p-props.avgprice)/props.avgprice)*100);
            setLoss(((props.avgprice-p)/props.avgprice)*100);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        coindetail();
    }, [])

    const sellStock = (e) => {
        e.preventDefault()
        axios.post(`${BACKEND_URL}sell-stock/`, {
            id: props.id,
            symbol: props.sym,
            stockname: props.name,
            quantity: sellData,
            price: price
        }, {
            headers: {
                'Authorization': `Bearer ${authTokens.access}` 
            }
        }).then((res)=>{
            console.log(res.data);
            window.location.reload()
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
            <div class="stock-card-main flex justify-center h-50 p-6 mx-5 my-5">
                <div
                    class="flex flex-col block rounded-3xl shadow-lg ">
                    <div className="flex">
                        <img src={defImg} />
                        <div className="flex flex-col justify-center ml-5">
                            <h5 class="mb text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {props.sym}
                            </h5>
                            {/* <br/> */}
                            <h3>
                                {props.name}
                            </h3>
                        </div>
                    </div>
                    
                    
                    <div class="flex flex-col my-4 text-base text-neutral-600 dark:text-neutral-200">
                        <h3>QUANTITY : {props.quantity}</h3>
                        <h3>AVG BUY PRICE: {props.avgprice.toFixed(2)}</h3>
                        <h3>CURRENT PRICE: {price.toFixed(2)}</h3>
                        {(props.avgprice>price) ? (
                            <h3 className="text-red-600">{loss.toFixed(3)} % <span className="text-xl">&darr;</span></h3>
                        ): (
                            <h3 className="text-green-400">{gain.toFixed(3)} % <span className="text-xl">&uarr;</span></h3>                          
                        )}
                        <button 
                            onClick={(e)=>{
                                if (!selling)e.currentTarget.innerHTML = "X";
                                else e.currentTarget.innerHTML = "Sell Coins";
                                setSelling(!selling) }}
                            class="inline-block rounded bg-primary px-3 my-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        >Sell Coins</button>
                    </div>
                    {selling && (
                        <form onSubmit={sellStock} className="flex flex-col">
                            <label>Enter amount to sell: </label>
                            <input className="my-2 pl-2" type="text" onChange={(e) => setSellData(e.target.value)} placeholder="0.00"/>
                            <button
                                type="submit"
                                class="inline-block rounded bg-primary px-3 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                SELL
                            </button>
                        </form>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default StockCard;