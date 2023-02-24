import axios from "axios";
// import { Console } from "console";
import moment from "moment/moment";
// import { months } from "moment";
const userId = 2659410591; //로그인후 받을 토큰 예시

axios.defaults.baseURL = "http://localhost:8080";

// 작성한 일기내용 가져오기
export const ReadDiaryData = async (date) => {
  //   const sessionId = sessionStorage.getItem("sessionId");
  const response = await axios.get(
    `/api/diarys/read/2659410591/${moment(date).format("YYYY-MM-DD")}`
  );
  // ${userId}
  return response.data;
};

// 달력에 표정(feeling)가져오기
export const GetFeelData = async () => {
  const response = await axios.get(`/api/diarys/read/all/${userId}`);
  // 2659410591
  console.log(response); // response 확인용
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

export const Posthandletest = async () => {
  await axios.post("/api/test/test").then((response) => {
    response.data ? alert("test성공") : alert("오류입니다");
  });
};
