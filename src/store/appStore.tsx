import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import connectionReducer from "./slices/connectionSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    connection: connectionReducer,
  },
});
