import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, splitTimer, active, times } =
    useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="slpit-timer">
          {times.map((time, index) => (
            <div className="timer__display" key={index}>
              <p
                style={{
                  fontSize: "2.5rem",
                  paddingTop: "10px",
                }}
              >
                {index < 9
                  ? `0${index + 1}. ${formatTime(time)}`
                  : `${index + 1}. ${formatTime(time)}`}
              </p>
            </div>
          ))}
        </div>
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
