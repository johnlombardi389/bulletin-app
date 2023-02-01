import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Redux Toolkit", content: "Is really fun." },
  { id: 2, title: "Creating Slices", content: "This is my first slice." },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
