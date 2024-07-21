// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white mt-4">
    <Container>
      <Row>
        <Col className="text-center py-3">© 2023 Leaflet Map. All Rights Reserved.</Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
