import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import connectionReducer from "./slices/connectionSlice";
import requestReducer from "./slices/requestSlice";
import feedReducer from "./slices/feedSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    connection: connectionReducer,
    request: requestReducer,
    feed: feedReducer,
  },
});
