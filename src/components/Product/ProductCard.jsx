import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "wouter";

import CartSvg from "./CartSvg";

export default function Product({ product }) {
  let title = product.title.split(" ");
  let newTitle = title.slice(0, 7).join(" ");

  return (
    <Card className="product">
      <Link to={`/products/${product.id}`}>
        <div className="product__img-container">
          <Card.Img src={product.image} alt="" className="product__img" />
        </div>
        <div className="product__info">
          <Card.Body>
            <Card.Title>{newTitle}</Card.Title>
            <div className="product__sub-info">
              <Card.Text>${product.price}</Card.Text>
              <div className="sub-info__svg">
                <CartSvg />
              </div>
            </div>
          </Card.Body>
        </div>
      </Link>
    </Card>
  );
}
