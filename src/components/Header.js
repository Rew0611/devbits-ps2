import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import { CryptoState } from "../CryptoContext";
// import Logo from "../images/background.webp"
import './header.css'
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 0.1,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  hexor:{
    flex: 0.85,
    display:"flex",
    flexDirection:"row",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  tpr:{
    paddingLeft:"5%",
    fontFamily: "Montserrat",
    fontWeight: "100",
  },
  tps:{
    paddingRight:"5%",
    fontFamily: "Montserrat",
    fontWeight: "100",
  }
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  // const { currency, setCurrency } = CryptoState();
  const currency  = "INR"; 
  const symbol = "₹";

  // const history = useHistory();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            {/* <img src={Logo} alt="" /> */}
            <Typography
              onClick={() => navigate(`/`)}
              variant="h4"
              className={classes.title}
            >
              Levi
            </Typography>
            <div className={classes.hexor}>
            <Typography
              onClick={() => navigate(`/`)}
              variant="h8"
              className={classes.tpr}
            >
              About Us
            </Typography>
            <Typography
              onClick={() => navigate(`/stock`)}
              variant="h8"
              className={classes.tpr}
            >
              Stocks
            </Typography>
            <Typography
              onClick={() => navigate(`/dashboard`)}
              variant="h8"
              className={classes.tpr}
            >
              Dashboard
            </Typography>
            <Typography
              onClick={() => navigate(`/news`)}
              variant="h8"
              className={classes.tpr}
            >
              News
            </Typography>
            <Typography
              // onClick={() => navigate(`/news`)}
              variant="h8"
              className={classes.tpr}
            >
            <a href="#contact">Contact</a>
              {/* <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
              >
                Contact
              </ScrollLink> */}
            </Typography>
            </div>
            <Typography
              onClick={() => navigate(`/login`)}
              variant="h7"
              className={classes.tps}
            >
              Login
            </Typography>
            <Typography
              onClick={() => navigate(`/signup`)}
              variant="h7"
              className={classes.tps}
            >
              Signup
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            {/* <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              // onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select> */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
