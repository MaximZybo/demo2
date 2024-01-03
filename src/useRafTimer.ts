import {useEffect, useRef, useState} from 'react';

export function useRafTimer(timerSec: number) {
  const [timer, setTimer] = useState(0);

  let prevDate = Date.now();
  let prevAF: number;

  const print = (time: number) => {
    const currentDate = Date.now();

    if (currentDate - prevDate >= 1000) {
      prevDate = currentDate;
      setTimer(prev => prev + 1);
      if (prevAF) {
        cancelAnimationFrame(prevAF);
      }
    }
    prevAF = requestAnimationFrame(print);
  };

  return {timer, print};
}
