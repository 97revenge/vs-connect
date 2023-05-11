const CardContent = () => {
  return (
    <>
      <div className="card-content">
        <div></div>
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

export default function Scaffold() {
  return (
    <>
      <div className="app">
        <MainCard />
      </div>
    </>
  );
}
