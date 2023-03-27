import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signup.css'

const REACT_APP_BASE_BACKEND_URL = "http://localhost:8000";

const Signup = () => {
    const [formData, setformData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
    
        // await loginUser(formData.email, formData.password);

        if (formData.pass1 === formData.pass2) {
            let data = {
                username: formData.name,
                email: formData.email,
                password: formData.pass1,
            }
          axios
            .post(`${REACT_APP_BASE_BACKEND_URL}/register/`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              if (response.status === 201) {
                console.log("Successfull registration");
                navigate("/");
              } else if (response.status === 406) {
                console.log(response.data.msg);
              } else if (response.status === 226) {
                console.log(response.data.msg)
              }
            //   setRequesting(false);
            })
            .catch((error) => {
              console.log("server error!!");
            //   setRequesting(false);
            });
        } else {
          alert("password and confirm password should be same");
        //   setRequesting(false);
        }
        // setRequesting(false);
      }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-20 space-y-5 mb-20 justify-center items-center px-10 w-[100%]"
                >

                <label className="block w-6/12 min-w-[15rem]">
                    <span className="white whitespace-nowrap">Email ID</span>
                    <input
                    type="email"
                    onChange={handleChange}
                    className="searchx block w-full mt-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="email"
                    placeholder=""
                    required={true}
                    />
                </label>
                <label className="block w-6/12 min-w-[15rem]">
                    <span className="white whitespace-nowrap">Full Name</span>
                    <input
                    type="text"
                    onChange={handleChange}
                    className="searchx block w-full mt-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="name"
                    placeholder=""
                    required={true}
                    />
                </label>
                <label className="block w-6/12 min-w-[15rem]">
                    <span className="white whitespace-nowrap">Password</span>
                    <input
                    type="text"
                    onChange={handleChange}
                    className="searchx block w-full mt-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="pass1"
                    placeholder=""
                    required={true}
                    />
                </label>
                <label className="block w-6/12 min-w-[15rem]">
                    <span className="white whitespace-nowrap">Confirm Password</span>
                    <input
                    type="text"
                    onChange={handleChange}
                    className="searchx block w-full mt-3 mb-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="pass2"
                    placeholder=""
                    required={true}
                    />
                </label>
                <button
                  id="register"
                  type="submit"
                  className="bg-[#456A9D] rounded-lg w-36 my-3.5 p-2 text-white font-semibold hover:scale-110 transition-all ease-in-out"
                >
                  Register
                </button>
            </form>
        </>
    )
}

export default Signup;