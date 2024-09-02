import styles from './App.module.css';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);

  // focus(1:1)
  const intervalRef = useRef<number | null>(null);

  const startInterval = () => {
    // focus(1:3)
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  const stopInterval = () => {
    // focus(1:3)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  useEffect(() => {
    // focus(1:1)
    return stopInterval;
  }, []);

  // focus(3:4)
  return (
    <div className={styles.vertical}>
      <button onClick={startInterval}>Start</button>
      <button onClick={stopInterval}>Stop</button>
      <div>Time: {seconds}s</div>
    </div>
  );
}