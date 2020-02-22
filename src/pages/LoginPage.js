import React from "react";
import { Form, Button } from "react-bootstrap";

const LoginPage = () => {
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
        <p className="white-txt txt-lg">Login</p>
        <Form className="white-txt txt-sm-md">
          <Form.Group controlId="username">
            <Form.Label style={{ float: "left" }}>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label style={{ float: "left" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Button
            className="dark-btn"
            variant="outline-light"
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
