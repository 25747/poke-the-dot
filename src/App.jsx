import { useEffect, useRef, useState } from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Spacer,
  Square,
  Text,
  useDimensions,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import PokeButton from "./components/PokeButton";
import useInterval from "./hooks/useInterval";
import ModalWindow from "./components/ModalWindow";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const countdownTime = 30;

function App() {
  const dimensionRef = useRef();
  const dimensions = useDimensions(dimensionRef);
  const [buttonTop, setButtonTop] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(0);
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(countdownTime);
  const [isRunning, setIsRunning] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    //when game is first rendered, put box in the center of its container
    if (dimensions && !isRunning) {
      onOpen();
      const centerTop = dimensions.contentBox.height / 2 - 37.5; //75px box, half to center
      const centerLeft = dimensions.contentBox.width / 2 - 37.5; //75px box, half to center
      setButtonTop(centerTop);
      setButtonLeft(centerLeft);

      console.log(dimensions);
    }
  }, [dimensions, isRunning]); //re-run if dimensions change, or if isRunning changes.
  //note that dimensions value will not change as i am not listening for window resize

  useInterval(
    () => {
      if (countdown > 1) {
        setCountdown((cd) => cd - 1);
      } else {
        setCountdown(0);
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null
  );

  const onModalClose = () => {
    setCount(0);
    setCountdown(countdownTime);
    setIsRunning(true);
    setButtonTop(getRandomNumber(75, dimensions.contentBox.height - 75));
    setButtonLeft(getRandomNumber(75, dimensions.contentBox.width - 75));
    onClose();
  };

  const onPoke = () => {
    // if (countdown === countdownTime && !isRunning) {
    //   setIsRunning(true);
    // }

    if (countdown < 1) {
      setIsRunning(false);
      onOpen();
    } else {
      setButtonTop(getRandomNumber(75, dimensions.contentBox.height - 75));
      setButtonLeft(getRandomNumber(75, dimensions.contentBox.width - 75));

      setCount((count) => count + 1);
    }
  };

  return (
    <>
      <Container centerContent>
        <VStack
          as="Box"
          border="5px"
          borderColor="red.500"
          position="fixed"
          height="100%"
          w="100%"
          maxW="4xl"
          spacing={0}
        >
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
              />
            ) : null}
          </Box>
        </VStack>
      </Container>
      <ModalWindow isOpen={isOpen} onModalClose={onModalClose} count={count} />
    </>
  );
}

export default App;
