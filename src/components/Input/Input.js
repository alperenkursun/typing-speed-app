import React from "react";

function Input() {
  return (
    <div className="input-container">
      <input className="input" type="text" />
      <div className="time">60</div>
      <div className="retry">
        <span>Retry</span>
      </div>
    </div>
  );
}

export default Input;
