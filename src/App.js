import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./api/Login";
import Diary from "./api/Diary";
import DiaryCreate from "./api/DiaryCreate";
import DiaryRead from "./api/DiaryRead";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/diarys/:user/:month" element={<Diary />} />
        <Route path="/api/diarys/create" element={<DiaryCreate />} />
        <Route path="/api/diarys/:user/:date" element={<DiaryRead />} />
      </Routes>
    </div>
  );
}

export default App;
