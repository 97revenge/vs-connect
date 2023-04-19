import "./index.css";
import { Nav } from "../Home/Home";

const CardContent = () => {
  return (
    <>
      <div className="card-content"></div>
    </>
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

export default function Register() {
  return (
    <>
      <div className="app">
        <Nav />
        <MainCard />
      </div>
    </>
  );
}
