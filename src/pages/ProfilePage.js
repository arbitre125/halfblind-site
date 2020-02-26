import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import decode from "jwt-decode";

const ProfilePage = () => {
  if (localStorage.usertoken) {
    return (
      <div
        className="center-horiz secondary"
        style={{
          height: "100vh",
          padding: 60,
          paddingTop: 40
        }}
      >
        <Row>
          <Col>
            <Table striped bordered variant="dark" style={{ width: 400 }}>
              <tbody>
                <tr>
                  <td>
                    <b style={{ float: "left" }}>Profile</b>
                  </td>
                  <td>{decode(localStorage.usertoken).username}</td>
                </tr>
                <tr>
                  <td>
                    <b style={{ float: "left" }}>Account Created</b>
                  </td>
                  <td>
                    {decode(localStorage.usertoken).date_created.slice(0, 10)}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b style={{ float: "left" }}>Live Rating</b>
                  </td>
                  <td>1200</td>
                </tr>
                <tr>
                  <td>
                    <b style={{ float: "left" }}>Number of Live Games</b>
                  </td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div
        className="center-horiz secondary"
        style={{
          height: "100vh",
          padding: 60,
          paddingTop: 40
        }}
      ></div>
    );
  }
};

export default ProfilePage;
