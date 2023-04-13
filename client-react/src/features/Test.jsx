import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import enTranslation from "../../locales/en/entranslation.json";
import ptTranslation from "../../locales/pt/pttranslation.json";
// import LanguageDetector from "i18next-browser-languagedetector";
i18next
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["pt", "en"],
    lgn: "en" || "pt",
    debug: false,
    fallbackLng: document.querySelector("html").lang,
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
  });

export default function Test() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("Welcome to React")}</h1>
    </>
  );
}
