import React, { useState } from "react";
import { ForPostDiaryWrite } from "../Api/WriteData";
import "../App.css";
import Header from "../components/Header";

function DiaryCreate() {
  // 한줄일기 input
  // const [sessionId, setsessionId] = useState("");
  const [selectedfeel, setSelectedfeel] = useState(null);
  const [dairyContent, setdairyContent] = useState("");
  const [selectedtag, setSelectedtag] = useState([]);
  const tagLimit = 3;
  const DefaultImg = "/img/defalutImg.png";
  const [fileImage, setFileImage] = useState(DefaultImg);

  const selectfeel = (img) => {
    setSelectedfeel(img);
  };

  const selectTag = (tag) => {
    if (selectedtag.includes(tag)) {
      setSelectedtag(selectedtag.filter((selected) => selected !== tag));
    } else if (selectedtag.length < tagLimit) {
      setSelectedtag([...selectedtag, tag]);
    }
  };

  // 사진 선택 + 사진 미리보기
  const addImage = (e) => {
    e.preventDefault();

    // 선택된 파일을 selectedImage로 선언
    const selectedImage = e.target.files;

    const fileImageURL = URL.createObjectURL(selectedImage[0]);

    setFileImage(fileImageURL);
    // setSelectImage(selectedImage[0]);
  };

  // 게시글 작성하면 그 value를 인식하게 해주는 함수
  const changedairyContent = (e) => {
    setdairyContent(e.target.value);
  };
  console.log(changedairyContent);

  // 작성완료 버튼 -> 작성내용을 백에 보내주는 함수
  const sendDiaryData = (e) => {
    e.preventDefault();
    if (selectedfeel && Object.keys(selectedfeel).length > 0) {
      let DiaryWriteData = new FormData();
      // DiaryWriteData.append("sessionId", userSession);
      DiaryWriteData.append("feeling", selectedfeel);
      DiaryWriteData.append("dairyContent", dairyContent);
      DiaryWriteData.append("selectedtag", selectedtag);
      DiaryWriteData.append("fileName", fileImage);
      ForPostDiaryWrite(DiaryWriteData);
      for (var key of DiaryWriteData.keys()) {
        console.log(key);
      }

      for (var value of DiaryWriteData.values()) {
        console.log(value);
      }
    } else {
      console.log("기분선택 필수!");
      alert("오늘의 기분이모티콘을 선택해주세요");
    }
  };
  return (
    <div className="background">
      <Header />
      <div className="diarywrite">
        <div className="feeling_wrapper">
          <img
            className={`icon1 ${selectedfeel === "1" ? "selected" : ""}`}
            alt="heartsmile"
            src="/img/heartsmile.png"
            onClick={() => selectfeel("1")}
          />
          <img
            className={`icon2 ${selectedfeel === "2" ? "selected" : ""}`}
            alt="smile"
            src="/img/smile.png"
            onClick={() => selectfeel("2")}
          />
          <img
            className={`icon3 ${selectedfeel === "3" ? "selected" : ""}`}
            alt="soso"
            src="/img/soso.png"
            onClick={() => selectfeel("3")}
          />
          <img
            className={`icon4 ${selectedfeel === "4" ? "selected" : ""}`}
            alt="notgood"
            src="/img/notgood.png"
            onClick={() => selectfeel("4")}
          />
          <img
            className={`icon5 ${selectedfeel === "5" ? "selected" : ""}`}
            alt="worst"
            src="/img/worst.png"
            onClick={() => selectfeel("5")}
          />
        </div>
        <h3 className="one-dairy">✏️한줄일기</h3>
        <div className="simple-dairy_wrapper">
          <textarea
            onChange={changedairyContent}
            className="write-dairy"
            placeholder="어떤 하루를 보냈나요?"
            id="boardContent"
          />
        </div>

        <h3 className="tags">📌태그</h3>
        <div className="tags_wrapper">
          <span>
            <h5
              className={`tag1 ${
                selectedtag.includes("기념일") ? "selected" : ""
              }`}
              onClick={() => selectTag("기념일")}
            >
              #기념일
            </h5>
            <h5
              className={`tag2 ${
                selectedtag.includes("친구") ? "selected" : ""
              }`}
              onClick={() => selectTag("친구")}
            >
              #친구
            </h5>
          </span>
          <span>
            <h5
              className={`tag3 ${
                selectedtag.includes("약속") ? "selected" : ""
              }`}
              onClick={() => selectTag("약속")}
            >
              #약속
            </h5>
            <h5
              className={`tag3 ${
                selectedtag.includes("연인") ? "selected" : ""
              }`}
              onClick={() => selectTag("연인")}
            >
              #연인
            </h5>
          </span>
          <span>
            <h5
              className={`tag3 ${
                selectedtag.includes("운동") ? "selected" : ""
              }`}
              onClick={() => selectTag("운동")}
            >
              #운동
            </h5>
            <h5
              className={`tag3 ${
                selectedtag.includes("가족") ? "selected" : ""
              }`}
              onClick={() => selectTag("가족")}
            >
              #가족
            </h5>
          </span>
          <span>
            <h5
              className={`tag3 ${
                selectedtag.includes("공부") ? "selected" : ""
              }`}
              onClick={() => selectTag("공부")}
            >
              #공부
            </h5>
            <h5
              className={`tag4 ${
                selectedtag.includes("집콕") ? "selected" : ""
              }`}
              onClick={() => selectTag("집콕")}
            >
              #집콕
            </h5>
          </span>
        </div>

        <h3 className="todayimg">✨오늘의 사진</h3>
        <div className="fileuploader_wrapper">
          {/*id값이 fileImg인 input태그 찾아오기 */}
          <label htmlFor="fileImg">
            <div className="fileupload">
              <img
                className="BoardWrite-defaultImg"
                src={fileImage}
                alt="이미지 삽입"
                onClick={() => document.getElementById("fileImg")}
              />
            </div>
          </label>
          <input
            className="fileuploader"
            type="file"
            id="fileImg"
            accept="image/*"
            onChange={(e) => addImage(e)}
          />
        </div>
      </div>

      <button className="upload-dairy-btn" onClick={sendDiaryData}>
        작성 완료
      </button>
    </div>
  );
}

export default DiaryCreate;
