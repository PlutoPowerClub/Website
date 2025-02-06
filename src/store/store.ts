import { configureStore } from "@reduxjs/toolkit";
import energyReducer from "./features/energySlice";

export const store = configureStore({
  reducer: {
    energy: energyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
