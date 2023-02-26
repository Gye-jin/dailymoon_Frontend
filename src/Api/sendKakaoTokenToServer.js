import axios from "axios";

//서버로 access토큰 넘기기 & JWT토큰 받아 localstorage저장
const sendKakaoTokenToServer = (token: string) => {
  axios.post("/8080/api/login", { access_token: token }).then((res) => {
    if (res.status == 201 || res.status == 200) {
      const user = res.data.user;
      window.localStorage.setItem(
        "token",
        JSON.stringify({
          access_token: res.data.jwt,
        })
      );
    } else {
      window.alert("로그인에 실패하였습니다.");
    }
  });
};

export default sendKakaoTokenToServer;
