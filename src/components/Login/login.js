import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginWithGoogle from "../GoogleLogin/googleLogin";
import "./login.css";

const Login = () => {
    const [formData, setformData] = useState({ email: "", password: "" });
    let { loginUser, clearTokens } = useContext(AuthContext);

    useEffect(() => {
        // console.log("clearing tokens");
        clearTokens();
    }, []);

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleClick(e) {
        e.preventDefault();

        // setRequesting(true);
        await loginUser(formData.email, formData.password);
        // setRequesting(false);
    }

    return (
        <>
            <div className="flex overflow-hidden justify-center align-middle login-main">
                <div className="flex items-center p-10 justify-center align-middle h-[70%] w-[80%] md:w-[40%] backdrop-blur-sm">
                    <form onSubmit={handleClick} className="w-full h-full flex justify-center flex-col bg">
                        <label>
                            <span className="text-white text-lg whitespace-nowrap">Email ID</span>
                            <input
                                type="email"
                                onChange={handleChange}
                                className="block p-2 h-8 w-full mt-1 rounded-md shadow-sm text-black"
                                name="email"
                                placeholder=""
                                required={true}
                            />
                        </label>
                        <label className="block mt-2">
                            <span className="text-white text-lg whitespace-nowrap">Password</span>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                className="
                                        mt-1
                                        p-2
                                        block
                                        h-8
                                        w-full
                                        rounded-md
                                        shadow-sm
                                        text-black
                                    "
                                required={true}
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-[#456A9D] rounded-lg mt-8 mb-10 w-full h-8 text-white font-semibold hover:scale-105 transition-all ease-in-out"
                        >
                            Login
                        </button>
                        <div className="flex w-full justify-center items-center">
                            <LoginWithGoogle/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
