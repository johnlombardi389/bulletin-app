import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Redux Toolkit", content: "Is really fun." },
  { id: 2, title: "Creating Slices", content: "This is my first slice." },
];

const postsSlice = (createSlice = {
  name: "posts",
  initialState,
  reducers: [
    // actions
  ],
});

export default postsSlice.reducer;
