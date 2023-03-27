import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Main = () => {
    let {userInfo, logoutUser} = useContext(AuthContext);
    return (
        <>
            <div className="buttons">
            {!userInfo ? (
                <>
                <a href="/login"><button>LOGIN</button></a>
                <a href="/signup"><button>SIGN UP</button></a>
                </>
            ) : (
                <button onClick={logoutUser}>LOGOUT</button>
            )}
                
            </div>
        </>
    )
}

export default Main;