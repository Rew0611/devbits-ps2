import "./dashboard.css"
import defImg from "../News/default.png"
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const WatchlistCard = (props) => {
    let {authTokens} = useContext(AuthContext);
    const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL;

    const remove = ()=>{
        axios.post(`${BACKEND_URL}remove-watchlist/`,{
            code: props.title
        },{
            headers: {
            'Authorization': `Bearer ${authTokens.access}` 
            }
        }).then((res)=>{
            console.log(res);
            console.log("stock removed from watchlist")
            window.location.reload()
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
            <div class="watchlist-card-main flex justify-center h-15 w-30 mx-2 my-2">
                <div
                    class="flex justify-center items-center align-middle watchlist-card block max-w-sm rounded-3xl p-1 shadow-lg ">
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
                    <button
                        onClick={remove}
                        type="button"
                        class="flex justify-center mx-4 items-center bg-[#162859] rounded-full text-center p-3 h-[20px] w-[20px] text-xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        -
                    </button>
                </div>
            </div>
        </>
    )
}

export default WatchlistCard;