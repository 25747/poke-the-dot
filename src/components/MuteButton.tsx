import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { SoundsContext } from "../contexts/SoundsContext";

const MuteButton = () => {
  const { soundEnabled, setsoundEnabled } = React.useContext(SoundsContext);
  return (
    <IconButton
      aria-label="volume on or off"
      variant="ghost"
      icon={soundEnabled === true ? <FaVolumeUp /> : <FaVolumeMute />}
      onClick={() => setsoundEnabled((mute) => !mute)}
    />
  );
};

export default MuteButton;
