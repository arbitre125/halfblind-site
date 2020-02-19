import React from "react";
import { Card } from "react-bootstrap";

const GameInfo = props => {
  return (
    <Card
      style={{
        float: "right",
        top: props.size / 2 - props.size / 8,
        width: 300,
        height: 160,
        backgroundColor: "#343a40"
      }}
    >
      <Card.Body style={{ padding: 10 }}>
        <table>
          <tr className="white-txt txt-md">
            <td width="200">M. Carlsen</td>
            <td>0:00.0</td>
          </tr>
          <tr className="grey-txt txt-xs">
            <td>2863</td>
          </tr>
          <br />
          <tr className="white-txt txt-md">
            <td width="200">bdchap</td>
            <td>0:01.2</td>
          </tr>
          <tr className="grey-txt txt-xs">
            <td>1812</td>
          </tr>
        </table>
      </Card.Body>
    </Card>
  );
};

export default GameInfo;
