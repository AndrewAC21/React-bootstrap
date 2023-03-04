import React from "react";
import Card from "react-bootstrap/Card";
import CartSvg from "./CartSvg";

export default function Product() {
  return (
    <Card>
      <Card.Img src="https://picsum.photos/200" alt="" className="product-img" />
      <Card.Body>
        <Card.Title>Mueble blanco</Card.Title>
        <Card.Text>$120,00</Card.Text>
        <div className="product__svg">
       <CartSvg/> 
        </div>
      </Card.Body>
    </Card>
  );
}
