import React from "react";
import Card from "react-bootstrap/Card";
import CartSvg from "./CartSvg";

export default function Product({ product }) {
  return (
    <Card>
      <Card.Img src={product.image} alt="" className="product-img" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <div className="product__svg">
          <CartSvg />
        </div>
      </Card.Body>
    </Card>
  );
}
