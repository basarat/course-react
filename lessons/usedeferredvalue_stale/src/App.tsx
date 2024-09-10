import { useDeferredValue, useState } from 'react';
import { Products } from './Products';

export default function App() {
  const [value, setValue] = useState('');

  const deferredValue = useDeferredValue(value);
  // focus(1:1)
  const isStale = deferredValue !== value;

  // focus(4:4)
  return (
    <>
      <input
        style={isStale ? { color: 'dimgray', backgroundColor: '#eee' } : undefined}
        value={value}
        onChange={e => setValue(e.target.value)} />
      
      <Products searchTerm={deferredValue} />
    </>
  );
}
