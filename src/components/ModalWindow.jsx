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
} from "@chakra-ui/react";
import MuteButton from "./MuteButton";

const ModalWindow = ({
  count = 0,
  onModalClose = () => {},
  isOpen = true,
  countdownTime = 30,
  isMute = false,
  setIsMute,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="space-between">
          {count === 0 ? "Ready to Play?" : "Play Again!"}
          <MuteButton isMute={isMute} setIsMute={setIsMute} />
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
