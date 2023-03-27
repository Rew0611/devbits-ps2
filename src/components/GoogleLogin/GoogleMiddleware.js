import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function GoogleMiddleware() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { setAuthTokens } = useContext(AuthContext);
    const navigate = useNavigate();
    // const {REACT_APP_BASE_BACKEND_URL} = process.env;
    let code = searchParams.get("code")
    const BACKEND_URL = "http://localhost:8000"
    const getTokens = async(auth_code) => {
        console.log(auth_code)
        try{
            axios.post(`${BACKEND_URL}/api/google/callback/`, {
                headers:{
                    'Content-Type':'application/json'
                },
                data: {
                    "auth_code": auth_code
                }
            }).then((res)=>{
                console.log(res);
                setAuthTokens(res.data)
                localStorage.setItem('authTokens', JSON.stringify(res.data))
                // setGoogleCompleteProfile(true)
                navigate("/")
            }).catch((e)=>{
                console.log(e);
            })
        }
        catch(error){
            // console.log("catch error")
            console.error(error)
            navigate("/");
        }
    
    }

    useEffect(() => {
        // console.log("HELLO USE EFFECT!")
        getTokens(code);
    }, [])
  return (
    <div>Please wait. We are logging you in......</div>
  )
}

export default GoogleMiddleware