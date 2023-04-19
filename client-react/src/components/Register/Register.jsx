import "./index.css";
// import Scaffold from "../../features/Scaffold";

const RegisterCardContent = () => {
  return (
    <>
      <div className="new-card-content">ok</div>
    </>
  );
};

const RegisterNav = () => {
  return (
    <>
      <div className="new-nav"></div>
    </>
  );
};

export default function Register() {
  return (
    <>
      <div>
        <RegisterNav />
      </div>
      <div>
        <RegisterCardContent />
      </div>
    </>
  );
}
