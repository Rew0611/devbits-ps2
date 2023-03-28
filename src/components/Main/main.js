import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import NETS from "vanta/dist/vanta.net.min";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import './main.css';
import aboutusimg from "./aboutus.png";
import Contact from "../Contact/contact";
import Carousel from "../Banner/Carousel";

const Main = () => {
    let {userInfo, logoutUser} = useContext(AuthContext);
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null)
    useEffect(()=>{
        if (!vantaEffect){
        setVantaEffect(
            NETS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,
            backgroundColor: 0x1,
            points: 11.00,
            maxDistance: 0,
            spacing: 18.00
            // THREE
            })
        )
        }
        return () => {
            if (vantaEffect)vantaEffect.destroy()
        }
    }, [vantaEffect])
    const [width, setwidth] = useState(false);
    const [x, setx] = useState(false);
    const updateWidth = () => {
      setwidth(window.innerWidth);
    };
    useEffect(()=>{
        setwidth(window.innerWidth);
    },[x]);
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
    console.log(width);
    // if(width<950)
    // {
        return (
            <>
            <div className="main-outer flex flex-col">
                <div className="rew pt-10 pb-20 mb-5 main flex flex-shrink-0 h-[90vh] w-[100%] justify-evenly items-center" ref={vantaRef}>
                {/* <img src={anime} height="200" width="700px"/> */}
                    <div className="main-heading text-white flex flex-col h-[50vh] mx-10">
                        <div className="s1 main-heading1 mb-5">Levi</div>
                        <div className="s2 main-heading2 my-3">Join the best Crypto Exchange in the world</div>
                        <div className="s3 main-heading3 mt-2">Levi is the easiest place to buy and sell Cryptocurrency. <br/> Sign Up and get started today</div>
                        {/* <div className="main-heading3 text-2xl"></div> */}
                        
                    </div>
                    <div className="flex items-center justify-center hexd"> 
                    <video loop autoPlay muted playsinline className="max-h-[80%] max-w-[80%]">
                        <source
                            type="video/mp4"
                            src="https://i.imgur.com/erslMug.mp4"
                            // src="https://i.imgur.com/p3ZslcL.mp4"
                            // src="https://i.imgur.com/Dv7Cood.mp4"
                            // src="https://i.imgur.com/FVEh1Jf.mp4"
                        ></source>
                    </video>
                    </div> 
                    {/* <div className="scroll-down-arrow"> */}
                        {/* <ScrollLink
                            to="about"
                            spy={true}
                            smooth={true}
                        > */}
                        {/* <img src={mouse} alt="mouse"></img> */}
                        {/* <IoIosArrowDown/> */}
                        {/* </ScrollLink> */}
                    {/* </div> */}
                {/* <div className="buttons">
                {!userInfo ? (
                    <>
                    <a href="/login"><button>LOGIN</button></a>
                    <a href="/signup"><button>SIGN UP</button></a>
                    </>
                ) : (
                    <button onClick={logoutUser}>LOGOUT</button>
                )}
                    
                </div> */}
                </div>
                <div className="about-us flex h-[90vh] flex-shrink-0 justify-evenly">
                    <div className="flex flex-col w-[60vw] ml-8">            
                        <div className="aboutus-heading text-white text-5xl my-7">ABOUT US</div>
                        <div className="aboutus-content text-white text-2xl">At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.</div>
                    </div>
                    <div className="aboutus-image flex  h-[40vh] w-[30vw]">
                        {/* <img src="D:\Devbits\devbits-ps2\src\components\Main\aboutus.png" height="200px" width={"200px"}/> */}
                    </div>
                </div>
                <Carousel/>
                <Contact/>
                </div>
            </>
        )
        // }
    // else if(width>950 || false){
    // return (
    //     <>
    //     <div className="main-outer flex flex-col mt-11">
    //         <div className="mb-10 main flex flex-shrink-0 h-[90vh] w-[100%] justify-evenly items-center" ref={vantaRef}>
    //         {/* <img src={anime} height="200" width="700px"/> */}
    //             <div className="main-heading text-white flex flex-col h-[50vh] mx-10">
    //                 <div className="main-heading1 text-6xl my-5">Levi</div>
    //                 <div className="main-heading2 text-4xl my-3">Join the best Crypto Exchange in the world</div>
    //                 <div className="main-heading3 text-2xl my-2">Levi is the easiest place to buy and sell Cryptocurrency. <br/> Sign Up and get started today</div>
    //                 {/* <div className="main-heading3 text-2xl"></div> */}
    //             </div>
    //             <div>
    //             <video loop autoPlay muted playsinline className="max-h-[60%] max-w-[60%]">
    //                 <source
    //                     type="video/mp4"
    //                     src="https://i.imgur.com/erslMug.mp4"
    //                     // src="https://i.imgur.com/p3ZslcL.mp4"
    //                     // src="https://i.imgur.com/Dv7Cood.mp4"
    //                     // src="https://i.imgur.com/FVEh1Jf.mp4"
    //                 ></source>
    //             </video> 
    //             </div> 
    //         {/* <div className="buttons">
    //         {!userInfo ? (
    //             <>
    //             <a href="/login"><button>LOGIN</button></a>
    //             <a href="/signup"><button>SIGN UP</button></a>
    //             </>
    //         ) : (
    //             <button onClick={logoutUser}>LOGOUT</button>
    //         )}
                
    //         </div> */}
    //         </div>
    //         <div className="about-us flex h-[90vh] flex-shrink-0 justify-evenly">
    //             <div className="flex flex-col w-[60vw] ml-8">            
    //                 <div className="aboutus-heading text-white text-5xl my-7">ABOUT US</div>
    //                 <div className="aboutus-content text-white text-2xl">At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.</div>
    //             </div>
    //             <div className="aboutus-image flex  h-[40vh] w-[30vw]">
    //                 {/* <img src="D:\Devbits\devbits-ps2\src\components\Main\aboutus.png" height="200px" width={"200px"}/> */}
    //             </div>
    //         </div>
    //         <Carousel/>
    //         <Contact/>
    //         </div>
    //     </>
    // );
        // }
}

export default Main;