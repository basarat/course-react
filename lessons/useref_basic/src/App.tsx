import styles from './App.module.css';
import { useState, useRef } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('Submit to validate');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (!value) {
      setMessage('Please enter a value');
      inputRef.current?.focus();
    } else {
      setMessage('Validated');
    }
  };

  return (
    <div className={styles.root}>
      <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <p className={styles.message}>{message}</p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}