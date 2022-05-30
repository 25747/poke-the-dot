import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { SettingsContextProvider } from "./contexts/SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
