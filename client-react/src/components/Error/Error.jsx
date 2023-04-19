import "./index.css";
import { Nav } from "../Home/Home";
import Scaffold from "../../features/Scaffold";

export default function Error() {
  return (
    <>
      <div>
        <Scaffold />
        <div>
          <strong>Erro 404...</strong>
        </div>
      </div>
    </>
  );
}
