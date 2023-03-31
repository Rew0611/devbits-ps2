import React from "react";
import GoogleButton from "react-google-button";
import { useCallback } from "react";
import axios from 'axios'

function LoginWithGoogle() {
//   const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_FRONTEND_URL } =
//     process.env;
       const CLIENT_ID = '190354675761-cbf4e3u9e2dji5np5jhen66mfjfis509.apps.googleusercontent.com';
       const FRONTEND_URL = 'https://devbits-ps2-eobl.vercel.app'
       const BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL
  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const redirectUri = "api/google/callback/";
    // const redirectUri = "http://localhost:3000/social-auth/complete/google-oauth2";

    const scope = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" ");

    const params = {
      response_type: "code",
      client_id: CLIENT_ID,
      redirect_uri: `${FRONTEND_URL}/${redirectUri}`,
      prompt: "select_account",
      access_type: "offline",
      scope,
    };

    const urlParams = new URLSearchParams(params).toString();
    console.log(urlParams)
    const url = `${googleAuthUrl}?${urlParams}`;
    window.location = url
  }, []);

  return (
    <GoogleButton
      onClick={openGoogleLoginPage}
      label="Sign in with Google"
      disabled={!CLIENT_ID}
    />
  );
}

export default LoginWithGoogle;
