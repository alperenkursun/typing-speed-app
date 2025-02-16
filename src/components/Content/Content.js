import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWords,
  refreshWords,
  decreaseTime,
  increaseKeystrokes,
  checkWord,
  startTimer,
} from "../../redux/typingSlice/typingSlice";
import Result from "../Result/Result";

function Content() {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);
  const { timeLeft, isTimeUp, isActive } = useSelector((state) => state.typing);
  const [inputValue, setInputValue] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordStatus, setWordStatus] = useState([]);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        dispatch(decreaseTime());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, dispatch]);

  const handleChange = (e) => {
    if (!isActive) {
      dispatch(startTimer());
    }
    setInputValue(e.target.value);
    dispatch(increaseKeystrokes());
  };

  const handleKeyDown = (e) => {
    if (e.key === " " && inputValue.trim().length > 0) {
      e.preventDefault();
      const trimmedInput = inputValue.trim();
      const isCorrect = trimmedInput === words[currentWordIndex];

      setWordStatus((prev) => [...prev, isCorrect ? "true" : "false"]);
      dispatch(
        checkWord({ inputWord: trimmedInput, currentIndex: currentWordIndex })
      );
      setInputValue("");

      if (currentWordIndex + 1 >= words.length) {
        dispatch(refreshWords());
        setCurrentWordIndex(0);
        setWordStatus([]);
      } else {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div>
      {isTimeUp && <Result />}
      <div className="text-preview">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <span
              className={
                index === currentWordIndex ? "current" : wordStatus[index]
              }
            >
              {word}
            </span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        ))}
      </div>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={timeLeft === 0}
        />
        <div className="time">{timeLeft}</div>
        <div className="retry" onClick={handleRetry}>
          <span>Retry</span>
        </div>
      </div>
    </div>
  );
}

export default Content;
