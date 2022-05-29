import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { SettingsContext } from "../contexts/SettingsContext";

const MuteButton = () => {
  const { soundOn, setSoundOn } = React.useContext(SettingsContext);
  console.log("mutebutton soundon", soundOn);
  return (
    <IconButton
      aria-label="volume on or off"
      variant="ghost"
      icon={soundOn === true ? <FaVolumeUp /> : <FaVolumeMute />}
      onClick={() => setSoundOn((mute) => !mute)}
    />
  );
};

export default MuteButton;
