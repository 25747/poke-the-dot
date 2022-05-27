import { HStack, Text } from "@chakra-ui/react";

const Header = ({ countdown = 0 }) => {
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
    </HStack>
  );
};

export default Header;
