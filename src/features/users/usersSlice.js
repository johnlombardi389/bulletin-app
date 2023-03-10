import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Bobby Bob" },
  { id: "1", name: "Jimmy Jim" },
  { id: "2", name: "Kevin Kev" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
