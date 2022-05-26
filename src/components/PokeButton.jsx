import { Circle, Text } from "@chakra-ui/react";

const PokeButton = ({
  buttonTop = 0,
  buttonLeft = 0,
  onPoke,
  count = 0,
  dotSize = 75,
}) => {
  return (
    <Circle
      as="button"
      onClick={onPoke}
      position="absolute"
      top={buttonTop}
      left={buttonLeft}
      size={`${dotSize}px`}
      bg="orange.400"
      style={{ touchAction: "none" }}
    >
      <Text fontSize="25px" color="white" style={{ userSelect: "none" }}>
        {count}
      </Text>
    </Circle>
  );
};

export default PokeButton;
