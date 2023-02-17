import "../App.css";
import ReadDiaryData from "../Api/DiaryData";
// import { format } from "date-fns";

function Modal_read({ setModalOpen, date }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal_container">
      <button className="close" onClick={closeModal}>
        X
      </button>
      <p>모달창입니다.</p>
      <h3 className="SelectedDate">{date}</h3>

      {/* <ReadDiaryData /> */}
    </div>
  );
}

export default Modal_read;
