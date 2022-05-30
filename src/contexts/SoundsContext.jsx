import * as React from "react";
import useSound from "use-sound";
import bubbleSound from "../sounds/bubble.wav";
import cheerSound from "../sounds/cheer.wav";
import bellSound from "../sounds/bell.wav";
import { SettingsContext } from "./SettingsContext";

const SoundsContext = React.createContext();

const SoundsProvider = ({ children }) => {
  const [bubblePlayback, setBubblePlayback] = React.useState(0.75);
  const { soundEnabled } = React.useContext(SettingsContext);
  const [playBubble, { stop: stopBubble }] = useSound(bubbleSound, {
    soundEnabled,
    playbackRate: bubblePlayback,
  });
  const [playCheer, { stop: stopCheer }] = useSound(cheerSound, {
    soundEnabled,
    volume: 0.5,
  });
  const [playBell, { stop: stopBell }] = useSound(bellSound, {
    soundEnabled,
    volume: 0.5,
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
      value={{ playBubble, playCheer, playBell, setBubblePlayback }}
    >
      {children}
    </SoundsContext.Provider>
  );
};

export { SoundsContext, SoundsProvider };
