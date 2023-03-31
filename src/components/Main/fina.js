import React from "react";
import "./fina.css";
import { AiOutlineStock } from "react-icons/ai";
import { RiStockLine } from "react-icons/ri";
export default function Fina() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 align-self-center">
          <div className="feature-container">
            <div className="text-center">
              <div className="f-image flex justify-center items-center">
                <AiOutlineStock
                  style={{
                    fontSize: "110px",
                    boxShadow: "0 0 80px #324f9f",
                    color: "white",
                  }}
                ></AiOutlineStock>
              </div>{" "}
              <br /> <br />{" "}
              <h1
                className="metal text-4xl"
                style={{
                  color: "#fff2b5",
                  backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
              >
                Stock
              </h1>{" "}
              <br /> <br />
            </div>{" "}
            <p className="text-center text-lg">
              Stocks are <strong>type of secuirty </strong> that gives shares of
              ownership
              <br /> <br />
              If you do choose to invest in a share, invest for the lifetime.
              <br /> <br /> <em>Even on free tier.</em> <br /> <br />
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 align-self-center">
          <div className="feature-containerx">
            <div className="text-center">
              <h1
                className="metal text-4xl"
                style={{
                  color: "#fff2b5",
                  backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
              >
                Digital Coin
              </h1>{" "}
              <br /> <br />
            </div>{" "}
            <p className="text-center text-lg">
              Based on <strong> Blockchain </strong>
              <br /> <br /> <strong>Coins </strong>are alternative form of
              payment created using encryption algorithms
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 align-self-center">
          <div className="feature-container">
            <div className="text-center">
              <div className="f-image flex justify-center items-center">
                <RiStockLine
                  style={{
                    fontSize: "110px",
                    boxShadow: "0 0 80px #324f9f",
                    color: "white",
                  }}
                ></RiStockLine>
              </div>{" "}
              <br /> <br />{" "}
              <h1
                className="metal text-4xl"
                style={{
                  color: "#fff2b5",
                  backgroundImage: "linear-gradient(#fff 42%,#b7b7b7 73%)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
              >
                Mutual Fund
              </h1>{" "}
              <br /> <br />
            </div>{" "}
            <p className="text-center text-lg">
              Pool of money <strong>in Secuirties</strong>
              <br /> <br />A company which handles{" "}
              <strong>money in securities such as stocks</strong>
              .
              <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
