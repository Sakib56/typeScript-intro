import { configureStore } from "@reduxjs/toolkit";
import toggleDarkMode from "./slice/themeModeSlice";

export const store = configureStore({
  reducer: {
    theme: toggleDarkMode,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
