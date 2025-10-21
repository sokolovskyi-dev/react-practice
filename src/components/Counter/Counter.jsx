import { useState, useEffect } from "react";

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevState) => prevState + 1);
  };
  const handleCounterBIncrement = () => {
    setCounterB((prevState) => prevState + 1);
  };

  useEffect(() => {
    // console.log("Запускается UseEffect");
    const totalClicks = counterA + counterB;

    document.title = `Всего кликнули ${totalClicks}  раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули counterA {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}
