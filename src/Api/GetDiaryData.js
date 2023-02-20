import axios from "axios";
import { months } from "moment";

// 작성한 일기내용 가져오기
export const ReadDiaryData = async (date) => {
  //   const sessionId = sessionStorage.getItem("sessionId");
  const response = await axios.get(
    `http://localhost:8080/api/diarys/read/${date}`
  );
  // ${user}
  return response.data;
};

// 달력에 표정(feeling)가져오기
export const GetFeelData = async (month) => {
  const feel = await axios.get(
    `http://localhost:8080/api/diarys/read/month/2659410591/${month}`
  );
  return feel.data;
};
// 키:값  표정값:날짜 형태?
