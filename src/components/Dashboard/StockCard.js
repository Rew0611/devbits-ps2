import "./dashboard.css"
import defImg from "../News/default.png"
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { SingleCoin } from "../../config/api";

const StockCard = (props) => {
    const [sellData, setSellData] = useState(0);
    const [price, setPrice] = useState(0);
    let {authTokens} = useContext(AuthContext);

    const coindetail = () => {
        axios.get(SingleCoin(props.id)).then((res)=>{
            console.log(res.data)
            setPrice(res.data.current_price);
        }).catch((err)=>{
            console.log(err);
        })
    }

    // useEffect(()=>{
    //     coindetail();
    // }, [])

    const sellStock = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/sell-stock/", {
            stockname: "Bitcoin",
            quantity: sellData,
            price: 10000
        }, {
            headers: {
                'Authorization': `Bearer ${authTokens.access_token}` 
            }
        }).then((res)=>{
            console.log(res.data);
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
                                {props.title}
                            </h5>
                            {/* <br/> */}
                            <h3>
                                Bitcoin
                            </h3>
                        </div>
                    </div>
                    
                    
                    <p class="my-4 text-base text-neutral-600 dark:text-neutral-200">
                        <h3>QUANTITY : {props.quantity}</h3>
                        <br/>
                        <h3>CURRENT PRICE: {price}</h3>
                    </p>
                    <form onSubmit={sellStock} className="flex flex-col">
                        <label>Enter amount to sell: </label>
                        <input type="text" onChange={(e) => setSellData(e.target.value)} placeholder="0.00"/>
                        <button
                            type="submit"
                            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            SELL
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StockCard;