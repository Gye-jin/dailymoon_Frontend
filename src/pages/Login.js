import React from "react";
import "../App.css";
import Header from "../components/Header";
import queryString from "query-string";
import axios from "axios";
import { useHistory } from "react-router-dom";
import sendKakaoTokenToServer from "../Api/sendKakaoTokenToServer";

const Login = (props: any) => {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=45285e0960a657197d7e58601b2e8c97&redirect_uri=http://localhost:3000/api/kakao&response_type=code`;
  const query = queryString.parse(window.location.search);
  console.log(query);

  React.useEffect(() => {
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
  }, []);

  //인가코드로 access토큰 발급받기.(request)
  const getKakaoTokenHandler = async (code: string) => {
    const data: any = {
      grant_type: "authorization_code",
      client_id: "45285e0960a657197d7e58601b2e8c97",
      redirect_uri: "http://localhost:3000/api/kakao",
      code: code,
    };
    //쿼리스트링 형태로 변환
    const queryString = Object.keys(data)
      .map(
        (k: any) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
      )
      .join("&");

    //토큰 발급 REST API
    axios
      .post("https://kauth.kakao.com/oauth/token", queryString, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        //서버에 토큰 전송
        console.log(res.data.access_token);
        sendKakaoTokenToServer(res.data.access_token);
      });
  };

  return (
    <div className="background">
      <Header />
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
};

export default Login;
