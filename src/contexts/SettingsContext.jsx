import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const soundKey = "pokesoundEnabled";

const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [soundEnabled, setsoundEnabled] = useLocalStorage(soundKey, false);

  return (
    <SettingsContext.Provider value={{ soundEnabled, setsoundEnabled }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
