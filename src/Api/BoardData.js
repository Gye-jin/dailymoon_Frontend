// import axios from "axios";

// // BoardWriteData
// // 게시글작성페이지에서 작성한 이미지파일, 게시글내용, 유저세션을 백에 보내는 함수
// export function ForPostBoardWrite(boardWriteData) {
//   const postBoardWrite = async (boardWriteData) => {
//     // post
//     await axios
//       // 입력된 데이터를 백에 보낸다.
//       .post("http://localhost:8000/predict/", boardWriteData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         // 백에서 반응(response)이 정상적으로 온다면 성공
//         addClusterNo(response.data);
//         setTimeout(() => {
//           window.location.reload();
//         }, 1500);
//       })
//       .catch(function (err) {
//         // 백에서 오류(err)가 온다면 게시글 작성 실패
//         alert("오류입니다. 잠시 후 다시 시도해주세요.");
//       });
//   };
//   postBoardWrite(boardWriteData);
// }
