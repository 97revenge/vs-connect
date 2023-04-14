import { useTranslation } from "react-i18next";
import i18nextProvider from "./i18nextProvider";

i18nextProvider();

export default function Test() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1> {t("Welcome to React")}</h1>
      </div>
    </>
  );
}
