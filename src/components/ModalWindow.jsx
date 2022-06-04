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
  Spacer,
  Box,
} from "@chakra-ui/react";
import { GameStateContext } from "../contexts/GameStateContext";
import MuteButton from "./MuteButton";

const ModalWindow = () => {
  const {
    count,
    setCount,
    setCountdown,
    isRunning,
    setIsRunning,
    countdownTime,
  } = React.useContext(GameStateContext);

  const onModalClose = () => {
    setCount(0);
    setCountdown(countdownTime);
    setIsRunning(true);
  }; //restart the game at initial conditions

  return (
    <Modal isOpen={!isRunning}>
      <ModalOverlay />
      <ModalContent bg="gray.200">
        <ModalHeader
          display="flex"
          align="center"
          justifyContent="space-around"
        >
          <Box w="40px" />
          <Text>{count === 0 ? "Ready to Play?" : "Play Again!"}</Text>
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
