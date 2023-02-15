import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "../components/Modal";
import moment from "moment/moment";
import { parse } from "date-fns";

function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ModalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleReadDiary = (e) => {
    const date = new Date(e.target.getAttribute("data-date"));
    if (isNaN(date)) {
      console.error("Invalid date selected");
      return;
    }
    setSelectedDate(date);
    setModalOpen(true);
  };

  console.log(date.toDateString());
  console.log(date.type);

  return (
    <div className="background">
      <Header />
      <div className="calendar_wrapper">
        <Calendar
          id="react-calendar"
          formatDay={(locale, date) => moment(date).format("DD")} //'일' 없이 숫자만 출력
          onChange={setDate}
          value={date}
        />
      </div>
      <p className="text-center">
        <span className="datecheck">
          Selected Date :{" "}
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
        {ModalOpen && (
          <Modal setModalOpen={setModalOpen} selectedDate={selectedDate} />
        )}
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
