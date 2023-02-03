import React, { useState } from "react";
import { ForPostBoardWrite } from "../Api/BoardData";
import "../App.css";
import Header from "../components/Header";

function DiaryCreate() {
  // 한줄일기 input
  // const [sessionId, setsessionId] = useState("");
  const [dairyContent, setdairyContent] = useState("");
  const [selectedfeel, setSelectedfeel] = useState(null);

  const selectfeel = (img) => {
    setSelectedfeel(img);
  };

  // 게시글 작성하면 그 value를 인식하게 해주는 함수
  const changedairyContent = (e) => {
    setdairyContent(e.target.value);
  };
  console.log(changedairyContent);

  // 작성완료 버튼 -> 작성내용을 백에 보내주는 함수
  const sendDiaryWriteData = (e) => {
    // 실행시 화면새로고침 방지
    e.preventDefault();
    if (dairyContent.length >= 1) {
      let DiaryWriteData = new FormData();
      // DiaryWriteData.append("sessionId", userSession);
      DiaryWriteData.append("selectedfeel", selectedfeel);
      DiaryWriteData.append("dairyContent", dairyContent);
      // DiaryWriteData.append("image", selectImage);
      // 입력된 값들을 boardWriteData에 넣는다.
      ForPostBoardWrite(DiaryWriteData);
    }
    // else {
    //     alert(오늘의 기분을 선택해주세요)
    //   }
  };

  return (
    <div className="background">
      <Header />
      <h1>일기쓰기</h1>
      <div className="feeling_wrapper">
        <img
          className="icon1"
          alt="heartsmile"
          src="/img/heartsmile.png"
          onClick={() => selectfeel("img/heartsmile.png")}
        />
        <img
          className="icon2"
          alt="smile"
          src="/img/smile.png"
          onClick={() => selectfeel("img/smile.png")}
        />
        <img
          className="icon3"
          alt="soso"
          src="/img/soso.png"
          onClick={() => selectfeel("img/soso.png")}
        />
        <img
          className="icon4"
          alt="notgood"
          src="/img/notgood.png"
          onClick={() => selectfeel("img/notgood.png")}
        />
        <img
          className="icon5"
          alt="worst"
          src="/img/worst.png"
          onClick={() => selectfeel("img/worst.png")}
        />
        {/* <div className="icon1"></div> */}
      </div>

      <div className="simple-dairy_wrapper">
        <h3 className="simple-dairy">한줄일기</h3>
        <textarea
          onChange={changedairyContent}
          className="write-dairy"
          placeholder="오늘은 어땠는지 한줄일기를 작성해주세요"
          id="boardContent"
        />
      </div>

      <button className="writeBoard-write" onClick={sendDiaryWriteData}>
        게시글 작성
      </button>
    </div>
  );
}

export default DiaryCreate;
