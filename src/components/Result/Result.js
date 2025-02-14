import "./Result.css";

import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Result() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2 className="modal-title">Result</h2>
      <div className="modal-result-container">
        <h3 className="modal-result">73 DKS</h3>
        <p className="modal-result-parag">(I can write words.)</p>
      </div>
      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Keystrokes</span>
        <span>373</span>
      </div>
      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Accuracy</span>
        <span>95.03%</span>
      </div>
      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Correct Words</span>
        <span className="modal-result-detail-true">63</span>
      </div>
      <div className="modal-result-detail">
        <span className="modal-result-detail-title">Wrong Words</span>
        <span className="modal-result-detail-false">2</span>
      </div>

      <button onClick={() => setModalIsOpen(false)} className="modal-close-btn">
        OK
      </button>
    </Modal>
  );
}

export default Result;
