import "./index.css";

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

export default function Services() {
  return (
    <>
      <MainCard />
    </>
  );
}
