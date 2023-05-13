import { useState } from "react";
import logic from "../features/logic";

const instanceLogic = logic("Matheus", "henrique");
const secondLogic = logic("carlos", "joao");
const thirdLogic = logic("marcos", "Paulo");

const DisplayLogic = () => {
  const [state, setState] = useState([
    instanceLogic,
    secondLogic,
    thirdLogic,
    ...value,
  ]);
  const value = state.map((item, index) => {
    return (
      <>
        <li key={index}>
          <p>{item}</p>
        </li>
      </>
    );
  });

  return (
    <>
      <div>{value}</div>
    </>
  );
};

const Toolbar = ({ playMovie, uploadMovie }) => {
  const [state, setState] = useState({
    playMovie: `voce deu play no filme ${playMovie}`,
    uploadMovie: `o filme ${playMovie} está sendo carregado !!! `,
  });

  const handleState = () => {
    return setState(state.playMovie);
  };

  return (
    <>
      <div>
        <button onClick={handleState}>Play Movie</button>
        <button onClick={uploadMovie}>Upload Image</button>
      </div>
    </>
  );
};

export default function Playground() {
  const value = (
    <Toolbar
      playMovie={() => alert(String(state))}
      uploadMovie={() => alert(String("Uploading 🚀🚀🚀"))}
    />
  );

  return (
    <>
      <div>
        <DisplayLogic />
      </div>
    </>
  );
}
