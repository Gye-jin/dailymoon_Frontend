import axios from "axios";
import moment from "moment/moment";

//쿠키에서 jwt가져오기
// const jwt = Cookies.get("jwt");
// //모든 axios요청에 jwt 포함
// axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

const userId = localStorage.getItem("jwt");

// 작성한 일기내용 가져오기(날짜별)
// export const ReadDiaryData = async (date) => {
//   //   const sessionId = sessionStorage.getItem("sessionId");
//   const response = await axios.get(
//     `http://localhost:8080/api/diarys/read/${moment(date).format("YYYY-MM-DD")}`
//   );
//   return response.data;
// };

// 일기 내용 가져오기
export const ReadDiaryData = async () => {
  const token = localStorage.getItem("jwt");
  const response = await axios.get(
    `http://localhost:8080/api/diarys/read/all`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    }
  );
  return response.data;
};

//일기 삭제
export const postDeleteDiaryData = async (diaryNo) => {
  const token = localStorage.getItem("jwt");
  console.log(diaryNo);
  await axios
    .delete(`http://localhost:8080/api/diarys/delete`, {
      data: diaryNo,
      headers: { "Content-Type": "application/json", Authorization: token },
    })
    .then((response) => {
      response.data
        ? alert("일기가 삭제되었습니다")
        : alert("오류: 잠시후 다시 삭제해주세요.");
      console.log(diaryNo);
    });
};

//일기 수정

// 달력에 표정(feeling)가져오기
// export const GetFeelData = async () => {
//   const token = localStorage.getItem("jwt");
//   try {
//     const response = await axios.get(
//       `http://localhost:8080/api/diarys/read/all`,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: token,
//         },
//       }
//     );
//     console.log(`확인:${response.headers}`);
//     // .then((res) => console.log("response.data"))
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
//   const response = await axios.get(`http://localhost:8080/api/diarys/read/all`);
//   response.then((res) => {
//     console.log(`확인:${res.data}`);
//   });
//   console.log(response.data);
//   return response.data;
// };
// [[일기날짜:날짜, 기분:기분], [일기날짜:날짜, 기분:기분]]
