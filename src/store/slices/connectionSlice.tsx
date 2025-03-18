import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addUserConnection: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUserConnection } = connectionSlice.actions;

export default connectionSlice.reducer;
