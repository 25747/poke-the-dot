import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import { SoundsProvider } from "./contexts/SoundsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SettingsProvider>
        <SoundsProvider>
          <App />
        </SoundsProvider>
      </SettingsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
