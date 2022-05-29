import React from "react";

const soundKey = "pokeSoundOn";

const SettingsContext = React.createContext();

const SettingsContextProvider = ({ children }) => {
  const [soundOn, setSoundOn] = React.useState(() => {
    if (window === "undefined") {
      return false;
    }

    const lsSound = JSON.parse(window.localStorage.getItem(soundKey));
    if (lsSound === null) {
      window.localStorage.setItem(soundKey, false);
      console.log("soundKey doesnt exist");
      return false;
    }
    console.log("lssound", lsSound);
    return !!lsSound; //in case it's not a bool, send back a bool;
  });

  React.useEffect(() => {
    if (window === "undefined") {
      //no op
    } else {
      window.localStorage.setItem(soundKey, soundOn);
    }
  }, [soundOn]);

  return (
    <SettingsContext.Provider value={{ soundOn, setSoundOn }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextProvider };
