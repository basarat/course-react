import { useState } from 'react';
import { saveInfo } from './api';

export default function App() {
  const [count, setCount] = useState(0);

  async function inc() {
    await saveInfo();
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
    </>
  );
}
