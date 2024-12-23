import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage as i18nChangeLanguage } from "@/localization";
import { AppDispatch } from "..";
import * as SecureStorage from "expo-secure-store";
import { SECURE_STORE_KEYS } from "@/constants/Keys";

const initialState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: { payload: string }) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const switchLanguage =
  (language: string, notStoreToSecureStorage?: boolean) =>
  async (dispatch: AppDispatch) => {
    await i18nChangeLanguage(language); // Update i18next language
    dispatch(setLanguage(language)); // Update Redux state

    if (notStoreToSecureStorage) return;
    await SecureStorage.setItemAsync(SECURE_STORE_KEYS.LOCALIZATION, language); // Update SecureStorage
  };

export default languageSlice.reducer;
