import "./index.css";
import { Nav } from "../Home/Home";

const Card = () => {
  return (
    <>
      <div className="main-content">
        <p className="title">lorem ipsum</p>
      </div>
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

const Scaffold = () => {
  return (
    <>
      <div className="app">
        <MainCard />
      </div>
    </>
  );
};

export default function Services() {
  return (
    <>
      <div>
        <Nav />
        <Scaffold />
      </div>
    </>
  );
}
