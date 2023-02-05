import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Diary from "./pages/Diary";
import DiaryCreate from "./pages/DiaryCreate";
import DiaryRead from "./pages/DiaryRead";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/diarys" element={<Diary />} /> /*:user/:month"*/
        <Route path="/api/diarys/create" element={<DiaryCreate />} />
        <Route path="/api/diarys/:user/:date" element={<DiaryRead />} />
      </Routes>
    </div>
  );
}

export default App;
