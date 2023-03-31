import "./dashboard.css"
import defImg from "../News/default.png";
import {BsArrowDownLeftCircle, BsArrowUpRightCircle} from "react-icons/bs"
import { useState, useEffect } from "react";
import axios from "axios"
import { SingleCoin } from "../../config/api";

const TransactionCard = (props) => {
    const [image, setImage] = useState("");

    useEffect(()=>{
        axios.get(SingleCoin(props.id)).then((res)=>{
            console.log(res.data)
            // let p = res.data.market_data.current_price.inr
            let i = res.data.image.large;
            // setPrice(p);
            setImage(i);
            // setGain(((p-props.avgprice)/props.avgprice)*100);
            // setLoss(((props.avgprice-p)/props.avgprice)*100);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])

    // const date = props.date.toString().slice(0,10);
    // const time = props.date.toString().slice(11, 19)
    // console.log(date);
    // console.log(time)
    console.log(props.sym)

    return (
        <>
            <div class="transaction-card-main flex justify-center mx-5 my-5">
                <div
                    class="transaction-card px-6 py-2 block rounded-3xl w-100 shadow-lg relative">
                    <div className="flex">
                        <img src={image || defImg} />
                        <div className="flex flex-col justify-center ml-5">
                            <h5 class="mb text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {props.sym}
                            </h5>
                            {/* <br/> */}
                            <h3>
                                {props.name}
                            </h3>
                        </div>
                        <div className="ml-4 ">
                            {props.operation==0 ? (
                                <BsArrowDownLeftCircle className="text-2xl"/>
                            ): (
                                <BsArrowUpRightCircle className="text-2xl"/>
                            )}
                            {/* <h5 class="mb absolute right-10 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {props.operation==0 ? "BOUGHT" : "SOLD"}
                            </h5> */}
                        </div>
                    </div>
                    <div class="flex flex-col my-4 text-base text-neutral-600 dark:text-neutral-200">
                        <h3>QUANTITY : {props.quantity}</h3>
                        <h3>{props.operation==0 ? "BUYING PRICE" : "SELLING PRICE"} : {props.price}</h3>
                        <h3>Date: {props.date}</h3>
                        <h3>Time: {props.time}</h3>
                    </div>
                    {/* <button
                        type="button"
                        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Button
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default TransactionCard;