import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Pagination from "@material-ui/lab/Pagination";
import "./know.css";
import TradingViewWidget from "./widget";
import { Link } from "react-router-dom";
// import { StyleRoot } from "radium";
// import Radium from "radium";
// import {useMediaQuery} from "@material-ui/core";
import axios from "axios";
// import CoinInfo from "./CoinInfo";
import { CoinList } from "../../config/api";
import { SingleCoin } from "../../config/api";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
export default function Know() {
  const [buysuccess, setBuySuccess] = useState(0);
  const [buyCoinsData, setBuyCoinsData] = useState(0);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(null);

  const navigate = useNavigate();
  const currency = "INR";
  const symbol = "₹";
  const id = "bitcoin";

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (coins.length == 0) {
      fetchCoins();
    }
  }, [currency]);

  

  return (
    <div>
      {/* <TradingViewWidget> */}
      <div class="grid ml-4 pb-8 mr-4 grid-cols-1 gap-8 domxx xl:mt-16  xl:grid-cols-4">
        {coins.map((data) => {
          const profit = data.price_change_percentage_24h > 0;
          return (
            <a
              class="relative dndx flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
              href="#"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              onClick={() => navigate(`/coins/${data.id}`)}
            >
              <Link to="/know">
                <div class="pt-4 text-gray-500">
                  <div className="flex">
                    <img src={data.image} className="knimage" alt="" />
                    <div>
                      <p className="pl-2 ssxx">
                        Click to Know more about this currency
                      </p>
                      <p
                        class="ddff"
                        style={{
                          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                          fontWeight: 500,
                        }}
                      >
                        <p
                          style={{
                            color: "white",
                            paddingRight: "0.2rem",
                            marginBottom: "1rem",
                          }}
                        >
                          {" "}
                          Change in last 24 Hours{" "}
                        </p>{" "}
                        {profit && "+"}
                        {data.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  <h3 class="mt-4 sdex text-lg font-bold text-orange-400 sm:text-xl">
                    {data.name}
                  </h3>
                  <p class="mt-4 hidden text-sm sm:block">
                    Click to know more about this currency
                  </p>
                  <p
                    class="mt-2 hidden text-sm sm:block flex row-span-full"
                    style={{
                      color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        paddingRight: "0.2rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {" "}
                      Change in last 24 Hours{" "}
                    </p>{" "}
                    {profit && "+"}
                    {data.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </Link>
            </a>
          );
        })}
      </div>
    </div>
  );
}
