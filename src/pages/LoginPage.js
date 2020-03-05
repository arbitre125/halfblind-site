import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const LoginPage = ({ login }) => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [wrongAlert, setWrongAlert] = useState(false);

  let history = useHistory();

  const onChange = e => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const loginHandler = async user => {
    return await axios
      .post("/users/login", {
        email: user.email,
        password: user.password
      })
      .then(res => res)
      .catch(err => console.log(err));
  };

  const onSubmit = async e => {
    e.preventDefault();

    await loginHandler(info).then(res => {
      if (res.data) {
        localStorage.setItem("usertoken", res.data.token);
        login(res.data.token);
        history.push("/");
      } else {
        setWrongAlert(true);
        setInfo({ email: "", password: "" });
      }
    });
  };

  return (
    <div
      className="center-horiz secondary"
      style={{
        height: "100vh",
        padding: 60,
        paddingTop: 20
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
          {wrongAlert && (
            <Alert
              className="txt-sm"
              variant="danger"
              style={{ marginTop: 30 }}
              onClose={() => setWrongAlert(false)}
              dismissible
            >
              Invalid email/password. Try again.
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

const mapDispatchToProps = dispatch => {
  return {
    login: token => {
      dispatch({ type: "LOGIN", payload: token });
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
