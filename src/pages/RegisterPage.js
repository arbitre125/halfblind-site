import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerAction } from "../redux/store/actions/userActions";
import { Form, Button, Alert } from "react-bootstrap";

const RegisterPage = ({
  fetching,
  fetched,
  connectionFailed,
  registerError,
  register
}) => {
  const [info, setInfo] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [wrongAlert, setWrongAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    if (fetched) {
      if (registerError) {
        setWrongAlert({ show: true, message: registerError });
        setInfo({ email: "", username: "", password: "", confirmPassword: "" });
      } else {
        setWrongAlert({ show: false, message: "" });
        setSuccessAlert(true);
        setInfo({ email: "", username: "", password: "", confirmPassword: "" });
      }
    } else if (connectionFailed) {
      setWrongAlert({ show: true, message: "Cannot connect to server." });
    }
  }, [fetching, fetched, connectionFailed, registerError]);

  const onChange = e => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    register(info);
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
      <div style={{ maxWidth: 400 }}>
        <p className="white-txt txt-lg">Register</p>
        <Form className="white-txt txt-sm-md" style={{ width: 360 }}>
          <Form.Group controlId="email">
            <Form.Label style={{ float: "left" }}>Email</Form.Label>
            <Form.Control
              type="text"
              value={info.email}
              onChange={onChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label style={{ float: "left" }}>Username</Form.Label>
            <Form.Control
              type="text"
              value={info.username}
              onChange={onChange}
              placeholder="Enter username"
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
          <Form.Group controlId="confirmPassword">
            <Form.Label style={{ float: "left" }}>Confirm password</Form.Label>
            <Form.Control
              type="password"
              value={info.confirmPassword}
              onChange={onChange}
              placeholder="Confirm password"
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
              Registering...
            </Alert>
          )}
          <Button
            className="dark-btn"
            variant="outline-light"
            onClick={onSubmit}
            style={{ marginTop: 10 }}
          >
            Register
          </Button>
        </Form>
        {successAlert && (
          <Alert
            className="txt-sm"
            variant="success"
            style={{ marginTop: 30 }}
            onClose={() => setSuccessAlert(false)}
            dismissible
          >
            Account created,{" "}
            <a className="dark-grey-link" href="/login">
              login
            </a>
            !
          </Alert>
        )}
        <p className="grey-txt txt-sm" style={{ paddingTop: 15 }}>
          Already have an account?{" "}
          <a className="grey-link" href="/login">
            Login
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
    connectionFailed: state.user.connectionFailed,
    registerError: state.user.registerError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: newUser => {
      dispatch(registerAction(newUser));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
