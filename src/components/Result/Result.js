import "./Result.css";
import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectScoreValues } from "../../redux/typingSlice/typingSlice";

Modal.setAppElement("#root");

function Result() {
  const { isTimeUp } = useSelector((state) => state.typing);

  const { correctWords, incorrectWords, accuracy, keystrokes } =
    useSelector(selectScoreValues);

  const [modalIsOpen, setModalIsOpen] = useState(isTimeUp);

  const wordsPerMinute = Math.round(correctWords * (60 / 60));

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Typing Test Result"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2 className="modal-title">Typing Test Result</h2>

      <div className="modal-result-container">
        <h3 className="modal-result">{wordsPerMinute} WPM</h3>
        <p className="modal-result-parag">Words per minute</p>
      </div>

      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Keystrokes</span>
        <span>{keystrokes}</span>
      </div>

      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Accuracy</span>
        <span>{accuracy.toFixed(2)}%</span>
      </div>

      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Correct Words</span>
        <span className="modal-result-detail-true">{correctWords}</span>
      </div>

      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Wrong Words</span>
        <span className="modal-result-detail-false">{incorrectWords}</span>
      </div>

      <button onClick={() => setModalIsOpen(false)} className="modal-close-btn">
        OK
      </button>
    </Modal>
  );
}

export default Result;
