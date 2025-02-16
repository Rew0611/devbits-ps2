import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import './signup.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL;

const Signup = () => {
  const [formData, setformData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state)

  useEffect(() => {
    if (location.state)
      setformData({
        ...formData,
        ["name"]: location.state.username,
        ["email"]: location.state.email,
      });
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    console.log(BACKEND_URL);
    e.preventDefault();
    console.log(formData);
    // await loginUser(formData.email, formData.password);

        if (formData.pass1 === formData.pass2) {
            let data = {
                username: formData.name,
                email: formData.email,
                password: formData.pass1,
            }
          axios
            .post(`${BACKEND_URL}register/`, data, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              if (response.status === 201) {
                console.log("Successfull registration");
                navigate("/");
                toast.success('Registered successfully, You can Log In now', {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });
              } else if (response.status === 406) {
                console.log(response.data.msg);
              } else if (response.status === 226) {
                console.log(response.data.msg)
              }
            //   setRequesting(false);
            })
            .catch((error) => {
              console.log("server error!!");
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
            //   setRequesting(false);
            });
        } else {
          alert("password and confirm password should be same");
        //   setRequesting(false);
        toast.error('Password and Confirm Password does not match', {
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
        // setRequesting(false);
      }

    return (
        <>
        <div className="flex overflow-hidden justify-center align-middle login-main">
                <div className="flex items-center p-10 justify-center align-middle h-[70%] w-[80%] md:w-[40%] backdrop-blur-sm">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col pt-6 mt-20 space-y-5 mb-20 justify-center items-center px-10 w-[100%]"
                >

                <label className="block mt-2">
                    <span className="white whitespace-nowrap">Email ID</span>
                    <input
                    type="email"
                    onChange={handleChange}
                    className="mt-1
                              p-2
                              block
                              h-8
                              w-full
                              rounded-md
                              shadow-sm
                              text-black"
                    value={formData.email}
                    name="email"
                    placeholder=""
                    required={true}
                    />
                </label>
                <label className="block mt-2">
                    <span className="white whitespace-nowrap">Full Name</span>
                    <input
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    className="mt-1
                                p-2
                                block
                                h-8
                                w-full
                                rounded-md
                                shadow-sm
                                text-black"
                    name="name"
                    placeholder=""
                    required={true}
                    />
                </label>
                <label className="block mt-2">
                    <span className="white whitespace-nowrap">Password</span>
                    <input
                    type="password"
                    onChange={handleChange}
                    className="mt-1
                              p-2
                              block
                              h-8
                              w-full
                              rounded-md
                              shadow-sm
                              text-black"
                    name="pass1"
                    placeholder=""
                    required={true}
                    />
                </label>
                <label className="block mt-2">
                    <span className="white whitespace-nowrap">Confirm Password</span>
                    <input
                    type="password"
                    onChange={handleChange}
                    className="mt-1
                              p-2
                              block
                              h-8
                              w-full
                              rounded-md
                              shadow-sm
                              text-black"
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
            </div>
            </div>
        </>
    )
}

export default Signup;

