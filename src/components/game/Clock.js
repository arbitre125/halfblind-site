import React, { useState, useEffect } from "react";

const Clock = () => {
  const [seconds, setSeconds] = useState(100);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const secondsToTimeStr = totalSec => {
    const sec = totalSec % 60;
    const secStr = sec < 10 ? `0${sec.toString()}` : sec.toString();
    const min = (totalSec - sec) / 60;
    const minStr = min < 10 ? `0${min.toString()}` : min.toString();
    return `${minStr}:${secStr}`;
  };

  return (
    <p className="white-txt txt-md" onClick={() => setIsActive(!isActive)}>
      {secondsToTimeStr(seconds)}
    </p>
  );
};

export default Clock;
