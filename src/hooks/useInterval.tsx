// Libraries
import {useEffect, useLayoutEffect, useRef} from 'react';

/**
 * Hook function to help handle repeated task
 * @param callback callback function to be executed with the delay interval
 * @param delay number of miliseconds delay
 */
function useInterval(callback: () => any, delay: number): void {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
