import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Kakao from "./pages/Kakao";
import Diaryall from "./pages/Diaryall";
// import Diary from "./pages/Diary";
import DiaryCreate from "./pages/DiaryCreate";
import DiaryUpdate from "./pages/DiaryUpdate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/api/kakao" element={<Kakao />} />
        <Route path="/api/diaryall" element={<Diaryall />} />
        <Route path="/api/diarys/create" element={<DiaryCreate />} />
        {/* <Route path="/api/diarys" element={<Diary />} /> /*:user/:date"*/}
        {/* <Route
          path="/api/diarys/update/${date}/${userId}"
          element={<DiaryUpdate />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
