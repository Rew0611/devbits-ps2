import "./dashboard.css"
import defImg from "../News/default.png";

const TransactionCard = (props) => {
    return (
        <>
            <div class="transaction-card-main flex justify-center h-25 w-80 mx-5 my-5">
                <div
                    class="transaction-card px-6 py-2 block rounded-3xl shadow-lg w-200 relative">
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
                        <div>
                            <h5 class="mb absolute right-10 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {props.operation==0 ? "BOUGHT" : "SOLD"}
                            </h5>
                        </div>
                    </div>
                    <p class="my-4 text-base text-neutral-600 dark:text-neutral-200">
                        <h3>QUANTITY : {props.quantity}</h3>
                        <br/>
                        <h3>{props.operation==0 ? "BUYING PRICE" : "SELLING PRICE"} : {props.price}</h3>
                    </p>
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