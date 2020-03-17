import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  logoutAction,
  newGameAction
} from "../../redux/store/actions/userActions";
import { Navbar, Nav, NavDropdown, Image, Row, Col } from "react-bootstrap";
import half_eye from "../../images/logos/half-eye-l-w.png";

const Header = ({
  userLogged,
  userDetails,
  currentGameId,
  logout,
  newGame,
  ...props
}) => {
  let history = useHistory();

  const enterGame = async () => {
    if (userLogged) {
      if (currentGameId) {
        history.push(`/game/${currentGameId}`);
      } else {
        await newGame(history);
      }
    } else {
      history.push(`/login`);
    }
  };

  const logoutHandler = async e => {
    e.preventDefault();

    await logout(history, currentGameId);
    // After, push history -> "/login" (in action creator)
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
        title={
          <span className="grey-link txt-sm">
            {userLogged && userDetails.username}
          </span>
        }
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
      {props.width > 550 ? (
        <>
          <Nav className="mr-auto">
            <NavDropdown title={<span className="grey-link txt-sm">Play</span>}>
              <NavDropdown.Item onClick={enterGame} className="txt-sm">
                Play Offline
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className="grey-link txt-sm">
              About
            </Nav.Link>
          </Nav>
          {userLogged ? loggedIn : notLoggedIn}
        </>
      ) : (
        <>
          <Nav className="mr-auto"></Nav>
          <Nav className="mr-sm-2">
            <NavDropdown
              alignRight
              title={<span className="grey-link txt-sm">Options</span>}
            >
              <NavDropdown.Item onClick={enterGame} className="txt-sm">
                Play Offline
              </NavDropdown.Item>
              <NavDropdown.Item href="/about" className="txt-sm">
                About
              </NavDropdown.Item>
              {userLogged ? (
                <>
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item
                    href="/login"
                    onClick={logoutHandler}
                    className="txt-sm"
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/login" className="txt-sm">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/register" className="txt-sm">
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </>
      )}
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    userLogged: state.user.userLogged,
    userDetails: state.user.userDetails,
    currentGameId: state.user.currentGameId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (history, currentGameId) => {
      dispatch(logoutAction(history, currentGameId));
    },
    newGame: history => {
      dispatch(newGameAction(history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
