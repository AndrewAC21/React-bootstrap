import { Route } from "wouter";

import { ProductProvider } from "./context/Product.context.jsx";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

import NavBar from "./components/NavBar";
import Register from "./components/Form/Register";
import LogIn from "./components/Form/LogIn";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ProductProvider>
        <Route path="/zencart" component={Home} />
        <Route path="/zencart/products/:id">
          {(params) => <ProductPage productId={params.id} />}
        </Route>
      </ProductProvider>

      <Route path="/zencart/login" component={LogIn} />
      <Route path="/zencart/register" component={Register} />
      <Footer />
    </>
  );
}

export default App;
