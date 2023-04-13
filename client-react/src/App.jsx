// import i18next from "i18next";
import "./App.css";
import Test from "./features/Test";
import { Suspense } from "react";
import Home from "./components/Home";
// import { useTranslation, initReactI18next } from "react-i18next";

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        <Home />
      </Suspense>

      <Suspense fallback={<h1>loading...</h1>}>
        <Test />
      </Suspense>
    </>
  );
}

export default App;
