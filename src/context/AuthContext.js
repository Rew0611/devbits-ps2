import { createContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;

const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL
const CLIENT_SECRET = "N882y5T9fbntN1dOy8ZecbNKpSOLafal3H5TXNxmk0G6Rg4eSvcF9uzRR7uIn7eUZbRVyGTkx7LUMos9CeVlb03anWF2ih8mfQaOgLa8OZjN8KA34zDsDOdHzPzDQTSb"
const CLIENT_ID = "blGM0JnYq0vmglFGRNE5f06BOkvLcxIYPjocZsyC"

export const AuthProvider = ({children}) => {
    let navigate = useNavigate()
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [userInfo, setUserInfo] = useState(null)
    let [loading, setLoading] = useState(true) 

    let setInfoFromToken = async(access_token) =>{
        try{
            console.log(access_token)
            let response = await axios({
                method: 'get',
                url: `${BACKEND_URL}current_user/`,
                headers: {'Authorization': `Bearer ${access_token}`}
            });

            if (response.status == 200) {
                console.log("got data!")
                console.log(response.data);
                setUserInfo(response.data)
            }
            else {
                console.log("didnt get 200 userdata")
            }
        }
        catch(e) {
            console.error("setuserinfoerror", e);
        }            
    }

    let loginUser = async (email, password)=> {
        try{
            axios.post(`${BACKEND_URL}gettoken/`, {
                email:email,
                password:password,
                // grant_type:"password",
                // client_secret: CLIENT_SECRET,
                // client_id: CLIENT_ID
            }, {
                headers:{
                    'Content-Type':'application/json',
                },
                // data: {email:email, password:password}
            }).then((res)=> {
                let data = res.data;
                console.log(data);
                setAuthTokens(data)
                localStorage.setItem('authTokens', JSON.stringify(data))

                navigate("/")
                console.log("logged in successfully");
            }).catch((e)=>{
                console.log(e);
            })
            
            // console.log(data)
    
            // if(response.status === 200){
                
            // }
            // else if (response.status == 401) {
            //     console.log("check credentials");
            // }
            // else {
            //     console.log("Something went wrong");
            // }
        }
        catch(error){
            console.log('error', error)
        }
    }

    const clearTokens = () => {
        setAuthTokens(null)
        localStorage.removeItem('authTokens')
        setUserInfo(null)
        // console.log("cleared tokens!")
    }

    let logoutUser = () => {
        clearTokens()
        setUserInfo(null);
        console.log("logged out");
        navigate("/")
    }

    let refreshTokens = async() => {
        var tokens = localStorage.getItem("authTokens");
        tokens = JSON.parse(tokens)
        console.log(authTokens)
        try {
            const response = await axios.post(`${BACKEND_URL}refreshtoken/`, {
                refresh: tokens?.refresh
              });
         
            if(response.status == 200) {
                let tokens = response.data
                tokens["refresh"] = authTokens.refresh
                localStorage.setItem('authTokens', JSON.stringify(tokens))
                // session refreshed
                console.log("session restored");
                setAuthTokens(response.data)
            }
            else if(response.status == 401) {
                clearTokens()
                // your session has expired! Please login again.
                console.log("session expired");
                navigate("/")
            }
            else {
                clearTokens()
                // something went wrong. try again later!
                console.log("something went wrong");
                navigate("/login")
            }
        }
        catch (error) {
            clearTokens()
            console.log("session expired!!");
            navigate("/login")
        }
    }
    useEffect(()=> {  
        if(loading) {
            // will be executed on first try only
            
            // if (tokens){
            //     tokens = JSON.parse(tokens)
            //     setAuthTokens(tokens);
                refreshTokens();
            // }
            
            // let tokens = localStorage.getItem("authTokens");
            // console.log(tokens)
            // if(tokens!=null) {
            //     tokens=JSON.parse(tokens);
            //     console.log(tokens)
            //     setAuthTokens(tokens);
            //     setInfoFromToken(tokens.access);
            //     // refreshTokens();           
            // }
            setLoading(false)
        }

        else {
            // does not run on first load
            if(authTokens){            
                if(!userInfo){
                    setInfoFromToken(authTokens.access);
                }
            }
            else {
                refreshTokens();
            }
        }

    }, [authTokens])

    function testContext() {
        console.log("HELLO FROM CONTEXT!");
    }

    let contextData = {
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        userInfo:userInfo,
        loginUser:loginUser,
        logoutUser:logoutUser,
        clearTokens: clearTokens,
        // googleCompleteProfile:googleCompleteProfile,
        // setGoogleCompleteProfile:setGoogleCompleteProfile,
        testContext: testContext,
    }



    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}