import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    setRequestConnectionData: (state, action) => {
      return action.payload;
    },

    removeRequestFromCard: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newData = state.filter((req: any) => req._id !== action.payload);
      return newData;
    },
  },
});

export const { setRequestConnectionData, removeRequestFromCard } =
  requestSlice.actions;

export default requestSlice.reducer;
