import { Circle, Square, Text } from "@chakra-ui/react";
import ModalWindow from "./ModalWindow";

const PokeButton = ({ buttonTop = 0, buttonLeft = 0, onPoke, count = 0 }) => {
  return (
    <>
      <Circle
        as="button"
        onClick={onPoke}
        position="absolute"
        top={buttonTop}
        left={buttonLeft}
        size="75px"
        bg="orange.400"
        style={{ touchAction: "none" }}
      >
        <Text fontSize="25px" color="white" style={{ userSelect: "none" }}>
          {count}
        </Text>
      </Circle>
    </>
  );
};

export default PokeButton;
