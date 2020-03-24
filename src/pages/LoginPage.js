import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../redux/store/actions/userActions";
import { Form, Button, Alert } from "react-bootstrap";

const LoginPage = ({ fetching, fetched, loginError, userLogged, login }) => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [wrongAlert, setWrongAlert] = useState({ show: false, message: "" });

  let history = useHistory();

  useEffect(() => {
    if (fetched && !userLogged) {
      setWrongAlert({ show: true, message: loginError });
      setInfo({ email: "", password: "" });
    }
  }, [fetching, fetched, loginError, userLogged]);

  const onChange = e => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(history, info);
  };

  return (
    <div
      className="center-horiz secondary"
      style={{
        height: "100vh",
        padding: 60,
        paddingTop: 40
      }}
    >
      <div style={{ width: 350 }}>
        <p className="white-txt txt-lg">Login</p>
        <Form className="white-txt txt-sm-md">
          <Form.Group controlId="email">
            <Form.Label style={{ float: "left" }}>Email</Form.Label>
            <Form.Control
              type="text"
              value={info.email}
              onChange={onChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label style={{ float: "left" }}>Password</Form.Label>
            <Form.Control
              type="password"
              value={info.password}
              onChange={onChange}
              placeholder="Enter password"
            />
          </Form.Group>
          {wrongAlert.show && (
            <Alert
              className="txt-sm"
              variant="danger"
              style={{ marginTop: 30 }}
              onClose={() => setWrongAlert({ show: false, message: "" })}
              dismissible
            >
              {wrongAlert.message}
            </Alert>
          )}
          {fetching && (
            <Alert className="txt-sm" variant="light" style={{ marginTop: 30 }}>
              Logging in...
            </Alert>
          )}
          <Button
            className="dark-btn"
            variant="outline-light"
            onClick={onSubmit}
            style={{ marginTop: 10 }}
          >
            Login
          </Button>
        </Form>
        <p className="grey-txt txt-sm" style={{ paddingTop: 15 }}>
          Don't have an account?{" "}
          <a className="grey-link" href="/register">
            Register
          </a>
          .
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    loginError: state.user.loginError,
    userLogged: state.user.userLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (history, user) => {
      dispatch(loginAction(history, user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
