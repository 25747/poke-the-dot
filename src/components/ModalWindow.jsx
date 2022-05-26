import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  useDisclosure,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";

const ModalWindow = ({ count = 0, onModalClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {count === 0 ? "Ready to Play?" : "Play Again!"}
        </ModalHeader>
        <ModalBody>
          {count === 0 ? (
            <>
              <Text align="center">
                How many times can you poke the dot in 30 seconds?
              </Text>
              <br />
              <Text align="center">
                Press <strong>GO</strong> to Play
              </Text>
            </>
          ) : (
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
