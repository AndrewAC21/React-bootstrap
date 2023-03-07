import { Card, Col, Container, Row } from "react-bootstrap";

export default function ProductDisplay({ product }) {
  const { id, title, price, category, description, image } = product[0];

  return (
    <Container>
      <Row>
        <Col md={8}>
          <img src={image} alt={title} width="100%" />
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ${price}
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Category: {category}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
