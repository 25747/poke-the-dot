import * as React from "react";
import useSound from "use-sound";
import useLocalStorage from "../hooks/useLocalStorage";
//@ts-ignore
import bubbleSound from "../sounds/bubble.wav";
//@ts-ignore
import cheerSound  from "../sounds/cheer.wav";
//@ts-ignore
import bellSound from "../sounds/bell.wav";
import { Dispatch } from "react";

interface SoundsInterface {
  playBubble:() => void,
  playCheer:() => void,
  playBell:() => void,
  setBubblePlayback: Dispatch<React.SetStateAction<number>>,
  soundEnabled: boolean,
  setsoundEnabled: Dispatch<React.SetStateAction<boolean>>,
}

type Props = {
  children?: React.ReactNode
};

const soundKey = "pokesoundEnabled";

const SoundsContext = React.createContext<SoundsInterface>({} as SoundsInterface);

const SoundsProvider: React.FC<Props> = ({ children }) => {
  const [soundEnabled, setsoundEnabled] = useLocalStorage(soundKey, false);
  const [bubblePlayback, setBubblePlayback] = React.useState(0.5);
  const [playBubble, { stop: stopBubble }] = useSound(bubbleSound, {
    soundEnabled,
    playbackRate: bubblePlayback,
  });
  const [playCheer, { stop: stopCheer }] = useSound(cheerSound, {
    soundEnabled,
    volume: 0.2,
  });
  const [playBell, { stop: stopBell }] = useSound(bellSound, {
    soundEnabled,
    volume: 0.1,
  });

  // if soundEnabled changed to false, stop sounds immediately
  React.useEffect(() => {
    if (!soundEnabled) {
      stopCheer();
      stopBell();
      stopBubble();
    }
  }, [soundEnabled]);

  return (
    <SoundsContext.Provider
      value={{
        playBubble,
        playCheer,
        playBell,
        setBubblePlayback,
        soundEnabled,
        setsoundEnabled,
      }}
    >
      {children}
    </SoundsContext.Provider>
  );
};

export { SoundsContext, SoundsProvider };
