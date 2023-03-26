import "../App.css";
import Header from "../components/Header";
import Link from "antd/es/typography/Link";
import axios from "axios";

import { ReadClickDiaryData } from "../Api/GetDiaryData";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DiaryDetail = () => {
  const { date } = useParams();
  console.log(date);
  const id = localStorage.getItem("jwt");

  const [diary, setDiary] = useState({});

  useEffect(() => {
    console.log(date);
    const response = ReadClickDiaryData(date);
    response.then((data) => setDiary(data));
    console.log(response);
    console.log(date);
  }, []);

  return (
    <>
      <Header />
      <h1>{diary.date}</h1>
      <button>{diary.date}</button>
      <div className="DiaryBoardFeeling">
        {diary.feeling === "Great" && <img src="\img\heartsmile.png" />}
        {diary.feeling === "Good" && <img src="\img\smile.png" />}
        {diary.feeling === "Fine" && <img src="\img\soso.png" />}
        {diary.feeling === "Bad" && <img src="\img\notgood.png" />}
        {diary.feeling === "Worst" && <img src="\img\worst.png" />}
      </div>
      <div className="DiaryBoardDetail">{diary.detail}</div>
    </>
  );
};

export default DiaryDetail;
