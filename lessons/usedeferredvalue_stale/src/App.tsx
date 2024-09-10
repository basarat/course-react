import React, { useDeferredValue, useState } from 'react';
import { Products } from './Products';

function App() {
  const [value, setValue] = useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const deferredValue = useDeferredValue(value);
  // focus(1:1)
  const isStale = deferredValue !== value;

  // focus(4:4)
  return (
    <div>
      <input
        style={{ color: isStale ? 'dimgray' : 'black' }}
        value={value}
        onChange={handleChange} />
      
      <Products searchTerm={deferredValue} />
    </div>
  );
}

export default App;