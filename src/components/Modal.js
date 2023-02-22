import "../App.css";
import { ReadDiaryData, postDeleteDiaryData } from "../Api/GetDiaryData";
import moment from "moment/moment";
import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
// import { format } from "date-fns";

function Modal_read({ setModalOpen, date }) {
  // const userId = sessionStorage.getItem("sessionToken")
  const { diaryNo } = useParams();
  const [diary, setDiary] = useState([]);
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  const data = "2"; //임시

  //일기번호로 diary내용 가져오기
  useEffect(() => {
    const response = ReadDiaryData(diaryNo);
    response.then((data) => setDiary(data));
  }, []);

  //삭제할 일기데이터 백에 전송(삭제버튼 클릭 시 실행)
  function deleteDiaryData() {
    let result = window.confirm("일기를 삭제하시겠습니까?");
    if (result == true) {
      alert("일기가 삭제되었습니다");
      let deleteDiaryData = new FormData();
      // deleteDiaryData.append("userId", userId);
      deleteDiaryData.append("diaryNo", diaryNo);
      postDeleteDiaryData(deleteDiaryData);
    } else {
      alert("일기삭제가 취소되었습니다");
    }
  }

  return (
    <div className="modal_container">
      <button className="close" onClick={closeModal}>
        X
      </button>
      <div>
        <button
          className="deleteBtn"
          // onClick={deleteDiaryData}
        >
          삭제
        </button>
        <button
          className="modifyBtn"
          // onClick={() => Navigate(`/api/diarys/update/${diaryNo}/${userId}`)}
        >
          수정
        </button>
      </div>
      <div className="selectedDate_wrapper">
        <div className="SelectedDate">{moment(date).format("YYYY-MM-DD")}</div>
      </div>
      {/* <ReadDiaryData /> */}
      <div className="day_feeling">
        {data === "1" && <img className="day_feel" src="/img/heartsmile.png" />}
      </div>
      <div className="day_feeling">
        {data === "2" && <img className="day_feel" src="/img/smile.png" />}
      </div>
      <div className="day_feeling">
        {data === "3" && <img className="day_feel" src="/img/soso.png" />}
      </div>
      <div className="day_feeling">
        {data === "4" && <img className="day_feel" src="/img/notgood.png" />}
      </div>
      <div className="day_feeling">
        {data === "5" && <img className="day_feel" src="/img/worst.png" />}
        {/* {response.data.feeling === "5" && <img src="/img/worst.png" />} */}
      </div>

      <div className="day_oneline">
        {/* {response.data.detail} */} ~~한줄일기 내용~~
      </div>
      <div className="day_image">{/* {data.file} */}</div>
    </div>
  );
}

export default Modal_read;
