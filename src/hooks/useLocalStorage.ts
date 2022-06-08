import * as React from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    if (window === undefined) {
      //test if in browser
      return initialValue;
    }

    try {
      const lsValue = window.localStorage.getItem(key);
      return lsValue ? JSON.parse(lsValue) : initialValue;
      //return local storage value if exists, otherwise initial
    } catch (error) {
      console.log(error);
      return initialValue;
      //return initial value if there is some error
    }
  });

  //return different setValue function, that also persists to localstorage
  const setValue = (value: any) => {
    try {
      //check if value is a function, like: setState((current) => !current)
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // save to state, then save to storage
      if (window !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
