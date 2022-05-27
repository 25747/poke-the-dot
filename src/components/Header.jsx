import { HStack, IconButton, Text } from "@chakra-ui/react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import MuteButton from "./MuteButton";

const Header = ({ countdown = 0, isMute = false, setIsMute }) => {
  return (
    <HStack
      position="relative"
      justify="center"
      w="100%"
      h="5%"
      bgColor="orange.100"
      spacing={8}
    >
      <Text fontSize="18px">Poke the Dot</Text>
      <Text fontSize="18px">Time Left: {countdown}</Text>
      <MuteButton isMute={isMute} setIsMute={setIsMute} />
    </HStack>
  );
};

export default Header;
