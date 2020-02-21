import React from "react";
import { Card } from "react-bootstrap";

const GameInfo = props => {
  return (
    <Card
      className="secondary"
      style={{
        float: "right",
        top: props.size / 2 - props.size / 8,
        width: 300,
        height: 160
      }}
    >
      <Card.Body style={{ padding: 10 }}>
        <table>
          <tbody>
            <tr className="white-txt txt-md">
              <td width="200">Player 2</td>
              <td>0:00.0</td>
            </tr>
            <tr className="grey-txt txt-xs">
              <td>(No rating)</td>
            </tr>
            <tr>
              <td>
                <br />
              </td>
            </tr>
            <tr className="white-txt txt-md">
              <td width="200">Player 1</td>
              <td>0:00.0</td>
            </tr>
            <tr className="grey-txt txt-xs">
              <td>(No rating)</td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default GameInfo;
