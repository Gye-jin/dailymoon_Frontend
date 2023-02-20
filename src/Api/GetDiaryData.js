import axios from "axios";
import moment from "moment/moment";
// import { months } from "moment";

// 작성한 일기내용 가져오기
const ReadDiaryData = async (date) => {
  //   const sessionId = sessionStorage.getItem("sessionId");
  const response = await axios.get(
    `http://localhost:8080/api/diarys/read/${moment(date).format(
      "YYYY-MM-DD"
    )}/2659410591`
  );
  // ${userId}
  return response.data;
};
export default ReadDiaryData;

// 달력에 표정(feeling)가져오기
export const GetFeelData = async (month) => {
  const feel = await axios.get(
    `http://localhost:8080/api/diarys/read/all/2659410591`
  );
  // ${userId}
  return feel.data;
};
// [[일기날짜:날짜, 기분:기분], [일기날짜:날짜, 기분:기분]]
