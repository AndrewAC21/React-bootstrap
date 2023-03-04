import { Route } from "wouter";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Form/Register";
import LogIn from "./components/Form/LogIn";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" component={Home} />

      <Route path="/login" component={LogIn} />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
