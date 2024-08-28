import { useState } from 'react';

type CounterProps = {
  count: number,
  inc: () => void,
};

export function Counter({ count, inc }: CounterProps) {
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={inc}>+</button>
    </>
  );
}

export function useCounter(): CounterProps {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count => count + 1);

  return { count, inc };
}
