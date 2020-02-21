import React from "react";
import { Card } from "react-bootstrap";

const MoveHistory = props => {
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
        {props.moveHistory.length % 2 === 0 ? (
          <table>
            <tbody>
              {props.moveHistory.map((move, ind) =>
                ind % 2 === 0 ? (
                  <tr key={ind}>
                    <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                    <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                      {move}
                    </td>
                    <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                      {props.moveHistory[ind + 1]}
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        ) : (
          <table>
            <tbody>
              {props.moveHistory.map((move, ind) =>
                ind !== props.moveHistory.length - 1 ? (
                  ind % 2 === 0 ? (
                    <tr key={ind}>
                      <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                      <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                        {move}
                      </td>
                      <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                        {props.moveHistory[ind + 1]}
                      </td>
                    </tr>
                  ) : null
                ) : (
                  <tr key={ind}>
                    <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                    <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                      {move}
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

export default MoveHistory;
