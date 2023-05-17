import "./index.css";
import { Nav } from "../Home/Home";

const CardSection = () => {
  return (
    <>
      <div className="group-cards-high">
        <div className="card-row">
          <div className="section-cards">
            <div className="card-one">
              <p className="title">Perfil Desenvolvedor e Contratante 🦚</p>
              <p className="description">
                Plataforma Trará Workspaces para conexoes entre clientes ou
                projetos compartilhados.
              </p>
              <div className="status">
                <p className="wip">all</p>
              </div>
            </div>
            <div className="card-one">
              <p className="title">Perfil Desenvolvedor e Contratante 🦚</p>
              <p className="description">
                Plataforma Trará Workspaces para conexoes entre clientes ou
                projetos compartilhados.
              </p>
              <div className="status">
                <p className="wip">all</p>
              </div>
            </div>
            <div className="card-one">
              <p className="title">Perfil Desenvolvedor e Contratante 🦚</p>
              <p className="description">
                Plataforma Trará Workspaces para conexoes entre clientes ou
                projetos compartilhados.
              </p>
              <div className="status">
                <p className="wip">all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-cards-low">
        <div className="card-row">
          <div className="section-cards">
            <div className="card-one">
              <p className="title">Perfil Desenvolvedor e Contratante 🦚</p>
              <p className="description">
                Plataforma Trará Workspaces para conexoes entre clientes ou
                projetos compartilhados.
              </p>
              <div className="status">
                <p className="wip">all</p>
              </div>
            </div>
            <div className="card-one">
              <p className="title">Perfil Desenvolvedor e Contratante 🦚</p>
              <p className="description">
                Plataforma Trará Workspaces para conexoes entre clientes ou
                projetos compartilhados.
              </p>
              <div className="status">
                <p className="wip">all</p>
              </div>
            </div>
            <div className="card-one">
              <p className="title">Perfil Desenvolvedor e Contratante 🦚</p>
              <p className="description">
                Plataforma Trará Workspaces para conexoes entre clientes ou
                projetos compartilhados.
              </p>
              <div className="status">
                <p className="wip">all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CardContent = () => {
  return (
    <>
      <div className="card-content">
        <CardSection />
      </div>
    </>
  );
};

const MainCard = () => {
  return (
    <>
      <div className="main-card">
        <p className="title-card">
          🤔 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <CardContent />
      </div>
    </>
  );
};

function Scaffold() {
  return (
    <>
      <div className="app">
        <MainCard />
      </div>
    </>
  );
}

export default function Services() {
  return (
    <>
      <div className="app">
        <Nav />
      </div>
      <div>
        <Scaffold />
      </div>
    </>
  );
}
