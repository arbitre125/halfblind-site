import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";

const LoginPage = props => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [wrongAlert, setWrongAlert] = useState(false);

  const onChange = e => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const login = async user => {
    return axios
      .post("/users/login", {
        email: user.email,
        password: user.password
      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("usertoken", res.data.token);
        } else {
          setWrongAlert(true);
          setInfo({ email: "", password: "" });
        }
      })
      .catch(err => console.log(err));
  };

  const onSubmit = async e => {
    e.preventDefault();

    await login(info)
      .then(res => res)
      .catch(err => console.log(err));
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
              Invalid email/password, try again.
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

export default LoginPage;
