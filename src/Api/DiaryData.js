import axios from "axios";

// 작성한 일기내용 가져오기
export const ReadDiaryData = async (date) => {
  const response = await axios.get(
    `http://localhost:8080/api/diarys/read/${date}`
  );
  // ${user}
  return response.data;
};

// 달력에 표정(feeling)가져오기
export const GetFeelData = async () => {
  const feel = await axios.get(`http://localhost:8080/api/diarys/read`);
  return feel.data;
};
// 키:값  표정값:날짜 형태?
