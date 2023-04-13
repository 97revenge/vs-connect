import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const valueTexts = {
  pt: {
    Button: "Conecte-se ! ",
    moreLink:
      "https://www.figma.com/file/6khinzowdFkFD1ikyQNawW/VS-Connect-by-Matheus-Henrique?node-id=1-2&t=NzZOCXGkSUpsEfNK-0",
    H1Content: {
      firstText: ["Publique", "=", "Nescessidades"],
      secondText: ["Encontre", "=", "Desenvolvedores"],
      paragraphContent: [
        "Se você tem uma idéia, uma empresa , um aplicativo, uma arte ou um negócio...",
        "O seu lugar é aqui !",
      ],
    },
  },
  eua: {
    Button: "start using ! ",
    moreLink:
      "https://www.figma.com/file/6khinzowdFkFD1ikyQNawW/VS-Connect-by-Matheus-Henrique?node-id=1-2&t=NzZOCXGkSUpsEfNK-0",
    H1Content: {
      firstText: ["publish", "=", "needs"],
      secondText: ["Find", "=", "developers"],
      paragraphContent: [
        " If you have an idea, a company, an application, an art or a business...",
        "Your place is here !",
      ],
    },
  },
};

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome do React and react-i18next",
      },
    },
    pt: {
      translation: {
        "Welcome to React": "Bem vindo ao React e ao i18next",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
});
