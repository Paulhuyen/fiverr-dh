import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./reducers/adminReducer";
import binhLuanReducer from "./reducers/binhLuanReducer";
import jobReducer from "./reducers/jobReducer";
import modalReducer from "./reducers/modalReducer";

import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    jobReducer: jobReducer,
    userReducer: userReducer,
    adminReducer: adminReducer,
    modalReducer: modalReducer,
    binhLuanReducer: binhLuanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
