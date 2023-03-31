import "./dashboard.css"
import defImg from "../News/default.png"
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.success('Stock removed from watchlist', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((err)=>{
            console.log(err);
            toast.error('Something Went wrong', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    return (
        <>
            <div class="watchlist-card-main flex justify-center h-15 mx-2 my-2">
                <div
                    class="flex justify-center items-center align-middle watchlist-card block rounded-3xl p-1 shadow-lg ">
                    <img src={defImg} />
                    <div className="flex flex-col justify-center mx-2">
                        <div class="watchlist-title flex font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {props.title}
                        </div>
                        {/* <br/> */}
                        <div className="watchlist-desc">
                            {props.desc}
                        </div>
                    </div>
                    <button
                        onClick={remove}
                        type="button"
                        class="flex justify-center mx-2 items-center bg-[#162859] rounded-full text-center p-3 h-[20px] w-[20px] text-xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] "
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