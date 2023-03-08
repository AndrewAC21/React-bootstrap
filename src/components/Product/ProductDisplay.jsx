import { Card, Col, Container, Image, Row } from "react-bootstrap";

export default function ProductDisplay({ product }) {
  const { id, title, price, category, description, image } = product[0];

  return (
    // // <div className="product-page-container">
    // <Container className="product-page-container">
    //   <Row className="product-page-container__row">
    //     <Col md={8}>
    //       <div className="product-page-container__img">
    //         <img src={image} alt={title} />
    //       </div>
    //     </Col>
    //     <Col md={4}>
    //       <Card>
    //         <Card.Body>
    //           <Card.Title>{title}</Card.Title>
    //           <Card.Subtitle className="mb-2 text-muted">
    //             ${price}
    //           </Card.Subtitle>
    //           <Card.Text>{description}</Card.Text>
    //           <Card.Text>Category: {category}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
    // // </div>vv
    <div className="product-container">
      <div className="product-img">
        <img src={image} alt={title} />
      </div>

      <div className="product-card">
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 ">${price}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Category: {category}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
