import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import { Link as ScrollLink } from "react-scroll";
import AuthContext from "../context/AuthContext";
// import { CryptoState } from "../CryptoContext";
// import Logo from "../images/background.webp"
import "./header.css";
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 0.1,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  hexor: {
    flex: 0.85,
    display: "flex",
    flexDirection: "row",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  tpr: {
    paddingLeft: "5%",
    fontFamily: "Montserrat",
    fontWeight: "100",
  },
  tps: {
    // flex:"0.05",
    paddingRight: "5%",
    fontFamily: "Montserrat",
    fontWeight: "100",
    cursor: "pointer",
  },
  contx: {
    position: "fixed",
    zIndex: "1000",
    backgroundColor: "rgba( 255, 255, 255, 0.2 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3.5px )",
    WebkitBackdropFilter: "blur( 3.5px )",
    borderRadius: "1px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    minWidth: "100%",
  },
  dontx: {
    position: "fixed",
    zIndex: "1000",
  },
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
  const currency = "INR";
  const symbol = "₹";
  const [nav, setnav] = useState(false);
  const [width, setwidth] = useState(false);
  // const [dope, setdope] = useState(false);
  const updateWidth = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const changebg = () => {
    if (window.scrollY > 80) setnav(true);
    else setnav(false);
  };
   
  window.addEventListener("scroll", changebg);
  // const history = useHistory();
  const navigate = useNavigate();
  let {userInfo, logoutUser} = useContext(AuthContext);

  return (
    <>
    <div className="xw1">
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            {/* <img src={Logo} alt="" /> */}
            {/* <Typography
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
            <a href="#contact">Contact</a> */}
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
            {userInfo==null ? (
              <>
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
              </>
            ) : (
              <Typography
                onClick={logoutUser}
                variant="h7"
                className={classes.tps}
              >
                Logout
              </Typography>
            )}
            
            
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
      </div>
      <div className={!nav? "dontx bg-transparent navbar sticky z-[1000]":"contx navbar sticky z-[1000]"}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="hotx">
                  <Link to="/stock">Stocks</Link>
                </a>
              </li>
              <li tabIndex={0}>
                <a className="hotx justify-between">
                  <Link to="/news">News</Link>
                </a>
              </li>
              <li>
                <a className="hotx">
                  <Link to="/dashboard">Dashboard</Link>
                </a>
              </li>
              <li tabIndex={0}>
                <a className="hotx justify-between">
                  <Link to="/signup">Sign up</Link>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="wex"><Link to='/'> Levi</Link></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/stock"></Link>
              <a>Stocks</a>
            </li>
            <li tabIndex={0}>
              <Link to="/news"></Link>
              <a>News</a>
            </li>
            <li>
              <Link to="/dashboard"></Link>
              <a>Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="logix"><Link to='/login'>Login</Link> </a>
        </div>
      </div>
      </>
    );
  }
  // else{
  //   return (
  //     <div className="contx navbar sticky z-[1000]">
  //       <div className="navbar-start">
  //         <div className="dropdown">
  //           <label tabIndex={0} className="btn btn-ghost lg:hidden">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-5 w-5"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth="2"
  //                 d="M4 6h16M4 12h8m-8 6h16"
  //               />
  //             </svg>
  //           </label>
  //           <ul
  //             tabIndex={0}
  //             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
  //           >
  //             <li>
  //               <a className="hotx">
  //                 <Link to="/stock">Stocks</Link>
  //               </a>
  //             </li>
  //             <li tabIndex={0}>
  //               <a className="hotx justify-between">
  //                 <Link to="/news">News</Link>
  //               </a>
  //             </li>
  //             <li>
  //               <a className="hotx">
  //                 <Link to="/dashboard">Dashboard</Link>
  //               </a>
  //             </li>
  //             <li tabIndex={0}>
  //               <a className="hotx justify-between">
  //                 <Link to="/signup">Sign up</Link>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //         <div>
  //           <a className="wex"><Link to='/'> Levi</Link></a>
  //         </div>
  //       </div>
  //       <div className="navbar-center hidden lg:flex">
  //         <ul className="menu menu-horizontal px-1">
  //           <li>
  //             <Link to="/stock"></Link>
  //             <a>Stocks</a>
  //           </li>
  //           <li tabIndex={0}>
  //             <Link to="/news"></Link>
  //             <a>News</a>
  //           </li>
  //           <li>
  //             <Link to="/dashboard"></Link>
  //             <a>Dashboard</a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div className="navbar-end">
  //         <a className="logix"><Link to='/login'>Login</Link> </a>
  //       </div>
  //     </div>
  //   );
  // }
// }

export default Header;
