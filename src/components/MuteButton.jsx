import { IconButton } from "@chakra-ui/react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const MuteButton = ({ isMute = false, setIsMute }) => {
  return (
    <IconButton
      aria-label="volume on or off"
      variant="ghost"
      icon={isMute ? <FaVolumeMute /> : <FaVolumeUp />}
      onClick={() => setIsMute((mute) => !mute)}
    />
  );
};

export default MuteButton;
