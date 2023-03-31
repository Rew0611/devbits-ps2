import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GoogleMiddleware() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { setAuthTokens} = useContext(AuthContext);
    const navigate = useNavigate();
    // const {REACT_APP_BASE_BACKEND_URL} = process.env;
    let code = searchParams.get("code")
    const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL
    const getTokens = async(auth_code) => {
        console.log(auth_code)
        try{
            axios.post(`${BACKEND_URL}api/google/callback/`, {
                headers:{
                    'Content-Type':'application/json'
                },
                data: {
                    "auth_code": auth_code
                }
            }).then((res)=>{
                console.log(res);
                if (res.data.access!=null){
                    console.log(res.data);
                    localStorage.setItem('authTokens', JSON.stringify(res.data))
                    setAuthTokens(res.data);
                    navigate("/");
                    toast.success('Logged in successfully!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
                else{
                    navigate("/signup", {state:{username: res.data.data.name, email: res.data.data.email}});
                    toast.error('You are not registered! first register', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
                // setAuthTokens(res.data)
                
                // setGoogleCompleteProfile(true)
                // navigate("/")
            }).catch((e)=>{
                console.log(e);
                toast.error('Something Went Wrong', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                // if (e.stat)
            })
        }
        catch(error){
            // console.log("catch error")
            console.error(error)
            navigate("/");
            toast.error('Something Went Wrong', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
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