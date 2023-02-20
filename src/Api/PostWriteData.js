import axios from "axios";

// 이미지파일이 있는 경우, 백에 보내는 함수
export function ForPostDiaryAll(DiaryWriteAllData) {
  const PostDiaryAll = async (DiaryWriteAllData) => {
    await axios
      .post("http://localhost:8000/create/all", DiaryWriteAllData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // 백에서 response가 정상적으로 온다면 성공
        // addClusterNo(response.data);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(function (err) {
        // 백에서 err가 온다면 게시글 작성 실패
        alert("오류입니다. 잠시 후 다시 시도해주세요.");
      });
  };
  PostDiaryAll(DiaryWriteAllData);
}

//이미지파일이 없는 경우, 기분이모티콘("1"), 한줄일기("text"),유저세션을 백에 보내는 함수
export function ForPostDiaryWrite(DiaryWriteData) {
  const PostDiaryWrite = async (DiaryWriteData) => {
    await axios
      .post("http://localhost:8000/create", DiaryWriteData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // 백에서 response가 정상적으로 온다면 성공
        // addClusterNo(response.data);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch(function (err) {
        // 백에서 err가 온다면 게시글 작성 실패
        alert("오류입니다. 잠시 후 다시 시도해주세요.");
      });
  };
  PostDiaryWrite(DiaryWriteData);
}
