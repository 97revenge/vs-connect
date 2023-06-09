import i18nextProvider, {
  callbackStatic,
} from "../../features/i18nextProvider";
import enHomeTranslation from "../../../locales/en/enHomeTranslation.json";
import ptHomeTranslation from "../../../locales/pt/ptHomeTranslation.json";
import "./index.css";
import { Link } from "tiger-router";
i18nextProvider(enHomeTranslation, ptHomeTranslation);

const IconsContent = () => {
  return (
    <>
      <div className="profile-home">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/d18i3orqa1a-34%3A347?alt=media&token=fa0317ce-7254-4e93-ad24-1fd9f5cde938"
          alt="Not Found"
          className="icons-content"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/49vnjpw6whj-34%3A364?alt=media&token=2f460b76-6b87-4930-ad7d-c7161e60b8a3"
          alt="Not Found"
          className="thought-bubble jello-horizontal"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/d18i3orqa1a-34%3A347?alt=media&token=fa0317ce-7254-4e93-ad24-1fd9f5cde938"
          alt="Not Found"
          className="icons-content"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/d279lihxkne-34%3A394?alt=media&token=c3ce5871-c058-43fa-8bf2-cf7074f837e7"
          alt="Not Found"
          className="thought-bubble jello-horizontal"
        />
      </div>
    </>
  );
};

const Button = () => {
  return (
    <div>
      <button className="button  wobble-ver-left">
        <p className="conecte-se">{callbackStatic("Button")}</p>
      </button>
      <p className="more">
        {callbackStatic("more")}
        <strong>
          <link
            rel="stylesheet"
            href="https://www.figma.com/file/6khinzowdFkFD1ikyQNawW/VS-Connect-by-Matheus-Henrique?node-id=1-2&t=NzZOCXGkSUpsEfNK-0"
          />
          <u>@vs-connect</u>{" "}
        </strong>
      </p>
    </div>
  );
};

const H1Content = () => {
  return (
    <div className="h-1-content">
      <p className="publique-nescessidade">
        {callbackStatic("H1Content.firstText.0")}
        <strong className="anima wobble-hor-bottom">
          {callbackStatic("H1Content.firstText.1")}
        </strong>
        {callbackStatic("H1Content.firstText.2")}{" "}
        {callbackStatic("H1Content.secondText.0")}
        <strong className="anima wobble-hor-bottom">
          {callbackStatic("H1Content.secondText.1")}
        </strong>
        {callbackStatic("H1Content.secondText.2")}
      </p>
      <p className="h1-content-p">
        {callbackStatic("H1Content.paragraphContent.0")}
        <strong>{callbackStatic("H1Content.paragraphContent.1")}</strong>{" "}
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/w2q3hk7k6v-58%3A53?alt=media&token=54c7f297-7737-44ce-bb4b-be0d3945894a"
        alt="Not Found"
        className="highlight-1"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/w2q3hk7k6v-58%3A54?alt=media&token=c2a47f09-8269-42ad-80bf-78383671185c"
        alt="Not Found"
        className="highlight-2"
      />
    </div>
  );
};

export const CardContent = () => {
  return (
    <>
      <div className="card-content">
        <H1Content />

        <IconsContent />
        <Button />
      </div>
    </>
  );
};
export const Nav = () => {
  const lang = document.querySelector("html");

  return (
    <div className="nav">
      <div className="navbar-buttons">
        <details className="frame-1">
          <summary className="inicio">Language</summary>
          <div>
            <button onClick={() => lang.setAttribute("lang", "en")}> 🇺🇸</button>
          </div>
          <div>
            <button onClick={() => lang.setAttribute("lang", "pt")}> 🇧🇷</button>
          </div>
        </details>
        <div className="frame-2">
          <h1 className="servicos">
            <Link to="/services">{callbackStatic("servicos")}</Link>
          </h1>
        </div>
        <div className="frame-3">
          <h1 className="cadastro">
            <Link to="/register">{callbackStatic("cadastro")}</Link>
          </h1>
        </div>
        <div className="frame-4">
          <h1 className="login">
            <Link to="/Login">{callbackStatic("login")}</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export const MainCard = () => {
  return (
    <>
      <div className="main-card">
        <CardContent />
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <div className="app">
        <Nav />
        <MainCard />
      </div>
    </>
  );
}
