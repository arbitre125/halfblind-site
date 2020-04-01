import React from "react";
import { connect } from "react-redux";
// import Clock from "./Clock";
import { Card } from "react-bootstrap";

const GameInfo = ({ perspectiveWhite }) => {
  // Hardcoded for offline
  const whitePlayer = { username: "Player 1", rating: "No Rating" };
  const blackPlayer = { username: "Player 2", rating: "No Rating" };

  return (
    <Card
      className="secondary"
      style={{
        float: "right",
        width: 220,
        height: 160
      }}
    >
      <Card.Body style={{ padding: 10 }}>
        <table>
          <tbody>
            <tr className="white-txt txt-sm-md">
              <td width="200">
                {perspectiveWhite ? blackPlayer.username : whitePlayer.username}
              </td>
              <td className="txt-md">0:00.0</td>
            </tr>
            <tr className="grey-txt txt-xs">
              <td style={{ position: "relative", top: -5 }}>
                {perspectiveWhite ? blackPlayer.rating : whitePlayer.rating}
              </td>
            </tr>
            <tr>
              <td>
                <br />
              </td>
            </tr>
            <tr className="white-txt txt-sm-md">
              <td width="200">
                {perspectiveWhite ? whitePlayer.username : blackPlayer.username}
              </td>
              <td className="txt-md">0:00.0</td>
            </tr>
            <tr className="grey-txt txt-xs">
              <td style={{ position: "relative", top: -5 }}>
                {perspectiveWhite ? whitePlayer.rating : blackPlayer.rating}
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    perspectiveWhite: state.game.perspectiveWhite
  };
};

export default connect(mapStateToProps)(GameInfo);
