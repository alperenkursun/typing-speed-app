import { createSlice } from "@reduxjs/toolkit";

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    words: [],
  },
  reducers: {},
});

export default typingSlice.reducer;
