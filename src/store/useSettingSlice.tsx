import { createSlice } from "@reduxjs/toolkit";

const userSettingSlice = createSlice({
   name: "user-setting",
   initialState: {
      language: "en",
   },
   reducers: {
      changeLanguageToMM: (state) => {
         state.language = "mm";
      },
      changeLanguageToEN: (state) => {
         state.language = "en";
      },
   },
});

export default userSettingSlice.reducer;

export const { changeLanguageToEN, changeLanguageToMM } = userSettingSlice.actions;
