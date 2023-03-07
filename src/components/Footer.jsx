import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row>
          <Col md={6} className="py-3">
            <h3>Footer Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
            © 2023 ZenCart.com

            </p>
          </Col>
          <Col md={3} className="py-3">
            <h3>Contact Us</h3>
            <p>Phone: 555-555-5555</p>
            <p>Email: info@zencart.com</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

