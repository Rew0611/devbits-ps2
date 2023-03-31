import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import NETS from "vanta/dist/vanta.net.min";
import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import "./main.css";
import aboutusimg from "./aboutus.png";
import Contact from "../Contact/contact";
import Carousel from "../Banner/Carousel";
import Footer from "../Footer/footer";
import Fina from "./fina";
import About from "./about";
import ScrollReveal from 'scrollreveal'

const Main = () => {
  let { userInfo, logoutUser } = useContext(AuthContext);
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NETS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x1,
          points: 11.0,
          maxDistance: 0,
          spacing: 18.0,
          // THREE
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  // const vantaRef2 = useRef(null);
  // useEffect(()=>{
  //     if (!vantaEffect){
  //     setVantaEffect(
  //         NETS({
  //         // el: vantaRef2.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         scale: 1.00,
  //         scaleMobile: 1.00,
  //         color: 0xffffff,
  //         backgroundColor: 0x1,
  //         points: 11.00,
  //         maxDistance: 0,
  //         spacing: 18.00
  //         // THREE
  //         })
  //     )
  //     }
  //     return () => {
  //         if (vantaEffect)vantaEffect.destroy()
  //     }
  // }, [vantaEffect])
  const [width, setwidth] = useState(false);
  const [x, setx] = useState(false);
  const updateWidth = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    setwidth(window.innerWidth);
  }, [x]);
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  console.log(width);
  // if(width<950)
  // {
  return (
    <>
      <div className="main-outer flex flex-col" style={{ overflowX: "hidden" }}>
      <div className="rew pt-10 pb-10 main flex  h-[100vh] w-[100%] justify-evenly items-center" ref={vantaRef}>
                {/* <img src={anime} height="200" width="700px"/> */}
                    <div className="main-heading text-white flex flex-col justify-center h-[50vh] ml-10">
                        <div className="s1 main-heading1 text-8xl mb-5">Levi</div>
                        <div className="s2 main-heading2 my-3 text-4xl">Join the best Crypto Exchange in the world</div>
                        <div className="s3 main-heading3 mt-2 text-2xl">Levi is the easiest place to buy and sell Cryptocurrency. <br/> Sign Up and get started today</div>
                        {/* <div className="main-heading3 text-2xl"></div> */}
                        
                    </div>
                    <div className="video-outer flex items-center justify-center hexd w-[60vw]" > 
                    <video loop autoPlay muted playsinline className="h-[70%] w-[70%]">
                        <source
                            type="video/mp4"
                            src="https://i.imgur.com/erslMug.mp4"
                            // src="https://i.imgur.com/p3ZslcL.mp4"
                            // src="https://i.imgur.com/Dv7Cood.mp4"
                            // src="https://i.imgur.com/FVEh1Jf.mp4"
                        ></source>
                    </video>
                    </div> 
                </div>
        <About className='abouty'></About>
        <div class="flex felx-col items-center justify-center mt-10">
          {" "}
          <span class="rounded-full bg-green-500 px-2 py-1 text-white uppercase text-sm">
            {" "}
            Trending{" "}
          </span>{" "}
        </div>{" "}
        <div className="text-4xl font-medium text-gray-500 text-center mt-6 mb-10">
          {" "}
          Trending Coins{" "}
        </div>
        <Carousel />
        <div class="flex felx-col items-center justify-center mt-10">
          {" "}
          <span class="rounded-full bg-red-500 px-2 py-1 text-white uppercase text-sm">
            {" "}
            Commodity{" "}
          </span>{" "}
        </div>{" "}
        <div className="text-4xl font-medium text-gray-500 text-center mt-6 mb-10">
          {" "}
          Financial Instruments{" "}
        </div>
        <Fina></Fina>
        {/* <Contact/> */}
        <Footer />
      </div>
    </>
  );
};

export default Main;
