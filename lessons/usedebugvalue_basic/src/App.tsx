import { useState } from 'react';
import { Person, usePersonProps } from './Person';

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  const personProps = usePersonProps();

  return (
    <>
      <div>Count {count}</div>
      <div>
        <button onClick={dec}>➖</button> <button onClick={inc}>➕</button>
      </div>

      <Person {...personProps} />
    </>
  );
}
