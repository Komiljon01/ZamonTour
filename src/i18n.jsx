import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

import engTranslation from "../public/locales/eng.json";
import ruTranslation from "../public/locales/ru.json";
import uzTranslation from "../public/locales/uz.json";

const language = localStorage.getItem("i18nextLng") || "eng";

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "eng",
    lng: language,
    debug: true,
    resources: {
      eng: { translation: engTranslation },
      ru: { translation: ruTranslation },
      uz: { translation: uzTranslation },
    },
  });

export default i18n;
