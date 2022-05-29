import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const soundKey = "pokeSoundOn";

const SettingsContext = React.createContext();

const SettingsContextProvider = ({ children }) => {
  const [soundOn, setSoundOn] = useLocalStorage(soundKey, false);

  return (
    <SettingsContext.Provider value={{ soundOn, setSoundOn }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextProvider };
