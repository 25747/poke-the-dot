import * as React from "react";
import { Container, VStack } from "@chakra-ui/react";
import ModalWindow from "./components/ModalWindow";
import Header from "./components/Header";
import GameBody from "./components/GameBody";

function App() {
  return (
    <>
      <Container centerContent overflow="hidden">
        <VStack
          position="fixed"
          height="100%"
          w="100%"
          maxW="4xl"
          spacing={0}
          borderWidth="1px"
          borderColor="purple.700"
        >
          <Header />
          <GameBody />
        </VStack>
      </Container>
      <ModalWindow />
    </>
  );
}

export default App;
