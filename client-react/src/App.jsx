// import i18next from "i18next";
import "./App.css";
import Home from "./components/Home";
import { Suspense } from "react";
// import { useTranslation, initReactI18next } from "react-i18next";

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
