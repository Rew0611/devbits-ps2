import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
// import { CryptoState } from "../CryptoContext";

const CoinInfo2 = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  // const { currency } = CryptoState();
  const [flag,setflag] = useState(false);
  const currency  = "INR"; 
  // const symbol = "₹";

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: "2.5rem",
        padding: 20,
        paddingTop: 0,
      },
    },
    xcontainer: {
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        padding: 40,
        [theme.breakpoints.down("md")]: {
          width: "100%",
          marginTop: 0,
          padding: 20,
          paddingTop: 0,
        },
      },
    btnx:{
      backgroundColor:"white",
    }
  }));

  const classes = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };
  const [width, setwidth] = useState(false);
  const updateWidth = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
if(width>800)
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return '';
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: ` `,
                    borderColor: "white",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
  else 
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.xcontainer}>
        {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return '';
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: ` `,
                    borderColor: "white",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo2;
