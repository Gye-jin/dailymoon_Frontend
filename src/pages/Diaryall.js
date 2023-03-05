import "../App.css";
import Header from "../components/Header";
// import { GetFeelData } from "../Api/GetDiaryData";
import { ReadDiaryData, postDeleteDiaryData } from "../Api/GetDiaryData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DiaryCreate from "./DiaryCreate";
import confirm from "antd/es/modal/confirm";

function Diaryall() {
  //백에서 가져온 전체게시물 담기
  const [DiaryBoard, setDiaryBoard] = useState([]);
  const userId = localStorage.getItem("jwt");
  const { diaryNo, feeling, date, detail, files } = useParams();

  //초기렌더링- 게시물 출력
  useEffect(() => {
    const response = ReadDiaryData(userId);
    response.then((data) => setDiaryBoard(data));
    console.log(response);
    console.log(diaryNo);
  }, []);

  const deleteDiaryData = (diaryNo) => {
    if (window.confirm("일기를 삭제하시겠습니까?")) {
      // 변경된 부분
      let deleteDiaryData = new FormData();
      deleteDiaryData.append("diaryNo", diaryNo);
      deleteDiaryData.append("userId", userId);
      deleteDiaryData.append("feeling", feeling);
      deleteDiaryData.append("date", date);
      deleteDiaryData.append("detail", detail);
      deleteDiaryData.append("files", files);
      postDeleteDiaryData(diaryNo);
      // console.log(response);
    } else {
      alert("삭제취소");
    }
  };
  return (
    <div className="DiaryBoard_Wrapper">
      <ul>
        {DiaryBoard ? (
          DiaryBoard.map((diary) => (
            <div key={diary.date} className="DiaryBoard">
              <div className="DiaryBoardHeader">
                <h3 className="DiaryBoard_DATE">{diary.diaryNo}</h3>
                <button
                  className="diary-delete"
                  onClick={() => deleteDiaryData()}
                >
                  삭제
                </button>
              </div>
              <div className="DiaryBoardFeeling">{diary.feeling}</div>
              <div className="DiaryBoardDetail">{diary.detail}</div>
              <div className="DiaryBoardImg">
                {" "}
                {diary.files &&
                  diary.files.map((files) => (
                    <img
                      key={files}
                      className="DiaryBoardImage"
                      src={`${files.filePath}`}
                      alt="DiaryImg"
                    />
                  ))}
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

// const getCalenData = async () => {
//   const dataob = await GetFeelData();
//   const data = JSON.stringify(dataob);
//   console.log(`dd:${data}`);

export default Diaryall;
