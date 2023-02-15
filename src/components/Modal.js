import "../App.css";
import { format } from "date-fns";

function Modal({ setModalOpen, selectedDate }) {
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
      <h3>{selectedDate.toDateString()}</h3>
    </div>
  );
}

export default Modal;
