import { Box } from "@chakra-ui/react";
import PokeButton from "./PokeButton";

const GameBody = ({
  dimensionRef,
  buttonTop,
  buttonLeft,
  onPoke,
  count,
  dotSize,
}) => {
  return (
    <Box
      ref={dimensionRef}
      position="relative"
      w="100%"
      h="95%"
      bgColor="purple.100"
    >
      {buttonTop > 0 && buttonLeft > 0 ? ( //only render once dimensions are found and center values set
        <PokeButton
          buttonTop={buttonTop}
          buttonLeft={buttonLeft}
          onPoke={onPoke}
          count={count}
          dotSize={dotSize}
        />
      ) : null}
    </Box>
  );
};

export default GameBody;
