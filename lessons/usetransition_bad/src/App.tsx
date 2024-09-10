import { useState } from 'react';
import { searchItems, randomChars, List } from './List';

export default function App() {
  const [value, setValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setValue(value);
    setItems(searchItems(value));
  };

  const handleRandom = () => {
    const value = randomChars();
    setValue(value);
    setItems(searchItems(value));
  };

  return (
    <>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleRandom}>Random</button>
      <List items={items} />
    </>
  );
}