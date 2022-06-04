import * as React from "react";
export default (callback: ()=>void, delay: number | null) => {
  const intervalRef = React.useRef< null | NodeJS.Timeout | number >(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);
      return () => {
        if (intervalRef.current !== null) {
          return clearInterval(intervalRef.current);
      }
      };
    }
  }, [delay]);
  return intervalRef;
};
//inspired by dan abramov's useInterval https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//updated from https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
