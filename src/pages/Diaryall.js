import "../App.css";
import Header from "../components/Header";

// import { GetFeelData } from "../Api/GetDiaryData";
import { ReadDiaryData, postDeleteDiaryData } from "../Api/GetDiaryData";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import confirm from "antd/es/modal/confirm";

function Diaryall() {
  //백에서 가져온 전체게시물 담기
  const [DiaryBoard, setDiaryBoard] = useState([]);
  const id = localStorage.getItem("jwt");
  // const { diaryNo, feeling, date, detail, files } = useParams();

  //초기렌더링([]의존성제거)- 게시물 출력
  useEffect(() => {
    const response = ReadDiaryData(id);
    response.then((res) => setDiaryBoard(res));
    // console.log(data);
    console.log(response);
    console.log(response.date);
    // console.log(response[0].date);///
  }, []);

  const deleteDiaryData = (diaryNo) => {
    if (window.confirm("일기를 삭제하시겠습니까?")) {
      // 변경된 부분
      let deleteDiaryData = new FormData();
      deleteDiaryData.append("diaryNo", diaryNo);
      deleteDiaryData.append("id", id);
      postDeleteDiaryData(diaryNo).then((response) => {
        console.log(response);
        console.log(diaryNo);
      });
    } else {
      alert("삭제요청이 취소되었습니다");
    }
  };
  return (
    <>
      <Header />
      <div className="DiaryBoard_Wrapper">
        <ul>
          {DiaryBoard ? (
            DiaryBoard.map((diary) => (
              <div key={diary.date} className="DiaryBoard">
                <div className="DiaryBoardHeader">
                  <h3
                    className="DiaryBoard_DATE"
                    onClick={() =>
                      (window.location.href = `/api/diary/${diary.date}`)
                    }
                  >
                    {diary.date}
                  </h3>
                  {/* <Link to={"/api/diary/" + diary.date}>
                    {diary.date}상세보기
                  </Link> */}
                  <button
                    className="diary-delete"
                    onClick={() => deleteDiaryData()}
                  >
                    삭제
                  </button>
                </div>

                <div className="DiaryBoardFeeling">
                  {diary.feeling === "Great" && (
                    <img src="\img\heartsmile.png" />
                  )}
                  {diary.feeling === "Good" && <img src="\img\smile.png" />}
                  {diary.feeling === "Fine" && <img src="\img\soso.png" />}
                  {diary.feeling === "Bad" && <img src="\img\notgood.png" />}
                  {diary.feeling === "Worst" && <img src="\img\worst.png" />}
                </div>
                <div className="DiaryBoardDetail">{diary.detail}</div>
              </div>
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="dailymoon_wrapper">
        <img
          className="dailymoon_img"
          src="/img/moon.jpg"
          onClick={() => (window.location.href = "/api/diarys/create")}
        />
      </div>
    </>
  );
}

// const getCalenData = async () => {
//   const dataob = await GetFeelData();
//   const data = JSON.stringify(dataob);
//   console.log(`dd:${data}`);

export default Diaryall;
