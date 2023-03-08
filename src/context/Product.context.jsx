import { useState, useEffect, createContext } from "react";

import { getProducts } from "../services/fetchProducts";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  let [products, setProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}
