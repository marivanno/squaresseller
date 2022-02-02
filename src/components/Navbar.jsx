import React from 'react';
import {
  Nav, Row, Col, Button, Container,
} from 'react-bootstrap';

const Navbar = () => {
  const handleClickSomething = () => console.log('brrrr');

  return (
    <Nav className="shadow-sm navbar navbar-light bg-white">
      <Container className="px-5">
        <a className="navbar-brand" to="/">Squaresseller</a>
        <Row className="d-flex justify-content-between">
          <Col className="d-flex">
            <Button variant="primary" onClick={handleClickSomething}>
              Выход
            </Button>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default Navbar;
