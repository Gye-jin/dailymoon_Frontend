import "../App.css";
import { ReadDiaryData, postDeleteDiaryData } from "../Api/GetDiaryData";
import moment from "moment/moment";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function Modal_read({ setModalOpen, date }) {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const response = ReadDiaryData(date);
    response.then((data) => setDiary(data));
    console.log(response);
  }, []);

  return (
    <div>
      <div>{diary}</div>
    </div>
  );
}

export default Modal_read;
