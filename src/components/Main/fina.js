import React from "react";
import "./fina.css";
import { AiOutlineStock } from "react-icons/ai";
import {RiStockLine} from "react-icons/ri"
export default function Fina() {
  return (
    <div>
      <div className="row" data-v-2eda1f63>
        <div className="col-lg-4 align-self-center" data-v-2eda1f63>
          <div className="feature-container" data-v-2eda1f63>
            <div className="text-center" data-v-2eda1f63>
              <div className="f-image flex justify-center items-center" data-v-2eda1f63>
                <AiOutlineStock
                  style={{
                    fontSize: "110px",
                    boxShadow: "0 0 80px #324f9f",
                    color: "white",
                  }}
                ></AiOutlineStock>
              </div>{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <h1 className="metal text-4xl" data-v-2eda1f63>
                Stock
              </h1>{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />
            </div>{" "}
            <p className="text-center text-lg" data-v-2eda1f63>
              Stocks are <strong data-v-2eda1f63>type of secuirty </strong> that
              gives shares of ownership
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />
              If you do choose to invest in a share, invest for the lifetime.
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <em data-v-2eda1f63>Even on free tier.</em> <br data-v-2eda1f63 />{" "}
              <br data-v-2eda1f63 />
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 align-self-center" data-v-2eda1f63>
          <div className="feature-containerx" data-v-2eda1f63>
            <div className="text-center" data-v-2eda1f63>
              <h1 className="metal text-4xl" data-v-2eda1f63>
                Digital Coin
              </h1>{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />
            </div>{" "}
            <p className="text-center text-lg" data-v-2eda1f63>
              Based on <strong data-v-2eda1f63> Blockchain </strong>
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <strong data-v-2eda1f63>Coins </strong>are alternative form of
              payment created using encryption algorithms
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <br data-v-2eda1f63 />
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 align-self-center" data-v-2eda1f63>
          <div className="feature-container" data-v-2eda1f63>
            <div className="text-center" data-v-2eda1f63>
              <div className="f-image flex justify-center items-center" data-v-2eda1f63>
                <RiStockLine  style={{
                    fontSize: "110px",
                    boxShadow: "0 0 80px #324f9f",
                    color: "white",
                  }}></RiStockLine>
              </div>{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />{" "}
              <h1 className="metal text-4xl" data-v-2eda1f63>
                Mutual Fund
              </h1>{" "}
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />
            </div>{" "}
            <p className="text-center text-lg" data-v-2eda1f63>
              Pool of money <strong data-v-2eda1f63>in Secuirties</strong>
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />A company which
              handles{" "}
              <strong data-v-2eda1f63>
                money in securities such as stocks
              </strong>
              .
              <br data-v-2eda1f63 /> <br data-v-2eda1f63 />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
