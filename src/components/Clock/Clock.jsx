import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log("it is interval each 1000ms" + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Before unmount");
      clearInterval(intervalId.current);
      //   stop();
    };
  }, []);

  function stop() {
    console.log("Stopping interval", intervalId.current);
    clearInterval(intervalId.current);
  }

  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
