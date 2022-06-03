import { HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import MuteButton from "./MuteButton";

const Header = () => {
  const { countdown } = useContext(GameStateContext);
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
      <MuteButton />
    </HStack>
  );
};

export default Header;
