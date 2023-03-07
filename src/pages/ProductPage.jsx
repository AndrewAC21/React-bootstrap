import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../context/Product.context.jsx";
import ProductDisplay from "../components/Product/ProductDisplay";
export default function ProductPage({ productId }) {
  let { products, isLoading } = useContext(ProductContext);
  let product = products.filter((ele) => ele.id == productId);
  
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ProductDisplay product={product} />;
    </>
  );
}
