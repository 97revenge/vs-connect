import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import { Router, Route } from "tiger-router";

function App() {
  return (
    <Router>
      <route path="/" exact component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>

    // <>
    //   <Home />
    //   <Services />
    // </>
  );
}

export default App;
