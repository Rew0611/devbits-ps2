import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Main from './components/Main/main';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Dashboard from './components/Dashboard/dashboard';
import GoogleMiddleware from './components/GoogleLogin/GoogleMiddleware';
import { AuthProvider } from "./context/AuthContext";
import News from "./components/News/News";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const apiKey = process.env.REACT_APP_API_KEY

  return (
      <div className={classes.App}>
        <Header />
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/stock" element={<Homepage/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/news" element={<News apiKey={apiKey} section="home"/>}/>
            <Route path='/api/google/callback' element={<GoogleMiddleware />}/>
            <Route path="/coins/:id" element={<CoinPage/>} />
          </Routes>
      </div>    
  );
}

export default App;
