import { createSlice } from '@reduxjs/toolkit';
import { changeLanguage as i18nChangeLanguage } from '@/localization';
import { AppDispatch } from '..';

const initialState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const switchLanguage = (language: string) => async (dispatch: AppDispatch) => {
  await i18nChangeLanguage(language); // Update i18next language
  dispatch(setLanguage(language));    // Update Redux state
};

export default languageSlice.reducer;
