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
import useSound from "use-sound";
import PokeButton from "./components/PokeButton";
import useInterval from "./hooks/useInterval";
import ModalWindow from "./components/ModalWindow";
import bubbleSound from "./sounds/bubble.wav"; //https://freesound.org/people/Ranner/sounds/487532/
import cheerSound from "./sounds/cheer.wav"; //https://freesound.org/people/Tomlija/sounds/99634/
import bellSound from "./sounds/bell.wav"; //https://freesound.org/people/Herkules92/sounds/520998/
import Header from "./components/Header";
import GameBody from "./components/GameBody";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const countdownTime = 15; //time in seconds
const dotSize = 75; //size of dot in px

function App() {
  const [buttonTop, setButtonTop] = useState(0);
  const [buttonLeft, setButtonLeft] = useState(0);
  const [count, setCount] = useState(0);
  const [countdown, setCountdown] = useState(countdownTime);
  const [isRunning, setIsRunning] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure(); // simple chakra utility for managing modal visibility
  const [isMute, setIsMute] = useState(false);
  const [playBubble] = useSound(bubbleSound);
  const [playCheer] = useSound(cheerSound, { volume: 0.5 });
  const [playBell] = useSound(bellSound, { volume: 0.5 });

  //https://chakra-ui.com/docs/styled-system/utility-hooks/use-dimensions
  const dimensionRef = useRef(); // ref applied to the <Box/> component
  const dimensions = useDimensions(dimensionRef);

  useEffect(() => {
    //when game is first rendered, put dot in the center of its container
    if (dimensions && !isRunning) {
      if (count > 0 && !isMute) {
        playCheer();
      }
      onOpen();
      const centerTop = dimensions.contentBox.height / 2 - dotSize / 2; //subtract half of dot size to maintain center
      const centerLeft = dimensions.contentBox.width / 2 - dotSize / 2;
      setButtonTop(centerTop);
      setButtonLeft(centerLeft);
    }
  }, [dimensions, isRunning]); //re-run if dimensions change, or if isRunning changes.
  //note that dimensions value is not expected to change as i am not listening for window resize

  useInterval(
    //inspired by dan abramov - see implementation
    () => {
      if (countdown > 1) {
        setCountdown((cd) => cd - 1);
      } else {
        setCountdown(0);
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null
  ); //every second decrement the countdown timer

  const onModalClose = () => {
    //when modal closes, restart the game at initial conditions
    setCount(0);
    setCountdown(countdownTime);
    setIsRunning(true);
    setButtonTop(getRandomNumber(75, dimensions.contentBox.height - 75)); //set to a new random location
    setButtonLeft(getRandomNumber(75, dimensions.contentBox.width - 75));
    if (!isMute) {
      playBell();
    }
    onClose(); //close modal after reset of game state is complete
  };

  const onPoke = () => {
    if (!isMute) {
      playBubble();
    }

    if (countdown < 1) {
      // open model to display results and play again
      setIsRunning(false); //stop timer
      onOpen();
    } else {
      setButtonTop(getRandomNumber(75, dimensions.contentBox.height - 75));
      setButtonLeft(getRandomNumber(75, dimensions.contentBox.width - 75));
      //move dot to a new random location
      setCount((count) => count + 1); //increment the poke counter
    }
  };

  return (
    <>
      <Container centerContent>
        <VStack
          border="5px"
          borderColor="red.500"
          position="fixed"
          height="100%"
          w="100%"
          maxW="4xl"
          spacing={0}
        >
          <Header countdown={countdown} isMute={isMute} setIsMute={setIsMute} />
          <GameBody
            buttonTop={buttonTop}
            buttonLeft={buttonLeft}
            onPoke={onPoke}
            count={count}
            dotSize={dotSize}
            dimensionRef={dimensionRef}
          />
        </VStack>
      </Container>
      <ModalWindow
        isOpen={isOpen}
        onModalClose={onModalClose}
        count={count}
        countdownTime={countdownTime}
        isMute={isMute}
        setIsMute={setIsMute}
      />
    </>
  );
}

export default App;
