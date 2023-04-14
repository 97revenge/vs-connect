import Services from "./Services";
import "./index.css";

const aboutTexts = {
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
};

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

const Button = (props) => {
  return (
    <div>
      <button className="button  wobble-ver-left">
        <p className="conecte-se">{props.conect}</p>
      </button>
      <p className="more">
        Conheca mais sobre em <strong>blablabla.com</strong>
        <link rel="stylesheet" href={aboutTexts.moreLink} />
      </p>
    </div>
  );
};

const H1Content = () => {
  return (
    <div className="h-1-content">
      <p className="publique-nescessidade">
        {aboutTexts.H1Content.firstText[0]}
        <strong className="anima wobble-hor-bottom">
          {aboutTexts.H1Content.firstText[1]}
        </strong>
        {aboutTexts.H1Content.firstText[2]} {aboutTexts.H1Content.secondText[0]}
        <strong className="anima wobble-hor-bottom">
          {aboutTexts.H1Content.secondText[1]}
        </strong>
        {aboutTexts.H1Content.secondText[2]}
      </p>
      <p className="h1-content-p">
        {aboutTexts.H1Content.paragraphContent[0]}
        <strong>{aboutTexts.H1Content.paragraphContent[1]}</strong>{" "}
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

const CardContent = () => {
  return (
    <>
      <div className="card-content">
        <H1Content />

        <IconsContent />
        <Button conect={Object.values(aboutTexts.Button)} />
      </div>
    </>
  );
};
const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar-buttons">
        <div className="frame-1">
          <h1 className="inicio">
            <a href={<Home />}>inicio</a>
          </h1>
        </div>
        <div className="frame-2">
          <h1 className="servicos">
            <a href={<Services />}>servicos</a>
          </h1>
        </div>
        <div className="frame-3">
          <h1 className="cadastro">
            <a href="./cadastro">cadastro</a>
          </h1>
        </div>
        <div className="frame-4">
          <h1 className="login">
            <a href="./login">login</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

const MainCard = () => {
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
