import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  mode: "dark" | "light";
}
const storedTheme = localStorage.getItem("theme") || "dark";

const initialState: themeState = {
  mode: storedTheme === "dark" ? storedTheme : "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
      document.querySelector("html")?.setAttribute("data-theme", state.mode);
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
