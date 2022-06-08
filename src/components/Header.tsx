import { HStack, Text } from "@chakra-ui/react";
import * as React from "react";
import { GameStateContext } from "../contexts/GameStateContext";
import MuteButton from "./MuteButton";

const Header = () => {
  const { countdown } = React.useContext(GameStateContext);
  return (
    <HStack
      position="relative"
      justify="center"
      w="100%"
      h="5%"
      bgColor="orange.100"
      spacing={8}
      borderBottomWidth="1px"
      borderColor="orange.600"
    >
      <Text fontSize="18px">Poke the Dot</Text>
      <Text fontSize="18px">Time Left: {countdown}</Text>
      <MuteButton />
    </HStack>
  );
};

export default Header;
