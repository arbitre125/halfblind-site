import React from "react";
// import Clock from "./Clock";
import { Card } from "react-bootstrap";

const GameInfo = props => {
  return (
    <Card
      className="secondary"
      style={{
        float: "right",
        width: 250,
        height: 160
      }}
    >
      <Card.Body style={{ padding: 10 }}>
        <table>
          <tbody>
            <tr className="white-txt txt-sm-md">
              <td width="200">Player 2</td>
              <td className="txt-md">0:00.0</td>
            </tr>
            <tr className="grey-txt txt-xs">
              <td style={{ position: "relative", top: -5 }}>(No rating)</td>
            </tr>
            <tr>
              <td>
                <br />
              </td>
            </tr>
            <tr className="white-txt txt-sm-md">
              <td width="200">Player 1</td>
              <td className="txt-md">0:00.0</td>
            </tr>
            <tr className="grey-txt txt-xs">
              <td style={{ position: "relative", top: -5 }}>(No rating)</td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default GameInfo;
