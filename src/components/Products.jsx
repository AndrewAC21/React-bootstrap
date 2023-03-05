import { useEffect, useState } from "react";
import Product from "./Product/Product";
import { getProducts } from "../services/fetchProducts";

export default function Products() {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="card-container">
      {isLoading ?? <p>Loading....</p>}
      {products.map((ele) => (
        <Product key={ele.id} product={ele} />
      ))}
    </div>
  );
}
