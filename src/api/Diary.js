import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Diary() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="background">
      <Header />
      <div className="calendar_wrapper">
        <Calendar id="react-calendar" onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default Diary;
