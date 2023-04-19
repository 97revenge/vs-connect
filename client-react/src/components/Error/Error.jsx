import "./index.css";

const CardContent = () => {
  return (
    <>
      <div className="card-content">
        <p>
          <strong>Erro 404...</strong>
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

export default function Error() {
  return (
    <>
      <div>
        <MainCard />
      </div>
    </>
  );
}
