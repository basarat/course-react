import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('Submit to validate');

  const onSubmit = () => {
    if (!value) {
      setMessage('Please enter a value');
    } else {
      setMessage('Validated');
    }
  };

  return (
    <div className={styles.root}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p className={styles.message}>{message}</p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}