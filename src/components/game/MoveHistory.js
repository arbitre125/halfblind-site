import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Card, Image } from "react-bootstrap";
import eye from "../../images/logos/half-eye-r-w.png";

const MoveHistory = ({ halfBlind, history, ...props }) => {
  const historyEndRef = useRef(null);

  const scrollToBottom = () => {
    historyEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <Card
      className="secondary"
      style={{
        width: 200,
        maxHeight: props.maxHeight,
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
                    <td style={{ paddingLeft: 8, paddingBottom: 10 }}>
                      {move.san}
                    </td>
                    <td style={{ paddingLeft: 50, paddingBottom: 10 }}>
                      {halfBlind && ind + 1 === history.length - 1 ? (
                        <>
                          {history[ind + 1].san.slice(0, 1).replace("O", "K")}
                          &thinsp;
                          <Image
                            src={eye}
                            width={15}
                            style={{ marginBottom: 5 }}
                          />
                        </>
                      ) : (
                        history[ind + 1].san
                      )}
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
                      <td style={{ paddingLeft: 8, paddingBottom: 10 }}>
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
                    <td style={{ paddingLeft: 8, paddingBottom: 10 }}>
                      {halfBlind ? (
                        <>
                          {move.san.slice(0, 1).replace("O", "K")}&thinsp;
                          <Image
                            src={eye}
                            width={15}
                            style={{ marginBottom: 5 }}
                          />
                        </>
                      ) : (
                        move.san
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
        <div ref={historyEndRef}></div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    halfBlind: state.game.halfBlind,
    history: state.game.history
  };
};

export default connect(mapStateToProps)(MoveHistory);
