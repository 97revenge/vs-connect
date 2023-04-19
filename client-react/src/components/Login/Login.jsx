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

export default function Login() {
  return (
    <>
      <div className="app">
        <Nav />
        <MainCard />
      </div>
    </>
  );
}
