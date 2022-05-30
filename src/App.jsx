import * as React from "react";
import {
  Container,
  useDimensions,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import useInterval from "./hooks/useInterval";
import ModalWindow from "./components/ModalWindow";
import Header from "./components/Header";
import GameBody from "./components/GameBody";
import { SoundsContext } from "./contexts/SoundsContext";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const countdownTime = 15; //time in seconds
const dotSize = 75; //size of dot in px

function App() {
  const [buttonTop, setButtonTop] = React.useState(0);
  const [buttonLeft, setButtonLeft] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [countdown, setCountdown] = React.useState(countdownTime);
  const [isRunning, setIsRunning] = React.useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure(); // simple chakra utility for managing modal visibility
  const { playBubble, playCheer, playBell, soundEnabled } =
    React.useContext(SoundsContext);

  //https://chakra-ui.com/docs/styled-system/utility-hooks/use-dimensions
  const dimensionRef = React.useRef(); // ref applied to the <Box/> component
  const dimensions = useDimensions(dimensionRef);

  React.useEffect(() => {
    //when game is first rendered, put dot in the center of its container
    if (dimensions && !isRunning) {
      if (count > 0 && soundEnabled) {
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
    setButtonTop(
      getRandomNumber(0 /* 75 */, dimensions.contentBox.height - dotSize)
    ); //set to a new random location
    setButtonLeft(
      getRandomNumber(0 /* 75 */, dimensions.contentBox.width - dotSize)
    );
    if (soundEnabled) {
      playBell();
    }
    onClose(); //close modal after reset of game state is complete
  };

  const onPoke = () => {
    if (soundEnabled) {
      playBubble();
    }

    if (countdown < 1) {
      // open model to display results and play again
      setIsRunning(false); //stop timer
      onOpen();
    } else {
      setButtonTop(
        getRandomNumber(0 /* 75 */, dimensions.contentBox.height - dotSize)
      );
      setButtonLeft(
        getRandomNumber(0 /* 75 */, dimensions.contentBox.width - dotSize)
      );
      //move dot to a new random location
      setCount((count) => count + 1); //increment the poke counter
    }
  };

  return (
    <>
      <Container centerContent>
        <VStack position="fixed" height="100%" w="100%" maxW="4xl" spacing={0}>
          <Header countdown={countdown} />
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
      />
    </>
  );
}

export default App;
