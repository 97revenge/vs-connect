import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from "react-i18next";

export const callbackStatic = (value) => {
  const { t } = useTranslation();
  const result = t(value);
  return typeof value == "string" && result;
};

export default function i18nextProvider(enParams, ptParams) {
  const provider = i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: ["pt", "en"],
      debug: false,
      fallbackLng: document.querySelector("html").lang,
      resources: {
        en: {
          translation: enParams,
        },
        pt: {
          translation: ptParams,
        },
      },
      detection: {
        order: [
          "htmlTag",
          "cookie",
          "querystring",
          "localStorage",
          "sessionStorage",
          "navigator",
        ],
      },
    });

  return provider;
}
