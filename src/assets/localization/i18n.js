import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN_LOCALE from "./locale/en.json";
import FR_LOCALE from "./locale/fr.json";

const resources = {
  en: EN_LOCALE,
  fr: FR_LOCALE,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({ resources, fallbackLng: "en" });

export default i18n;
