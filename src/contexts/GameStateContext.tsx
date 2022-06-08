import * as React from "react";
import { Dispatch } from "react";
import useInterval from "../hooks/useInterval";
import { SoundsContext } from "./SoundsContext";

interface GameStateInterface {
  count: number,
  setCount: Dispatch<React.SetStateAction<number>>,
  countdown: number,
  setCountdown: Dispatch<React.SetStateAction<number>>,
  isRunning: boolean,
  setIsRunning: Dispatch<React.SetStateAction<boolean>>,
  countdownTime: number,
  dotSize: number,
}

type Props = {
  children?: React.ReactNode
};

const GameStateContext = React.createContext<GameStateInterface>({} as GameStateInterface);

const countdownTime = 15; //how long the game lasts - in seconds
const dotSize = 75; //how big the pokebutton should be

const GameStateProvider: React.FC<Props> = ({ children }) => {
  const { soundEnabled, playCheer, playBell } =
    React.useContext(SoundsContext);
  const [count, setCount] = React.useState<number>(0);
  const [countdown, setCountdown] = React.useState<number>(countdownTime);
  const [isRunning, setIsRunning] = React.useState<boolean>(false);

  useInterval(
    () => {
      if (countdown > 1) {
        setCountdown((cd) => cd - 1);
      } else {
        setCountdown(0);
        setIsRunning(false);
      }
    },
    isRunning ? (1000) : (null)
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
