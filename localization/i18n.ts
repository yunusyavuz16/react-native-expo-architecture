import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "react-native-localize";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      languageSwitch: "Switch Language",
    },
  },
  tr: {
    translation: {
      welcome: "Hoşgeldiniz",
      languageSwitch: "Dili Değiştir",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.getLocales()[0].languageCode.slice(0, 2), // Default language
  fallbackLng: "tr", // Fallback language
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export const changeLanguage = async (language: string) => {
  await i18n.changeLanguage(language);
};

export default i18n;
