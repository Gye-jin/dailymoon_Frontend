import React from "react";
import "../App.css";
import Header from "../components/Header";

function Main() {
  return (
    <div className="background">
      <Header />
      <div className="img_wrapper">
        <div className="moon_wrapper">
          <img className="moon_img" src="/img/moon.png" />
        </div>
      </div>
      <div className="button_wrapper">
        <a type="button" href="/api/login" className="btn btn-warning btn-lg">
          시작하기
        </a>
      </div>
    </div>
  );
}

export default Main;
