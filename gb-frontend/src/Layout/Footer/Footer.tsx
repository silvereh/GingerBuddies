import React from "react";
import './Footer.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <div className="Footer" data-testid="Footer">
    <Container>
      <Row className="align-items-center justify-content-between">
        <Col xs={12} sm="auto" as="nav"></Col>
        <Col xs={12} sm="auto" className="Footer-copy">&copy; GingerBuddies</Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
