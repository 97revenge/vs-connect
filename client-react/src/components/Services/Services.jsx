import "./index.css";
import { Nav } from "../Home/Home";

const CardContent = () => {
  return (
    <>
      <div className="card-content">
        <p className="p-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
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
