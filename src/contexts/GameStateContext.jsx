import * as React from "react";
import useInterval from "../hooks/useInterval";

const GameStateContext = React.createContext();

const GameStateProvider = ({ children }) => {
  const countdownTime = 15; //how long the game lasts - in seconds
  const dotSize = 75; //how big the pokebutton should be
  const [count, setCount] = React.useState(0);
  const [countdown, setCountdown] = React.useState(countdownTime);
  const [isRunning, setIsRunning] = React.useState(false);

  useInterval(
    () => {
      if (countdown > 1) {
        setCountdown((cd) => cd - 1);
      } else {
        setCountdown(0);
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null
  ); //every second decrement the countdown timer

  return (
    <GameStateContext.Provider
      value={{
        count,
        setCount,
        countdown,
        setCountdown,
        isRunning,
        setIsRunning,
        countdownTime,
        dotSize,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export { GameStateContext, GameStateProvider };
