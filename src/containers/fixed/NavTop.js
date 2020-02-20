import React from "react";
import { Navbar, Nav, NavDropdown, Image, Row, Col } from "react-bootstrap";
import half_eye from "../../images/logos/half-eye-l-w.png";

const NavTop = () => {
  return (
    <Navbar className="secondary" variant="dark">
      <Navbar.Brand
        href="/"
        className="no-select"
        style={{ marginTop: -8, marginBottom: -20 }}
      >
        <Row>
          <Col>
            <Image src={half_eye} width="50" style={{ opacity: 0.9 }} />
          </Col>
          <Col>
            <p className="white-txt txt-md" style={{ marginLeft: -20 }}>
              Half-Blind Chess{" "}
              <p style={{ marginTop: -8 }} className="grey-txt txt-sm">
                alpha v1.0
              </p>
            </p>
          </Col>
        </Row>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title={<span className="grey-link txt-sm">Play</span>}>
          <NavDropdown.Item href="/play" className="txt-sm">
            Play Offline
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="txt-sm">
            Find an Opponent
          </NavDropdown.Item>
          <NavDropdown.Item className="txt-sm">
            Challenge a Friend
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/about" className="grey-link txt-sm">
          About
        </Nav.Link>
      </Nav>
      <Nav className="mr-sm-2">
        <Nav.Link className="grey-link txt-sm">Login</Nav.Link>
        <Nav.Link className="grey-link txt-sm">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavTop;
