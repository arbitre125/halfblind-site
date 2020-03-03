import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";

const RegisterPage = () => {
  const [info, setInfo] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [successAlert, setSuccessAlert] = useState(false);

  const onChange = e => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const register = async newUser => {
    await axios
      .post("/users/register", {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      })
      .then(res => console.log("Registered."))
      .catch(err => console.log(err));
  };

  const onSubmit = e => {
    e.preventDefault();

    // Confirm passwords match !!

    register({
      email: info.email,
      username: info.username,
      password: info.password
    })
      .then(res => {
        setInfo({ email: "", username: "", password: "", confirmPassword: "" });
        setSuccessAlert(true);
      })
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
      <div style={{ maxWidth: 400 }}>
        <p className="white-txt txt-lg">Register</p>
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
            Account created, <a href="/login">login</a>!
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

export default RegisterPage;
