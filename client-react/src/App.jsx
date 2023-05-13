import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Error from "./components/Error/Error";

import { Router, Route } from "tiger-router";
import Playground from "./components/Playground";

function App() {
  return (
    <Router defaultComponent={Error}>
      <Route path="/home" Component={Home} />
      <Route path="/services" Component={Services} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/playground" Component={Playground} />
    </Router>

    // <>
    //   <Home />
    //   <Services />
    // </>
  );
}

export default App;
