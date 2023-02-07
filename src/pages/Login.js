import React from "react";
import "../App.css";
import Header from "../components/Header";

function Login() {
  return (
    <div className="background">
      {/* <Header /> */}
      <div className="login-button_wrapper">
        <img
          src="/img/kakao_login_small.png"
          className="kakao_login_small"
          onClick="/api/diarys"
        />
        <img
          src="/img/kakao_login_medium.png"
          className="kakao_login_medium"
          onClick="/api/diarys"
        />
        <img
          src="/img/kakao_login_large.png"
          className="kakao_login_large"
          onClick="/api/diarys"
        />
      </div>
    </div>
  );
}

export default Login;
