import * as React from "react";
import { Circle, Text } from "@chakra-ui/react";
import { GameStateContext } from "../contexts/GameStateContext";
import { SoundsContext } from "../contexts/SoundsContext";
import getRandomNumber from "../utils/getRandomNumber";

const PokeButton = ({ dimensions }) => {
  const [buttonTop, setButtonTop] = React.useState(0);
  const [buttonLeft, setButtonLeft] = React.useState(0);
  const { count, setCount, countdown, isRunning, setIsRunning, dotSize } =
    React.useContext(GameStateContext);

  const { playBubble, setBubblePlayback, soundEnabled } =
    React.useContext(SoundsContext);

  React.useEffect(() => {
    if (dimensions && !isRunning) {
      //when the game stops running, or first starts, set button location to center
      setButtonTop((dimensions.contentBox.height - dotSize) / 2);
      setButtonLeft((dimensions.contentBox.width - dotSize) / 2);
      setBubblePlayback(0.5); //reset bubble playback speed. hardcoded for now
    } else if (dimensions && isRunning) {
      //when game starts, immediately move button to random location
      setButtonTop(getRandomNumber(0, dimensions.contentBox.height - dotSize));
      setButtonLeft(getRandomNumber(0, dimensions.contentBox.width - dotSize));
    }
  }, [dimensions, isRunning]);

  const onPoke = () => {
    if (soundEnabled) {
      playBubble();
      setBubblePlayback((pb) => pb + 0.01);
      //increase pitch slightly
    }
    if (countdown < 1) {
      setIsRunning(false); //stop timer
    } else {
      setButtonTop(getRandomNumber(0, dimensions.contentBox.height - dotSize));
      setButtonLeft(getRandomNumber(0, dimensions.contentBox.width - dotSize));
      //move dot to a new random location
      setCount((count) => count + 1); //increment the poke counter
    }
  };

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
      <Text fontSize="25px" color="white" userSelect="none">
        {count}
      </Text>
    </Circle>
  );
};

export default PokeButton;
