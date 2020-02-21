import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <div
      className="center-horiz secondary"
      style={{
        padding: 60,
        paddingTop: 20
      }}
    >
      <div style={{ maxWidth: 400 }}>
        <p className="white-txt txt-lg">Register</p>
        <Form className="white-txt txt-sm-md">
          <Form.Group controlId="email">
            <Form.Label style={{ float: "left" }}>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="username">
            <Form.Label style={{ float: "left" }}>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label style={{ float: "left" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label style={{ float: "left" }}>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Button
            className="dark-btn"
            variant="outline-light"
            style={{ marginTop: 10 }}
          >
            Register
          </Button>
        </Form>
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
