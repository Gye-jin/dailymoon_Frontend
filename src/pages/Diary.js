import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "../components/Modal";
import moment from "moment/moment";

function Diary() {
  let [date, setDate] = useState(new Date());
  const [ModalOpen, setModalOpen] = useState(false);

  const handleReadDiary = (e) => {
    setModalOpen(true);
    const date = new Date();
  };
  console.log(date.toDateString()); // 클릭한 날짜 출력확인
  // date.toLocaleDateString()
  console.log(typeof date);

  // const month = date.getMonth();
  //백에서 받아온 표정데이터
  // [[일기날짜:날짜, 기분:기분], [일기날짜:날짜, 기분:기분]]
  // --종류별로 5가지 배열 만들기
  const arr_GoodDate = ["2023-02-11", "2023-02-04", "2023-04-04"];

  return (
    <div className="background">
      <Header />
      <div className="calendar_wrapper">
        <Calendar
          id="react-calendar"
          formatDay={(locale, date) => moment(date).format("DD")} //'일' 없이 숫자만 출력
          onChange={setDate}
          value={date}
          tileContent={({ date }) => {
            // 날짜 타일에 컨텐츠 추가(html 태그)
            let html = []; // 추가할 html 태그를 변수 초기화
            // 날짜가 post 작성한 기분별 날짜 배열에 있다면, 배열에 맞는 div 추가
            if ("2023-02-17" === moment(date).format("YYYY-MM-DD")) {
              html.push(<div className="cal_1heart">🥰</div>);
            } else if (
              arr_GoodDate.find((x) => x === moment(date).format("YYYY-MM-DD"))
            ) {
              html.push(<div className="cal_good">😊</div>);
            } else if ("2023-02-19" === moment(date).format("YYYY-MM-DD")) {
              html.push(<div className="cal_3soso">😐</div>);
            } else if ("2023-02-12" === moment(date).format("YYYY-MM-DD")) {
              html.push(<div className="cal_4bad">😞</div>);
            } else if ("2023-02-15" === moment(date).format("YYYY-MM-DD")) {
              html.push(<div className="cal_5cry">🥲</div>);
            } else {
            }
            // 아래 (다른조건)에 따라 다른값주기
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  {html}
                </div>
              </>
            );
          }}
        />
      </div>
      <p className="text-center">
        <span className="datecheck">
          선택된 날짜 :{" "}
          {`${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
          {/* padStart(2,"0") 2자리숫자로만드는데 실숫자외 남는 자리는 0으로 채움 */}
        </span>
      </p>

      <div className="readDiary_btn_wrapper">
        <button className="readDiary_btn" onClick={handleReadDiary}>
          일기확인
        </button>
        {/* 버튼을 눌렀을때(true가 되었을때)=> modal 컴포넌트 렌더링 */}
        {ModalOpen && <Modal setModalOpen={setModalOpen} date={date} />}
      </div>
      <div className="dailymoon_wrapper">
        <img
          className="dailymoon_img"
          src="/img/moon.jpg"
          onClick={() => (window.location.href = "/api/diarys/create")}
        />
      </div>
    </div>
  );
}

export default Diary;
