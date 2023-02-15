// 보류
// 로그인 완료 페이지
import React, { useState, useEffect } from "react";
import { HEADER_STRING, TOKEN_PREFIX } from "../Api/JwtProperties";
import axios from "axios";
import Header from "../components/Header";
import GetJwtToken from "../Api/GetJwtToken";

// function Kakao() {
//   const [jwtToken, setJwtToken] = useState("");

//   useEffect(() => {
//     const jwtFromSession = sessionStorage.getItem("jwtToken");
//     if (jwtFromSession) {
//       setJwtToken(jwtFromSession);
//     }
//   }, []);

//   const handleLogin = () => {
//     const jwt = GetJwtToken;
//     setJwtToken(jwt);
//     sessionStorage.setItem("jwtToken", jwt);
//   };

// const [status, setStatus] = useState("Log Out...");

// const logout = async () => {
//   try {
//     await axios.get("/kakaoLogout");
//     setStatus("Success");
//   } catch (error) {
//     setStatus("Failed");
//   }
// };

// const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=45285e0960a657197d7e58601b2e8c97&redirect_uri=http://localhost:3000/api/kakao&response_type=code`;
// const code = new URL(window.location.href).searchParams.get("kauthUrl");

const onLogin = () => {
  axios
    .get("/api/kakao")
    .then((response) => {
      console.log(response.data);
      const { accessToken } = response.data;

      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      // accessToken을 localStorage, cookie 등에 저장하지 않는다!
    })
    .catch((error) => {
      console.error(error);
    });
};

//   return (
//     <div className="background">
//       <Header />
//       <div className="kakao_ll">
//         {jwtToken ? (
//           <div>
//             <h3>JWT Token: {jwtToken} 로그인이 완료되었습니다.</h3>
//             <a href="/api/diarys">My Diary</a>
//           </div>
//         ) : (
//           <button onClick={handleLogin}>Login</button>
//         )}
//       </div>
//       <div>
//         <button onClick={logout}>Logout</button>
//         <p>{status}</p>
//       </div>
//     </div>
//   );
// }

export default onLogin;
