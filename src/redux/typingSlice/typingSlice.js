import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export const generateRandomWords = (count) => {
  let randomWords = Array.from({ length: count }, () => faker.word.noun());

  let totalCharacters =
    randomWords.reduce((acc, word) => acc + word.length, 0) +
    (randomWords.length - 1);

  while (totalCharacters >= 128 && randomWords.length > 0) {
    randomWords.pop();

    totalCharacters =
      randomWords.reduce((acc, word) => acc + word.length, 0) +
      (randomWords.length - 1);
  }

  return randomWords;
};

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    words: generateRandomWords(24),
    correctWords: 0,
    incorrectWords: 0,
    accuracy: 100,
    keystrokes: 0,
    timeLeft: 60,
    isTimeUp: false,
    isActive: false,
  },
  reducers: {
    refreshWords: (state) => {
      state.words = generateRandomWords(24);
    },
    decreaseTime: (state) => {
      if (state.isActive && state.timeLeft > 0) {
        state.timeLeft -= 1;
      }
      if (state.timeLeft === 0) {
        state.isTimeUp = true;
        state.isActive = false;
      }
    },
    increaseKeystrokes: (state) => {
      state.keystrokes += 1;
    },
    checkWord: (state, action) => {
      const { inputWord, currentIndex } = action.payload;
      if (inputWord === state.words[currentIndex]) {
        state.correctWords += 1;
      } else {
        state.incorrectWords += 1;
      }
      const totalWords = state.correctWords + state.incorrectWords;
      state.accuracy =
        totalWords > 0 ? (state.correctWords / totalWords) * 100 : 100;
    },
    startTimer: (state) => {
      state.isActive = true;
    },
  },
});

export const {
  refreshWords,
  decreaseTime,
  increaseKeystrokes,
  checkWord,
  startTimer,
} = typingSlice.actions;
export const selectWords = (state) => state.typing.words;
export const selectScoreValues = (state) => ({
  correctWords: state.typing.correctWords,
  incorrectWords: state.typing.incorrectWords,
  accuracy: state.typing.accuracy,
  keystrokes: state.typing.keystrokes,
  timeLeft: state.typing.timeLeft,
});

export default typingSlice.reducer;
