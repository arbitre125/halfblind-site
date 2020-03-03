import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown, Image, Row, Col } from "react-bootstrap";
import decode from "jwt-decode";
import half_eye from "../../images/logos/half-eye-l-w.png";

const Header = ({ userLogged, usertoken, logout }) => {
  const [username, setUsername] = useState("");

  let history = useHistory();

  useEffect(() => {
    if (userLogged) {
      setUsername(decode(usertoken).username);
    }
  }, [userLogged, usertoken]);

  const logoutHandler = e => {
    e.preventDefault();
    localStorage.clear();
    logout();
    history.push("/login");
  };

  const notLoggedIn = (
    <Nav className="mr-sm-2">
      <Nav.Link href="/login" className="grey-link txt-sm">
        Login
      </Nav.Link>
      <Nav.Link href="/register" className="grey-link txt-sm">
        Register
      </Nav.Link>
    </Nav>
  );

  const loggedIn = (
    <Nav className="mr-sm-2">
      <NavDropdown
        alignRight
        title={<span className="grey-link txt-sm">{username}</span>}
      >
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link
        href="/login"
        onClick={logoutHandler}
        className="grey-link txt-sm"
      >
        Logout
      </Nav.Link>
    </Nav>
  );

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
            </p>
            <p
              style={{ marginTop: -22, marginLeft: -20 }}
              className="grey-txt txt-sm"
            >
              alpha v0.1
            </p>
          </Col>
        </Row>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title={<span className="grey-link txt-sm">Play</span>}>
          <NavDropdown.Item href="/game" className="txt-sm">
            Play Offline
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/about" className="grey-link txt-sm">
          About
        </Nav.Link>
      </Nav>
      {userLogged ? loggedIn : notLoggedIn}
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    userLogged: state.userLogged,
    usertoken: state.usertoken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch({ type: "LOGOUT" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
