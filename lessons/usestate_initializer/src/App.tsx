import { useState } from 'react';

export default function App() {
  console.log('render');
  const initial = () => {
    console.log('initial render');
    return +(window.localStorage.getItem('count') ?? 0)
  };
  const [count, setCount] = useState(initial);

  function inc() {
    setCount(count => {
      const next = count + 1;
      window.localStorage.setItem('count', next.toString());
      return next;
    });
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
    </>
  );
}