import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import "./coins.css";
import { StyleRoot } from "radium";
import Radium from "radium";
import { useMediaQuery } from "@material-ui/core";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import CoinInfox from "./CoinInfo2";
import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// import { CryptoState } from "../CryptoContext";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [buysuccess, setBuySuccess] = useState(0);
  const [buyCoinsData, setBuyCoinsData] = useState(0);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(null);
  let { userInfo, authTokens } = useContext(AuthContext);

  const navigate = useNavigate();
  let watchlist = {};
  // const { currency, symbol } = CryptoState();
  const currency = "INR";
  const symbol = "₹";

  const matches = useMediaQuery("(min-width:800px)");

  const useStyles = makeStyles({
    row: {
      backgroundColor: "black",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "white",
      },
    },
  });

  const classes = useStyles();
  // const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    data.map((item) => {
      watchlist[item.symbol.toUpperCase()] = 0;
    });
    // console.log(userInfo.watchlist)
    // userInfo.watchlist.map((id) => {
    //   console.log(id);
    //   axios.get("http://localhost:8000/get-stock/",{
    //     id: id
    //   },{
    //     headers:{
    //       'Authorization': `Bearer ${authTokens.access}`
    //     }
    //   }).then((res)=>{
    //     console.log(res);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // })
    // data.map((item) => {
    //   axios.post("http://localhost:8000/add-stock/",{
    //     full_name: item.name,
    //     code_name: item.symbol.toUpperCase(),
    //     image: item.image
    //   },{
    //     headers: {
    //       'Authorization': `Bearer ${authTokens.access_token}`
    //     }
    //   })
    // })
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (coins.length == 0) {
      fetchCoins();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  // const hyle = {
  //   '@media (max-width: 800px)': {
  //      marginTop:"2rem",
  //      textAlign: "center",
  //   },
  //   '@media (min-width: 800px)': {
  //      marginTop:"6rem",
  //      textAlign: "center",
  //   },

  // }

  const addToWatchlist = (code) => {
    axios
      .post(
        "http://localhost:8000/add-watchlist/",
        {
          code: code,
        },
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        watchlist[code] = 1;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const buyCoins = (e, stockname, price) => {
    console.log(authTokens.access_token);
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/buy-stock/",
        {
          stockname: stockname,
          quantity: buyCoinsData,
          price: price,
        },
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
          // data: {
          //   stockname: stockname,
          //   quantity: buyCoinsData,
          //   price: price
          // }
        }
      )
      .then((res) => {
        console.log("Coins Bought");
        setBuySuccess(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyleRoot>
      <div>
        <ThemeProvider theme={darkTheme}>
          <Container
            style={
              matches
                ? { marginTop: "6rem", textAlign: "center" }
                : { marginTop: "2rem", textAlign: "center" }
            }
          >
            <Typography
              variant="h4"
              style={{ margin: 18, fontFamily: "Montserrat" }}
            >
              {/* Cryptocurrency Prices by Market Cap */}
            </Typography>
            <TextField
              label="Search For a Crypto Currency.."
              variant="outlined"
              style={{
                marginBottom: 20,
                width: "100%",
                WebkitBoxShadow: "0px 1px 25px 8px rgba(16,30,68,1)",
                MozBoxShadow: "0px 1px 25px 8px rgba(16,30,68,1)",
                boxShadow: "0px 1px 25px 8px rgba(16,30,68,1)",
                paddingBottom: "10px 0px",
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <TableContainer component={Paper}>
              {loading ? (
                <LinearProgress style={{ backgroundColor: "gold" }} />
              ) : (
                <Table aria-label="simple table">
                  <TableHead className="tabx">
                    <TableRow>
                      {["Coin", "Price", "24h Change", "Market Cap", ""].map(
                        (head) => (
                          <TableCell
                            style={{
                              color: "black",
                              fontWeight: "700",
                              fontFamily: "Montserrat",
                            }}
                            key={head}
                            align={head === "Coin" ? "" : "right"}
                          >
                            {head}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {handleSearch()
                      .slice((page - 1) * 10, (page - 1) * 10 + 10)
                      .map((row) => {
                        const profit = row.price_change_percentage_24h > 0;
                        return (
                          <>
                            <TableRow
                              // onClick={() => navigate(`/coins/${row.id}`)}
                              onClick={() => {
                                setBuySuccess(0);
                                if (open === row.id) setOpen(null);
                                else setOpen(row.id);
                              }}
                              className={classes.row}
                              key={row.name}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                style={{
                                  display: "flex",
                                  gap: 15,
                                }}
                              >
                                {/* <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          /> */}
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <span
                                    style={{
                                      textTransform: "uppercase",
                                      fontSize: 22,
                                    }}
                                  >
                                    {row.symbol}
                                  </span>
                                  <span style={{ color: "darkgrey" }}>
                                    {row.name}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell align="right">
                                {symbol}{" "}
                                {numberWithCommas(row.current_price.toFixed(2))}
                              </TableCell>
                              <TableCell
                                align="right"
                                style={{
                                  color:
                                    profit > 0 ? "rgb(14, 203, 129)" : "red",
                                  fontWeight: 500,
                                }}
                              >
                                {profit && "+"}
                                {row.price_change_percentage_24h.toFixed(2)}%
                              </TableCell>
                              <TableCell align="right">
                                {symbol}{" "}
                                {numberWithCommas(
                                  row.market_cap.toString().slice(0, -6)
                                )}
                                M
                              </TableCell>
                              <TableCell align="right">
                                <button
                                  className="text-xl"
                                  // onClick={()=>addToWatchlist(row.symbol.toUpperCase())}
                                >
                                  <span className="star">&#9733;</span>
                                </button>
                              </TableCell>
                            </TableRow>
                            {open === row.id && (
                              <TableRow padding={0} className="bg-black hox">
                                {/* <div className="flex items-center content-between"> */}
                                <TableCell colSpan={2}>
                                  <CoinInfox coin={row} />
                                </TableCell>
                                {/* <TableCell> */}
                                {/* <div className="flex justify-center items-center coins-buy-button"></div> */}
                                {/* </TableCell> */}

                                <TableCell colSpan={2}>
                                  <form
                                    onSubmit={(e) =>
                                      buyCoins(e, row.name, row.current_price)
                                    }
                                  >
                                    <div class="mb-6">
                                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Enter the amount of coins you want to
                                        buy:
                                      </label>
                                      <input
                                        type="text"
                                        onChange={(e) =>
                                          setBuyCoinsData(e.target.value)
                                        }
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="0.00"
                                        required
                                      />
                                    </div>
                                    <button
                                      type="submit"
                                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                      Submit
                                    </button>
                                  </form>
                                  {buysuccess === 1 && (
                                    <div className="text-xl text-green-200">
                                      Coins Bought Successfully
                                    </div>
                                  )}
                                </TableCell>
                                {/* </div> */}
                                {/* <TableCell>
                            {(buysuccess===1) && <div className="text-xl text-green-200">Coins Bought Successfully</div>}
                            </TableCell> */}
                              </TableRow>
                            )}
                          </>
                        );
                      })}
                  </TableBody>
                </Table>
              )}
            </TableContainer>

            {/* Comes from @material-ui/lab */}
            <Pagination
              count={(handleSearch()?.length / 10).toFixed(0)}
              style={{
                padding: 20,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              classes={{ ul: classes.pagination }}
              onChange={(_, value) => {
                setPage(value);
                window.scroll(0, 450);
              }}
            />
          </Container>
        </ThemeProvider>
      </div>
    </StyleRoot>
  );
}
