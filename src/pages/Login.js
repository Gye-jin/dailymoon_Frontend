import React from "react";
import "../App.css";
import Header from "../components/Header";
import { REST_API_KEY, REDIRECT_URI } from "../Api/KakaoLoginData";

function Login() {
  const KakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = KakaoAuthUrl;
  };

  return (
    <div className="background">
      <Header />
      <div className="login-button_wrapper">
        <img
          src="/img/kakao_login_small.png"
          className="kakao_login_small"
          onClick={handleLogin}
        />
        <img
          src="/img/kakao_login_medium.png"
          className="kakao_login_medium"
          onClick={handleLogin}
        />
        <img
          src="/img/kakao_login_large.png"
          className="kakao_login_large"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;
