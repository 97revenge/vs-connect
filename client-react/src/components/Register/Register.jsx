import { useState } from "react";
import "./index.css";

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

  const result = value.map((item) => {
    return (
      <>
        <label htmlFor="" className="forms-label">
          {item}
        </label>

        <input
          type="text"
          name=""
          id=""
          placeholder={`digite o seu ${item}`}
          className="form-content"
        />
      </>
    );
  });

  return (
    <>
      <div className="group-12">
        <div className="group-512">
          <p className="register">
            <strong>Register</strong>
          </p>
          {result}

          <button className="button organize" onSubmit={true}>
            <p className="registre-se ">
              <strong>lorem ipsum</strong>
            </p>
          </button>
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
