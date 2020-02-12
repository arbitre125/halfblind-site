import React from "react";
import { Navbar, Image, Row, Col } from "react-bootstrap";
import logo from "../images/logos/3.png";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Row>
          <Col>
            <Image src={logo} style={{ padding: -10 }} width="50" height="50" />
          </Col>
          <Col></Col>
        </Row>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
