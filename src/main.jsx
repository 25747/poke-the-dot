import * as React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { SoundsProvider } from "./contexts/SoundsContext";
import { GameStateProvider } from "./contexts/GameStateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SoundsProvider>
        <GameStateProvider>
          <App />
        </GameStateProvider>
      </SoundsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
