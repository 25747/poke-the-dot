import * as React from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GameStateContext } from "../contexts/GameStateContext";
import { SoundsContext } from "../contexts/SoundsContext";
import MuteButton from "./MuteButton";

const ModalWindow = () => {
  const { isOpen, onClose, onOpen } = useDisclosure(); // simple chakra utility for managing modal visibility
  const { playCheer, playBell, soundEnabled } = React.useContext(SoundsContext);
  const {
    count,
    setCount,
    setCountdown,
    isRunning,
    setIsRunning,
    countdownTime,
  } = React.useContext(GameStateContext);

  React.useEffect(() => {
    if (!isRunning) {
      if (count > 0 && soundEnabled) {
        playCheer();
      }
      onOpen();
    } else if (soundEnabled) playBell();
  }, [isRunning]);

  const onModalClose = () => {
    //when modal closes, restart the game at initial conditions
    setCount(0);
    setCountdown(countdownTime);
    setIsRunning(true);
    if (soundEnabled) {
      playBell();
    }
    onClose(); //close modal after reset of game state is complete
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="space-between">
          {count === 0 ? "Ready to Play?" : "Play Again!"}
          <MuteButton />
        </ModalHeader>
        <ModalBody>
          {count === 0 ? ( //if count===0, assume starting the game fresh
            <>
              <Text align="center">
                {`How many times can you poke the dot in ${countdownTime} seconds?`}
              </Text>
              <br />
              <Text align="center">
                Press <strong>GO</strong> to Play
              </Text>
            </>
          ) : (
            //if count !=0, assume 'play again'
            <>
              <Text align="center">
                You poked the dot <strong>{count}</strong> times!
              </Text>
              <br />
              <Text align="center">
                Press <strong>GO</strong> to Play Again!
              </Text>
            </>
          )}
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button colorScheme="green" onClick={onModalClose}>
            GO
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
