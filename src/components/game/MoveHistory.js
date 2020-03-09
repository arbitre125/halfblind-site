import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

const MoveHistory = ({ history, ...props }) => {
  return (
    <Card
      className="secondary"
      style={{
        width: 250,
        maxHeight: props.size / 2,
        overflowY: "scroll"
      }}
    >
      <Card.Body className="grey-txt txt-sm" style={{ marginTop: -10 }}>
        {history.length % 2 === 0 ? (
          <table>
            <tbody>
              {history.map((move, ind) =>
                ind % 2 === 0 ? (
                  <tr key={ind}>
                    <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                    <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                      {move.san}
                    </td>
                    <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                      {history[ind + 1].san}
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        ) : (
          <table>
            <tbody>
              {history.map((move, ind) =>
                ind !== history.length - 1 ? (
                  ind % 2 === 0 ? (
                    <tr key={ind}>
                      <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                      <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                        {move.san}
                      </td>
                      <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                        {history[ind + 1].san}
                      </td>
                    </tr>
                  ) : null
                ) : (
                  <tr key={ind}>
                    <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                    <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                      {move.san}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    history: state.game.history
  };
};

export default connect(mapStateToProps)(MoveHistory);
