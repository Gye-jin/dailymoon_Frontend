import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "../components/Modal";
import moment from "moment/moment";
// import { parse } from "date-fns";

function Diary() {
  // const [selectedDate, setSelectedDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [ModalOpen, setModalOpen] = useState(false);

  const handleReadDiary = (e) => {
    // const date = new Date(e.target.getAttribute("date"));
    // const date = selectedDate;
    // if (isNaN(date)) {
    //   console.error("Invalid date selected");
    //   return;
    // }
    // setSelectedDate(date);
    // const json = JSON.stringify(date);
    setModalOpen(true);
  };
  // console.log(selectedDate); // 오늘날짜나옴
  console.log(date.toDateString()); // 클릭한 날짜나옴
  // -- 모달에{date.toDateString()} 출력하면 화면날아감--
  // -- 이걸 변수에 저장해서 보내야하나-> 그래도 toString을 못받아줌
  console.log(typeof date);

  //백에서 받아온 표정데이터--- 종류별로 5가지 배열 만들기
  const arr_smileDate = ["2023-02-11", "2023-02-04"];

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
            // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한(기분별 날짜배열) 날짜 배열(mark)에 있다면, dot div 추가
            if ("2023-02-17" === moment(date).format("YYYY-MM-DD")) {
              html.push(<div className="cal_1heart">🥰</div>);
            } else if (
              arr_smileDate.find((x) => x === moment(date).format("YYYY-MM-DD"))
            ) {
              html.push(<div className="cal_2smile">😊</div>);
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
        {ModalOpen && <Modal setModalOpen={setModalOpen} />}
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
