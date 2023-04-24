import "./index.css";

const CardGroup = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jegqh82xvp-108%3A132?alt=media&token=3cc0e1e8-a542-4772-8f15-76d627bc4624"
        alt="Not Found"
        className="group-1 jello-vertical"
      />
    </>
  );
};

const RegisterCardContent = () => {
  return (
    <>
      <div className="new-card-content">
        <CardGroup />
      </div>
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
