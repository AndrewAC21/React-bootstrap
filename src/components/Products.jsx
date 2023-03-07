import { useEffect, useState, useContext } from "react";
import {ProductContext} from "../context/Product.context.jsx"

import ProductCard from "./Product/ProductCard";

export default function Products() {
  let {products, isLoading} = useContext(ProductContext)
  return (
    <div className="card-container">
      {isLoading ?? <p>Loading....</p>}
      {products.map((ele) => (
        <ProductCard key={ele.id} product={ele} />
      ))}
    </div>
  );
}
