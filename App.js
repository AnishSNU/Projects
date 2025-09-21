/**
 * App.js
 * Main countdown clock application.
 * - Uses one counter (in seconds).
 * - Handles countdown logic via useEffect.
 */

import { useState, useEffect } from "react";
import Container from "./Container";
import TimerDisplay from "./TimerDisplay";
import ButtonContainer from "./ButtonContainer";

export default function App() {
  const [time, setTime] = useState(0);             // total time in seconds
  const [isRunning, setIsRunning] = useState(false); // countdown state

  // Countdown logic with useEffect
  useEffect(() => {
    let timerId;
    if (isRunning && time > 0) {
      timerId = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning, time]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Container>
        <TimerDisplay time={time} />
        <ButtonContainer
          onStart={() => setIsRunning(true)}
          onStop={() => setIsRunning(false)}
          onReset={() => setTime(0)}
          setTime={setTime}
          isRunning={isRunning}
          time={time}
        />
      </Container>
    </div>
  );
}
