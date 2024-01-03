import {useEffect, useRef, useState} from 'react';

export const useTimer = (timerSec: number, shouldStart: boolean) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();

  const [timer, setTimer] = useState(timerSec);

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startTimer = () => {
    let timerInit = 0;

    setTimeout(function run() {
      setTimer(prevTimer => {
        timerInit = prevTimer - 1;
        return prevTimer - 1;
      });
      if (timerInit > 0) {
        setTimeout(run, 1000);
      }
    }, 1000);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(timerSec);
    startTimer();
  };

  useEffect(() => {
    if (shouldStart) {
      startTimer();
    }
  }, [shouldStart]);

  useEffect(() => {
    if (timer <= 0) {
      stopTimer();
    }
  }, [timer]);

  return {timer, resetTimer, stopTimer, startTimer, setTimer};
};
