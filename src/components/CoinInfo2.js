import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import TextField from "@mui/material/TextField";
import Chart from 'chart.js/auto';
import {useMediaQuery} from "@material-ui/core";
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

const CoinInfox = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  // const { currency } = CryptoState();
  const [flag,setflag] = useState(false);
  const currency  = "INR"; 
  const symbol = "₹";
  const handlesubmit = (event) => {
    event.preventDefault();

    setDays(a);
    setflag(false);

  };

  const matches = useMediaQuery('(min-width:800px)');
  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      padding: 20,
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

let [a,seta]=useState(' ')
let [b,setb]=useState('prices')

  const classes = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    if(b=='prices')
    setHistoricData(data.prices);
    else if(b=='market_caps')
    setHistoricData(data.market_caps);
    else
    setHistoricData(data.total_volumes);
  };

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days,b]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  

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
                    label: `${b} ( Past ${days} Days ) in ${currency}`,
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
            {/* <form action="" onSubmit={handlesubmit}>
            <div class="flex justify-center" style={matches?{paddingTop:'0.4rem'}:{paddingTop:'0.8rem'}}>
  <div class="mb-3 max-w-xl:w-40 xl:w-96">
    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="number"
        class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-white outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-white focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-white dark:placeholder:text-grey-500"
        placeholder="Enter the number of days!"
        aria-label="Search"
        value={a}
        onChange={(event) => {
          seta(event.target.value);
        }}
        aria-describedby="button-addon3" />
      <button
        class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        type="submit"
        id="button-addon3"
        data-te-ripple-init>
        submit
      </button>
    </div>
  </div>
</div></form>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >

              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setb(day.value);
                    console.log(b)
                    setflag(false);
                  }}
                  className={classes.btnx}
                  selected={day.value === b}
                >
                  {day.label}
                </SelectButton>
              ))} 
             </div> */}
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfox;
