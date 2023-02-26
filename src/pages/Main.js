import { useEffect } from "react";
import "../App.css";
import { HEADER_STRING, TOKEN_PREFIX } from "../Api/JwtProperties";
import axios from "axios";
import Cookies from "js-cookie";

function Main() {
  const handleKakaoLogin = () => {
    const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=45285e0960a657197d7e58601b2e8c97&redirect_uri=http://localhost:3000/api/kakao&response_type=code`;
    window.location.href = kauthUrl;
    console.log("로그인까지");
  };
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
          onClick={handleKakaoLogin}
        />
        <img
          src="/img/kakao_login_medium.png"
          className="kakao_login_medium"
          onClick={handleKakaoLogin}
        />
        <img
          src="/img/kakao_login_large.png"
          className="kakao_login_large"
          onClick={handleKakaoLogin}
        />
      </div>
    </div>
  );
}

export default Main;
// function Main() {
//   const HandleKakaoLogin = () => {
//     //카카오 로그인 페이지로 이동
//     const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=45285e0960a657197d7e58601b2e8c97&redirect_uri=http://localhost:3000/api/kakao&response_type=code`;
//     window.location.href = kauthUrl;

//     //인가코드 추출
//     const code = new URL(window.location.href).searchParams.get("code");
//     console.log(code);
//     if (code) {
//       axios
//         .get(`http://localhost:8080/api/kakao?code=${code}`)
//         .then((response) => {
//           console.log("success response"); // 백엔드로부터 받은 응답 처리
//         })
//         .catch((error) => {
//           console.log("error"); // 에러 처리
//         });
//     }
//   };

// axios
//   .get("http://localhost:8080/api/kakao", { params: { code } })
//   .then((response) => {
//     const jwtToken = response.headers["authorization"];
//     // console.log(code);
//     // 쿠키 생성 및 저장
//     Cookies.set("jwtToken", jwtToken, { expires: 0.0069 }); // 10분

//     console.log("성공ㅇ");
//   })
//   .catch((error) => {
//     console.log("로그인실패");
//   });
// })
// };
