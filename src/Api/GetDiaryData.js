import axios from "axios";
import moment from "moment/moment";
import Cookies from "js-cookie";

//쿠키에서 jwt가져오기
// const jwt = Cookies.get("jwt");
// //모든 axios요청에 jwt 포함
// axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

const userId = sessionStorage.getItem("jwt");

// const userId = 2659410591; //로그인후 받을 토큰 예시

// 작성한 일기내용 가져오기
export const ReadDiaryData = async (date) => {
  //   const sessionId = sessionStorage.getItem("sessionId");
  const response = await axios.get(
    `http://localhost:8080/api/diarys/read/${moment(date).format("YYYY-MM-DD")}`
  );
  return response.data;
};

// 달력에 표정(feeling)가져오기
export const GetFeelData = async () => {
  const response = await axios.get(`http://localhost:8080/api/diarys/read/all`);
  // 2659410591
  console.log(response.data); // response 확인용
  // console.log(`userid:${userId}`);
  return response.data;
};
// [[일기날짜:날짜, 기분:기분], [일기날짜:날짜, 기분:기분]]

export const postDeleteDiaryData = async (deleteDiaryData) => {
  await axios
    .post(`/api/delete`, deleteDiaryData)
    // /${diaryNo}
    .then((response) => {
      response.data
        ? alert("일기가 삭제되었습니다")
        : alert("오류: 잠시후 다시 삭제해주세요.");
    });
};
