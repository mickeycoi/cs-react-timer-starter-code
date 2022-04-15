import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [times, setTimes] = useState([]);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    setTimes([]);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const splitTimer = () => {
    if (isStart.current) {
      setTimes([...times, time]);
    }
  };

  return { time, startTimer, stopTimer, resetTimer, splitTimer, active, times };
};
export default useTimer;
