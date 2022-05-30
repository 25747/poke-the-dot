import * as React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { SoundsProvider } from "./contexts/SoundsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SoundsProvider>
        <App />
      </SoundsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
