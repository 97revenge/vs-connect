import "./index.css";
import { Nav } from "../Home/Home";

const CardGroupRight = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jegqh82xvp-108%3A132?alt=media&token=3cc0e1e8-a542-4772-8f15-76d627bc4624"
        alt="Not Found"
        className="group-1"
      />
    </>
  );
};
const CardGroupTop = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jegqh82xvp-108%3A132?alt=media&token=3cc0e1e8-a542-4772-8f15-76d627bc4624"
        alt="Not Found"
        className="group-2"
      />
    </>
  );
};
const CardGroupBottom = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jegqh82xvp-108%3A132?alt=media&token=3cc0e1e8-a542-4772-8f15-76d627bc4624"
        alt="Not Found"
        className="group-3"
      />
    </>
  );
};

const DogHat = () => {
  return (
    <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/h72644bo36j-108%3A149?alt=media&token=c70f8731-1ccc-4c4d-86dc-00eaefbe1377"
      alt="Not Found"
      className="dog-hat heartbeat"
    />
  );
};

const Cloud = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gumxqo5b046-108%3A162?alt=media&token=c20c1d49-b18a-4d0c-8432-d7c74e321b26"
        alt="Not Found"
        className="cloud heartbeat"
      />
    </>
  );
};

const Turtle = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l70uldwmml-108%3A160?alt=media&token=f123400a-c555-4837-9f98-36da7e0ab33c"
        alt="Not Found"
        className="turtle heartbeat"
      />
    </>
  );
};

const Burst = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/m0m9kn6p01d-108%3A161?alt=media&token=20801a68-e88e-4910-99dd-9085e071d62d"
        alt="Not Found"
        className="burst heartbeat"
      />
    </>
  );
};

const MusicNote = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/pfgd09y8a3-108%3A158?alt=media&token=89747eab-016d-4578-a5ef-a68655547653"
        alt="Not Found"
        className="music-note bounce-right"
      />
    </>
  );
};

const SurfDog = () => {
  return (
    <>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/h93mmfm35bb-108%3A159?alt=media&token=17916e63-bda0-4e05-add8-ecb37116e656"
        alt="Not Found"
        className="surf-dog heartbeat"
      />
    </>
  );
};

const Form = ({ init, mid, low, extra }) => {
  const value = [init, mid, low, extra];

  const anotherResult = () => {
    return (
      <>
        <label htmlFor="text" className="forms-label">
          <u>name</u>
        </label>

        <input type="text" name="" id="" className="form-content" />
      </>
    );
  };

  const result = value.map((item, index) => {
    return (
      <>
        <label htmlFor="text" className="forms-label">
          {item}
        </label>

        <input
          type={index}
          name=""
          id=""
          placeholder={`digite o seu ${item}`}
          className="form-content"
        />
      </>
    );
  });
  const FormComponent = () => {
    return (
      <>
        <div>
          <p className="register">
            <strong>Register</strong>
          </p>

          <form action="submit">
            <label htmlFor="text" className="forms-label">
              {init}
            </label>
            <input type="name" name="name" id="name" className="form-content" />
            <label htmlFor="text" className="forms-label">
              {mid}
            </label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              className="form-content"
            />
            <label htmlFor="text" className="forms-label">
              {low}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-content"
            />{" "}
            <label htmlFor="text" className="forms-label">
              {extra}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-content"
            />
          </form>

          <button className="button organize" onSubmit={true}>
            <p className="registre-se ">
              <strong>lorem ipsum</strong>
            </p>
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="group-12">
        <div className="group-512">
          <p className="register">
            <strong>Register</strong>
          </p>
          {result}
        </div>
      </div>
    </>
  );
};

const RegisterCardContent = () => {
  return (
    <>
      <div className="new-card-content ">
        <CardGroupRight />
        <CardGroupTop />
        <CardGroupBottom />
        <DogHat />
        <Cloud />
        <Turtle />
        <Burst />
        <MusicNote />
        <SurfDog />
        <Form
          init={String("name")}
          mid={String("last name")}
          low={String("email")}
          extra={String("password")}
        />
      </div>
    </>
  );
};

export default function Register() {
  return (
    <>
      <div className="app">
        <Nav />
      </div>
      <div>
        <RegisterCardContent />
      </div>
    </>
  );
}
