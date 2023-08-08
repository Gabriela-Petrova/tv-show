import { useEffect, useState } from "react";
import "./Timer.css";

function Timer({ setStopGame, questionNumber }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return setStopGame(true);

    const interval = setInterval(() => {
      setTimer((second) => second - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStopGame, timer]);

  useEffect(() => {
    setTimer(60);
  }, [questionNumber]);

  return timer;
}

export default Timer;
