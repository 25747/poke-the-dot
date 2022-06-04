import * as React from "react";
import useInterval from "../hooks/useInterval";
import { SoundsContext } from "./SoundsContext";

const GameStateContext = React.createContext();

const countdownTime = 15; //how long the game lasts - in seconds
const dotSize = 75; //how big the pokebutton should be

const GameStateProvider = ({ children }) => {
  const { soundEnabled, playCheer, playBell, setBubblePlayback } =
    React.useContext(SoundsContext);
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
  ); //if the game is running, decrement counter every 1,000 ms

  React.useEffect(() => {
    if (!isRunning) {
      if (count > 0 && soundEnabled) {
        playCheer();
      }
    } else if (soundEnabled) playBell();
  }, [isRunning]);
  //thought it was simplest to just control the begin/end sounds here, since they are based on gamestate

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
