import React from "react";
import "../App.css";
import Header from "../components/Header";

function Login() {
  return (
    <div className="background">
      {/* <Header /> */}
      <div className="login-button_wrapper">
        <a type="button" href="/api/diarys" className="btn btn-warning btn-lg">
          카카오톡으로 간편 로그인하기
        </a>
      </div>
    </div>
  );
}

export default Login;
