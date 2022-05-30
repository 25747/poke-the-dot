import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { SettingsContext } from "../contexts/SettingsContext";

const MuteButton = () => {
  const { soundEnabled, setsoundEnabled } = React.useContext(SettingsContext);
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
