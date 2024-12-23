import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "./en.json";
import tr from "./tr.json";


const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

const supportedLanguages = ["en", "tr"];
const defaultLang = "tr";

const detectedLanguage = Localization.locale.split('-')[0];

const lng = supportedLanguages.includes(detectedLanguage)
  ? detectedLanguage
  : defaultLang;

i18n.use(initReactI18next).init({
  resources,
  lng: lng, // Default language
  fallbackLng: "tr", // Fallback language
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export const changeLanguage = async (language: string) => {
  await i18n.changeLanguage(language);
};

export default i18n;
