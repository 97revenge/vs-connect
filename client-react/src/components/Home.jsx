import "./index.css";

const IconsContent = () => {
  return (
    <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u98s0ke5cv-76%3A78?alt=media&token=238fa3d4-525d-49b6-9a82-0ca0aa684145"
      alt="Not Found"
      className="icons-content"
    />
  );
};

const Button = () => {
  return (
    <div className="button">
      <p className="conecte-se">Conecte-se</p>
    </div>
  );
};

const H1Content = () => {
  return (
    <div className="h-1-content">
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
      <p className="publique-nescessidade">
        Publique=nescessidades Encontre=desenvolvedores
      </p>
      <p className="h1-content-p">
        Se você tem uma idéia, uma empresa , um aplicativo, uma arte ou um
        negócio...
        <strong>O seu lugar é aqui !</strong>{" "}
      </p>
    </div>
  );
};

const CardContent = () => {
  return (
    <>
      <div className="card-content"></div>
    </>
  );
};
const Nav = () => {
  return (
    <div className="nav">
      <div className="navbar-buttons">
        <div className="frame-1">
          <h1 className="inicio">Inicio</h1>
        </div>
        <div className="frame-2">
          <h1 className="servicos">Servicos</h1>
        </div>
        <div className="frame-3">
          <h1 className="cadastro">Cadastro</h1>
        </div>
        <div className="frame-4">
          <h1 className="login">Login</h1>
        </div>
      </div>
    </div>
  );
};

const MainCard = () => {
  return (
    <>
      <div className="main-card"></div>
    </>
  );
};

export default function Home() {
  return (
    <div>
      <Nav />
      <MainCard />
      <CardContent />
      <H1Content />
      <Button />
      <IconsContent />
    </div>
  );
}
