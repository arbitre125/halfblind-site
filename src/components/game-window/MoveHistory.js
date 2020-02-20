import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

const MoveHistory = props => {
  const [moveHistory, setMoveHistory] = useState([]);

  const readBoard = async id => {
    await axios
      .get(`/game/${id}`)
      .then(response => setMoveHistory(response.data.history))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    readBoard(123);
  }, []);

  return (
    <Card
      className="secondary"
      style={{
        width: 250,
        maxHeight: 320,
        overflowY: "scroll"
      }}
    >
      <Card.Body className="grey-txt txt-sm" style={{ marginTop: -10 }}>
        {moveHistory.length % 2 === 0 ? (
          <table>
            {moveHistory.map((move, ind) =>
              ind % 2 === 0 ? (
                <tr>
                  <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                  <td style={{ paddingLeft: 10, paddingBottom: 10 }}>{move}</td>
                  <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                    {moveHistory[ind + 1]}
                  </td>
                </tr>
              ) : null
            )}
          </table>
        ) : (
          <table>
            {moveHistory.map((move, ind) =>
              ind !== moveHistory.length - 1 ? (
                ind % 2 === 0 ? (
                  <tr>
                    <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                    <td style={{ paddingLeft: 10, paddingBottom: 10 }}>
                      {move}
                    </td>
                    <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                      {moveHistory[ind + 1]}
                    </td>
                  </tr>
                ) : null
              ) : (
                <tr>
                  <td style={{ paddingBottom: 10 }}>{ind / 2 + 1}.</td>
                  <td style={{ paddingLeft: 10, paddingBottom: 10 }}>{move}</td>
                </tr>
              )
            )}
          </table>
        )}
      </Card.Body>
    </Card>
  );
};

export default MoveHistory;
