import React from "react";
import "../App.css";
import { HEADER_STRING, TOKEN_PREFIX } from "../Api/JwtProperties";
import axios from "axios";

function Main() {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=45285e0960a657197d7e58601b2e8c97&redirect_uri=http://localhost:3000/api/kakao&response_type=code`;
  // KakaoLoginRedirect();

  // axios.get("/api/kakao", { headers: { key: "login" } }).then((response) => {
  //   var jwt = response.headers[HEADER_STRING];
  //   console.log(jwt);
  // 전달받은 JWT 를 처리하는 코드
  // });

  return (
    <div className="background">
      {/* <Header /> */}
      <div className="img_wrapper">
        <div className="moon_wrapper">
          <img className="moon_img" src="/img/moon.png" />
        </div>
      </div>
      <div className="login-button_wrapper">
        <img
          src="/img/kakao_login_small.png"
          className="kakao_login_small"
          onClick={() => (window.location.href = kauthUrl)}
        />
        <img
          src="/img/kakao_login_medium.png"
          className="kakao_login_medium"
          onClick={() => (window.location.href = kauthUrl)}
        />
        <img
          src="/img/kakao_login_large.png"
          className="kakao_login_large"
          onClick={() => (window.location.href = kauthUrl)}
        />
      </div>
    </div>
  );
}

export default Main;
