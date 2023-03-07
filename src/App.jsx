import { Route } from "wouter";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Form/Register";
import LogIn from "./components/Form/LogIn";
import Footer from "./components/Footer"
import {ProductProvider} from "./context/Product.context.jsx"

function App() {
  return (
    <>
      <NavBar />
      <ProductProvider>

      <Route path="/" component={Home} />
      </ProductProvider>

      <Route path="/login" component={LogIn} />
      <Route path="/register" component={Register} />
    <Footer />
    </>
  );
}

export default App;
