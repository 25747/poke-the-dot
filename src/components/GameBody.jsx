import * as React from "react";
import { Box, useDimensions } from "@chakra-ui/react";
import PokeButton from "./PokeButton";

const GameBody = () => {
  //https://chakra-ui.com/docs/styled-system/utility-hooks/use-dimensions
  const dimensionRef = React.useRef(); // ref applied to the <Box/> component
  const dimensions = useDimensions(dimensionRef);
  return (
    <Box
      ref={dimensionRef}
      position="relative"
      w="100%"
      h="95%"
      bgColor="purple.100"
    >
      {dimensions ? ( //only render once dimensions exists
        <PokeButton dimensions={dimensions} />
      ) : null}
    </Box>
  );
};

export default GameBody;
