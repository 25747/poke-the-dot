import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  Container,
  Button,
} from "@chakra-ui/react";
import ModalWindow from "./ModalWindow";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container>
      <p>Hello World</p>
      <Button onClick={onOpen}>Open Modal</Button>
      <ModalWindow isOpen={isOpen} onClose={onClose} />

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>IpsumLoren Holy Cannoli</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Container>
  );
}

export default BasicUsage;
